import InnerPageBanner from "@/components/common/InnerPageBanner";
import ProjectListing from "@/components/project/ProjectListing";
import Seo from "@/components/Seo/Seo";
import React from "react";
import axios from "axios";
import qs from "qs";
import ProjectListingNew from "@/components/project/ProjectListingNew";
import SingleBanner from "@/components/common/SingleBanner";

const Commercialproject = ({ seodata }) => {
  const seo = seodata?.attributes?.seo;
  const banner = seodata?.attributes?.Banner;

  return (
    <div className="min-h-screen">
      <Seo seo={seo} />
      {/* <InnerPageBanner banner={banner} /> */}
      <SingleBanner banner={banner} />

      {/* <ProjectListing projectType="Commercial" title={seodata?.attributes?.sectionTitle} /> */}
      <ProjectListingNew
        projectType="Commercial"
        title={seodata?.attributes?.sectionTitle}
      />
    </div>
  );
};

export default Commercialproject;

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

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/commercial-page/?${queryString}`;
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
