import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formDetails: {},
};

const formDetailSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
       
        setFormDetails: (state, action) => {
            state.formDetails = action.payload;
        },
       
        resetFormDetails: (state) => {
            state.formDetails = {};
        },
    },
});

export const {
    setFormDetails,
    resetFormDetails,
} = formDetailSlice.actions;

export default formDetailSlice.reducer;
