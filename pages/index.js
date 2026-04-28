import GetInTouch from "@/components/common/GetInTouch";
import CounterSection from "@/components/home/CounterSection";
import HomeBanner from "@/components/home/HomeBanner";
import HomeBlog from "@/components/home/HomeBlog";
import HomeNewEvents from "@/components/home/HomeNewEvents";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeVideo from "@/components/home/HomeVideo";
import OverView from "@/components/home/OverView";
import ProjectSection from "@/components/home/ProjectSection";
import React from "react";
import Seo from "@/components/Seo/Seo";
import axios from "axios";
import qs from "qs";
import { store } from "@/redux/store";
import { fetchMedia } from "@/redux/features/News/mediaSlice";
import { fetchBlogs } from "@/redux/features/blog/blogSlice";
import { fetchTestimonialData } from "@/redux/features/home/testimonialSlice";

const Homepage = ({ homedata, newsdata, blogdata, testimonialdata }) => {
  // console.log('homedata', homedata)
  const seo = homedata?.attributes?.seo;
  const banner = homedata?.attributes?.Banner;
  const overview = homedata?.attributes?.Overview;
  const stats = homedata?.attributes?.stats;
  const projectdata = homedata?.attributes?.Project;
  const video = homedata?.attributes?.featuredVideo;

  return (
    <div className="min-h-screen overflow-hidden">
      <Seo seo={seo} />
      <HomeBanner banner={banner} />
      <OverView overview={overview} />
      <CounterSection stats={stats} />
      <ProjectSection projectdata={projectdata} />
      <HomeVideo video={video} />
      <HomeNewEvents newsdata={newsdata} />
      {testimonialdata?.length > 0 &&<HomeTestimonials testimonialdata={testimonialdata} />}
      {blogdata?.length > 0 && <HomeBlog blogdata={blogdata} />}
      <GetInTouch />
    </div>
  );
};

export default Homepage;

export async function getServerSideProps() {
  try {
    const query = {
      populate: [
        "Banner.Desktopbanner",
        "Banner.Mobilebanner",
        "seo.metaImage",
        "seo.metaSocial.image",
        "seo.schema",
        "Overview.featuredImage",
        "Overview.CTA.brochure",
        "Project",
        "Project.projects.projectListing.logo",
        "Project.projects.projectListing.projectThumbnail",
        "stats",
        "featuredVideo",
      ],
    };

    const queryString = qs.stringify(query, {
      encodeValuesOnly: true,
    });

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/home-page/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);
    const response = await axios.get(endpoint);
    const homedata = response.data.data;

    await store.dispatch(fetchMedia({ itemperPage: 6 }));
    const newsdata = store.getState().media.media;

    await store.dispatch(fetchBlogs({ itemperPage: 6 }));
    const blogdata = store.getState().blogPost.blog;

    await store.dispatch(fetchTestimonialData());
    const testimonialdata = store.getState().testimonials.testimonialData;

    return {
      props: { homedata, newsdata, blogdata, testimonialdata },
    };
  } catch (error) {
    console.log("Error fetching data", error);
    return {
      props: { homedata: null },
    };
  }
}
