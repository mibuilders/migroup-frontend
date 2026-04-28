import InnerPageBanner from "@/components/common/InnerPageBanner";
import NewsDetail from "@/components/news/NewsDetail";
import Seo from "@/components/Seo/Seo";
import React from "react";
import axios from 'axios';
import qs from 'qs'

const NewsInner = ({newssingledata, newsbanner}) => {
  const seo = newssingledata && newssingledata[0]?.attributes?.seo;
  const banner = newsbanner?.attributes?.Banner;


  return (
    <div className="min-h-screen">
      <Seo seo={seo} />
      <InnerPageBanner banner={banner} />
      <NewsDetail newssingledata={newssingledata && newssingledata[0]} />
    </div>
  );
};

export default NewsInner;


export async function getServerSideProps({ params }) {
  // console.log('params', params)

  try {
    // Blog Detail
    const query1 = {
      filters: {
        slug: {
          $eq: params.slug,
        },
      },

      populate: [
        "Title",
        "seo",
        "seo.metaImage",
        "seo.schema",
        "thumbnailImage",
        "mediaImage",
        "mediaType",
      ],
      // sort: ["Date:desc"],
      pagination: {
        limit: -1,
      },
    };

    const query1String = qs.stringify(query1, {
      encodeValuesOnly: true,
    });

    const endpoint1 = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/media-posts/?${query1String}`;
    // console.log(`Final url: ${endpoint1}`);

    const response1 = await axios.get(endpoint1);
    const newssingledata = response1.data.data;
    // console.log("newssingledata", newssingledata);


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

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/media-page/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);

    const response = await axios.get(endpoint);
    const newsbanner = response?.data?.data;

    if (!newssingledata || Object.keys(newssingledata).length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: { newssingledata, newsbanner },
    };
  } catch (error) {
    console.log("Error", error);
  }
}