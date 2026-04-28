import InnerPageBanner from "@/components/common/InnerPageBanner";
import NewsListing from "@/components/news/NewsListing";
import Seo from "@/components/Seo/Seo";
import React from "react";
import axios from 'axios';
import qs from 'qs'

const NewsList = ({ seodata }) => {
  const seo = seodata?.attributes?.seo;
  const banner = seodata?.attributes?.Banner;
  return (
    <div className="min-h-screen bg-white">
      <Seo seo={seo} />
      <InnerPageBanner banner={banner} />
      <NewsListing title={seodata?.attributes?.sectionTitle} />
    </div>
  );
};

export default NewsList;

export async function getServerSideProps({ params }) {
  try {
    const query1 = {
      populate: [
        "Banner.DesktopBanner",
        "Banner.MobileBanner",
        "seo",
        "seo.metaImage",
        "seo.metaSocial.image",
        "seo.schema",
      ],
    };

    const query1String = qs.stringify(query1, {
      encodeValuesOnly: true,
    });

    const endpoint1 = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/media-page/?${query1String}`;
    
    const response1 = await axios.get(endpoint1);
    const seodata = response1.data.data;

    return {
      props: { seodata },
    };
  } catch (error) {
    console.log("Error fetching data:", error);

    // Ensure the function always returns an object
    return {
      props: { seodata: null },
    };
  }
}
