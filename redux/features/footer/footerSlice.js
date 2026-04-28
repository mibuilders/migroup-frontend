import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import qs from "qs";


const footerSlice = createSlice({
    name: 'footerSlice',
    initialState: { footerData: [] },
    reducers: {
        setFooterData: (state, action) => {
            state.footerData = action.payload;
        },
    },
});

export const { setFooterData } = footerSlice.actions;

export const fetchfooterData = () => async (dispatch) => {
    try {
        const query = {
            populate: ['Logo', 'Address', 'quickLinks.link', 'Phone.number', 'Email.Email'],
        };

        const queryString = qs.stringify(query, {
            encodeValuesOnly: true,
        });

        const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/footer/?${queryString}`;

        const response = await axios.get(endpoint);
        console.log('API Response:', response.data);
        dispatch(setFooterData(response.data.data));
    } catch (error) {
        console.log('Error fetching footer data:', error);
    }
};



export default footerSlice.reducer;