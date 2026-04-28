import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import qs from "qs";
// Define the async thunk for fetching data
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async ({itemperPage = 6, pageNumber = 1}) => {
    // Perform your API fetch here
    const query = {
        populate: [
            "Title",
            "seo",
            "seo.metaImage",
            "seo.schema",
            "thumbnailimage",
            "Postimage",
            "PostData",
        ],
        sort: ["Date:desc"],
        pagination: {
            pageSize: itemperPage,
            page: pageNumber
        },
    };

    const queryString = qs.stringify(query, {
        encodeValuesOnly: true,
    });

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/blog-posts/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);

    const response = await axios.get(endpoint);
    const data = response.data
    // console.log('data',data)
    return data;
});

// Create the data slice
const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        status: 'idle',
        blog: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.blog = action.payload.data;
                state.totalCount = action.payload.meta.pagination.total;
                state.resultsPerPage= action.payload.meta.pagination.pageSize;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export default blogSlice.reducer;
