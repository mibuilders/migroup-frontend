import BlogsListing from "@/components/blogs/BlogList";
import GetInTouch from "@/components/common/GetInTouch";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import React from "react";
import axios from "axios";
import qs from "qs";
import Seo from "@/components/Seo/Seo";
import SingleBanner from "@/components/common/SingleBanner";

const Blogs = ({ seodata }) => {
  const seo = seodata?.attributes?.seo;
  const banner = seodata?.attributes?.Banner;
  return (
    <div className="min-h-screen">
      <Seo seo={seo} />
      {/* <InnerPageBanner banner={banner} /> */}
      <SingleBanner banner={banner} />
      <BlogsListing title={seodata?.attributes?.sectionTitle} />
      <GetInTouch />
    </div>
  );
};

export default Blogs;

export async function getServerSideProps() {
  try {
    const query = {
      populate: [
        "Banner.DesktopBanner",
        "Banner.MobileBanner",
        "seo.metaImage",
        "seo.metaSocial.image",
        "seo.schema",
      ],
    };

    const queryString = qs.stringify(query, {
      encodeValuesOnly: true,
    });

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/blog-page/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);

    const response = await axios.get(endpoint);
    const seodata = response?.data?.data;

    return {
      props: { seodata },
    };
  } catch (error) {
    console.log("Error fetching data", error);
    return {
      props: { seodata: null },
    };
  }
}
