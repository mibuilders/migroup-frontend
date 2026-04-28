import BlogDetail from "@/components/blogs/BlogDetail";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import Seo from "@/components/Seo/Seo";
import React from "react";
import axios from 'axios';
import qs from 'qs'

const BlogInner = ({ blogsingleData,blogbanner }) => {
  // console.log('blogsingleData',blogsingleData)
  // console.log('blogbanner',blogbanner)
  const seo = blogsingleData && blogsingleData[0]?.attributes?.seo;
  const banner = blogbanner?.attributes?.Banner;
  

  return (
    <div className="min-h-screen bg-white">
      <Seo seo={seo} />
      {/* <InnerPageBanner banner={banner} /> */}
     <div className="xl:pt-32 lg:pt-20 pt-14">
     <BlogDetail blogsingleData={blogsingleData && blogsingleData[0]}  />
     </div>
    </div>
  );
};

export default BlogInner;

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
        "seo.metaSocial.image",
        "seo.schema",
        "thumbnailimage",
        "Postimage",
        "PostData",
      ],
      // sort: ["Date:desc"],
      pagination: {
        limit: -1,
      },
    };

    const query1String = qs.stringify(query1, {
      encodeValuesOnly: true,
    });

    const endpoint1 = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/blog-posts/?${query1String}`;
    // console.log(`Final url: ${endpoint1}`);

    const response1 = await axios.get(endpoint1);
    const blogsingleData = response1.data.data;
    console.log("blogsingleData", blogsingleData);


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
    const blogbanner = response?.data?.data;

    if (!blogsingleData || Object.keys(blogsingleData).length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: { blogsingleData,blogbanner },
    };
  } catch (error) {
    console.log("Error", error);
  }
}
