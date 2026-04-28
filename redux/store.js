import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './features/project/projectSlice'
import projectDetailReducer from './features/project/projectDetailSlice'
import websiteleadReducer from './features/lead/websiteleadSlice'
import seoReducer from './features/seoSlice'
import blogReducer from './features/blog/blogSlice'
import recentblogReducer from './features/blog/recentblogSlice'
import homePageReducer from './features/home/homePageSlice'
import awardsReducer from './features/News/awardsSlice'
import testimonialsReducer from './features/home/testimonialSlice'
import careerReducer from './features/career/careerSlice'
import formDetailSlice from './features/formDetailSlice'
import mediaSlice from './features/News/mediaSlice'
import eventSlice from './features/News/eventSlice'
import footerSlice from './features/footer/footerSlice'

export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    projects: projectReducer,
    projsingledata: projectDetailReducer,
    websitelead: websiteleadReducer,
    seo: seoReducer,
    blogPost: blogReducer,
    recentblogPost: recentblogReducer,
    awards: awardsReducer,
    testimonials: testimonialsReducer,
    careers: careerReducer,
    formdetail: formDetailSlice,
    media: mediaSlice,
    events: eventSlice,
    footer:footerSlice
  },
})