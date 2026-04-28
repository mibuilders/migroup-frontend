import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import qs from "qs";
// Define the async thunk for fetching data
export const fetchProjects = createAsyncThunk('projects/fetchProjects', async ({ projectType }) => {
    // Perform your API fetch here

    const query = {
        populate: [
            "seo.metaImage",
            "seo.metaSocial.image",
            "seo.schema",
            "projectListing.projectThumbnail",
            "projectListing.logo",
            "Date",
            "Overview"
        ],
        filters: {
            projectType: {
                $eq: projectType,
            },

        },
        sort: ["Date:desc"],
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
const projectSlice = createSlice({
    name: 'projects',
    initialState: {
        status: 'idle',
        data: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export default projectSlice.reducer;
