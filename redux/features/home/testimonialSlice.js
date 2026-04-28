import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import qs from "qs";


const testimonialSlice = createSlice({
    name: 'testimonialSlice',
    initialState: { testimonialData: [] },
    reducers: {
        setTestimonialData: (state, action) => {
            state.testimonialData = action.payload;
        },
    },
});

export const { setTestimonialData } = testimonialSlice.actions;

export const fetchTestimonialData = () => async (dispatch) => {
    const query = {
        populate: [],
        sort: ["Date:desc"],

    };

    const queryString = qs.stringify(query, {
        encodeValuesOnly: true,
    });

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/testimonials/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);

    const response = await axios.get(endpoint)
        .then((response) => {
            dispatch(setTestimonialData(response.data.data));
        })
        .catch((error) => console.log(error));
    // console.log('response', response);
};


export default testimonialSlice.reducer;