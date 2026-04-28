import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import qs from "qs";


const recentblogSlice = createSlice({
  name: 'recentblog',
  initialState: { recentPost:[] },
  reducers: {
    setRecentData: (state, action) => {
      state.recentPost = action.payload;
    },
  },
});

export const { setRecentData } = recentblogSlice.actions;

export const fetchRecentblog = () => async (dispatch) => {

    const query = {
        populate: [
            "Title",
            "seo",
            "seo.metaImage",
            "seo.schema",
            "thumbnailimage",
            "add_blog_categories",
            "Postimage",
            "PostData",
        ],
        sort: ["Date:desc"],
        pagination: {
            pageSize: 5,
            page: 1
        },
    };

    const queryString = qs.stringify(query, {
        encodeValuesOnly: true,
    });

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/blog-posts/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);

    const response = await axios.get(endpoint)
    .then((response) => {
        dispatch(setRecentData(response.data.data));
      })
      .catch((error) => console.log(error));
};


export default recentblogSlice.reducer;
