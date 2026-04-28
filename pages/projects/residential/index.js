import InnerPageBanner from "@/components/common/InnerPageBanner";
import ProjectListing from "@/components/project/ProjectListing";
import React from "react";
import axios from "axios";
import qs from "qs";
import Seo from "@/components/Seo/Seo";
import SingleBanner from "@/components/common/SingleBanner";
import ProjectListingNew from "@/components/project/ProjectListingNew";
import BannerSwiper from "@/components/common/DynamicBanner";

const Residentialproject = ({ seodata }) => {
  // console.log('seodata', seodata)
  const seo = seodata?.attributes?.seo;
  const banner = seodata?.attributes?.Banner;
console.log({aman:banner});
  console.log(seodata?.attributes);
  return (
    <div className="min-h-screen">
      <Seo seo={seo} />
      {/* <InnerPageBanner banner={banner} /> */}
      <BannerSwiper banners={banner} />
      {/* <ProjectListing
        projectType="Residential"
        title={seodata?.attributes?.sectionTitle}
      /> */}
      <ProjectListingNew
        projectType="Residential"
        title={seodata?.attributes?.sectionTitle}
      />
    </div>
  );
};

export default Residentialproject;

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

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/residential-page/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);
    const response = await axios.get(endpoint);
    const seodata = response.data.data;

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
