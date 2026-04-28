import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
export const getwebsiteLeads = createAsyncThunk('websiteLead/getwebsiteLeads', async (formData) => {
    // console.log('formData',formData)

    const finaldata = {
        data: formData,
    };

    console.log('finaldata',finaldata)
    const headers = {
        'Content-Type': 'application/json',
    }
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/website-leads`;
    const response = await axios.post(endpoint, finaldata, headers);
    // console.log('response',response)
    return response.data.data
});

// Create the filter slice
const websiteleadSlice = createSlice({
    name: 'websiteLead',
    initialState: {
        status: 'idle',
        websiteLead: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getwebsiteLeads.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getwebsiteLeads.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.websiteLead = action.payload;
            })
            .addCase(getwebsiteLeads.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default websiteleadSlice.reducer;