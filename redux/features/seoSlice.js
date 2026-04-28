import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import qs from "qs";
// Define the async thunk for fetching data
export const fetchSeo = createAsyncThunk('seo/fetchSeo', async (seoslug) => {
    // Perform your API fetch here

    const query = {
        populate: [
            "seo",
            "seo.metaImage",
            "seo.schema",
        ],
    };

    const queryString = qs.stringify(query, {
        encodeValuesOnly: true,
    });

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/${seoslug}/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);

    const response = await axios.get(endpoint);
    const data = response.data.data
    return data;
});

// Create the data slice
const seoSlice = createSlice({
    name: 'seo',
    initialState: {
        status: 'idle',
        seo: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSeo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSeo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchSeo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export default seoSlice.reducer;
