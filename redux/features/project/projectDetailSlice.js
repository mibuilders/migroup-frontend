import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import qs from "qs";
// Define the async thunk for fetching data
export const fetchSingleProjects = createAsyncThunk('projects/fetchSingleProjects', async (projslug) => {
    // Perform your API fetch here

    const query = {
        filters: {
            projectUrl: {
                $eq: projslug
            },
        },
        populate: ['Banner.DesktopBanner','Banner.MobileBanner','Brochure', 'Overview', 'Amenities.amenities.icon', 'Location', 'Gallery.gallerytabs.galleryImage', 'Gallery.videotabcontent','Gallery.videotabcontent.videothumb','Gallery.videotabcontent.video','seo.metaImage', 'seo.metaSocial.image', 'seo.schema','projectListing.projectThumbnail','projectListing.logo','locationAdvantage.landmark','constructionupdates.Updates.Image','Gallery.gallerytabs.video','Configuration','Plans.planImages'],
        pagination: {
            limit: -1
        },
    };

    const queryString = qs.stringify(query, {
        encodeValuesOnly: true,
    });

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/projects/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);

    const response = await axios.get(endpoint);
    const data = response.data.data

    return data;
});

// Create the data slice
const projectDetailSlice = createSlice({
    name: 'projects',
    initialState: {
        status: 'idle',
        projsingledata: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleProjects.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSingleProjects.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.projsingledata = action.payload;
            })
            .addCase(fetchSingleProjects.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export default projectDetailSlice.reducer;
