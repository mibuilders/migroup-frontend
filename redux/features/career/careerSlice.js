import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import qs from "qs";
// Define the async thunk for fetching data
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
    // Perform your API fetch here
    const query = {
        populate: [
            "Job_Title",
            "JobType",
            "job_department",
        ],
        sort: ["Date:desc"],
        // pagination: {
        //     pageSize: itemperPage,
        //     page: pageNumber
        // },
    };

    const queryString = qs.stringify(query, {
        encodeValuesOnly: true,
    });

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/job-openings/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);

    const response = await axios.get(endpoint);
    const data = response.data
    // console.log('data',data)
    return data;
});

// Create the data slice
const careerSlice = createSlice({
    name: 'jobs',
    initialState: {
        status: 'idle',
        job: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.job = action.payload.data;
                state.totalCount = action.payload.meta.pagination.total;
                state.resultsPerPage= action.payload.meta.pagination.pageSize;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export default careerSlice.reducer;
