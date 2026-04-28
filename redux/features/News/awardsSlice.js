import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import qs from "qs";


const awardsSlice = createSlice({
    name: 'awardsSlice',
    initialState: { awardsData: [] },
    reducers: {
        setAwardData: (state, action) => {
            state.awardsData = action.payload;
        },
    },
});

export const { setAwardData } = awardsSlice.actions;


export const fetchAwardsData = () => async (dispatch) => {
    const query = {
        populate: [
            'Title',
            'Image',
        ],
        sort: ["Year:desc"],
        pagination: {
            limit: -1
        },

    };

    const queryString = qs.stringify(query, {
        encodeValuesOnly: true,
    });

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/awards/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);

    const response = await axios.get(endpoint)
        .then((response) => {
            dispatch(setAwardData(response.data.data));
        })
        .catch((error) => console.log(error));
    // console.log('response', response);
};


export default awardsSlice.reducer;