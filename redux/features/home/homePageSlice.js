import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import qs from "qs";


const homePageSlice = createSlice({
  name: 'homePageSlice',
  initialState: { homePageData: [] },
  reducers: {
    setHomeData: (state, action) => {
      state.homePageContent = action.payload;
    },
  },
});

export const { setHomeData } = homePageSlice.actions;


export const fetchHomePageData = () => async (dispatch) => {
  const query = {
    populate: [
      'seo', 'Banner' ,  'Banner.Desktopvideo', 'Banner.Mobilevideo'
    ],
  };

  const queryString = qs.stringify(query, {
    encodeValuesOnly: true,
  });

  const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/home-page`;
  // console.log(`Final url: ${endpoint}`);

  const response = await axios.get(endpoint)
    .then((response) => {
      dispatch(setHomeData(response.data.data));
    })
    .catch((error) => console.log(error));
console.log('response', response);
};


export default homePageSlice.reducer;