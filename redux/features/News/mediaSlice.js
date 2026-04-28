import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import qs from "qs";
// Define the async thunk for fetching data
export const fetchMedia = createAsyncThunk('news/fetchMedia', async ({itemperPage = 6, pageNumber = 1}) => {
    // Perform your API fetch here
    const query = {
        populate: [
            "Title",
            "seo",
            "seo.metaImage",
            "seo.schema",
            "thumbnailImage",
            "mediaImage",
            "mediaType",],
        // sort: ["Article.Date:desc"],
        sort: ["Date:desc"],
        pagination: {
            pageSize: itemperPage,
            page: pageNumber
        },
    };

    const queryString = qs.stringify(query, {
        encodeValuesOnly: true,
    });

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/media-posts/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);

    const response = await axios.get(endpoint);
    const data = response.data
    // console.log('data',data)
    return data;
});

// Create the data slice
const mediaSlice = createSlice({
    name: 'media',
    initialState: {
        status: 'idle',
        media: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMedia.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMedia.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.media = action.payload.data;
                state.totalCount = action.payload.meta.pagination.total;
                state.resultsPerPage = action.payload.meta.pagination.pageSize;
            })
            .addCase(fetchMedia.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export default mediaSlice.reducer;