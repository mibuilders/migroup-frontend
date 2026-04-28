import React from "react";
import axios from "axios";
import qs from "qs";
import { useRouter } from "next/router";
import TypologyContainer from "@/components/Typology/TypologyContainer";
import Seo from "@/components/Seo/Seo";

const Slug = ({ currData }) => {
  console.log({ currData });
  const router = useRouter();

//   If no data found, redirect to 404
    if (!currData || currData.length === 0) {
      if (typeof window !== "undefined") {
        router.replace("/404");
      }
      return null; // Avoid rendering anything
    }

  return (
    <div>
      <Seo seo={currData[0]?.attributes?.seo} />
      <TypologyContainer data={currData} />
    </div>
  );
};

export default Slug;

export async function getServerSideProps(context) {
  const { typology } = context.params; // Get slug from URL params
  console.log(typology, "typology");
  const query = {
    populate: [
      "seo",
      "seo.schema",
      "seo.ogtag",
      "seo.twiitercard",
      "seo.metaSocial",
      "Banner.DesktopBanner",
      "Banner.MobileBanner",
      "Banner",
      "Banner.Desktopbanner",
      "Banner.Mobilebanner",
      "projects",
      "projects.projectThumbnail",
      "Faq",
      "Faq.faq",
    ],
  };

  const queryString = qs.stringify(query, {
    encodeValuesOnly: true,
  });

  try {
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/typologies?${queryString}`;
    const response = await axios.get(endpoint);

    console.log("endpoint for typology", endpoint, response);
    const data = response?.data?.data || [];

    // Check if the API returned empty or an error
    if (!data || data.length === 0) {
      return {
        notFound: true,
      };
    }

    // Filter based on the requested slug
    const currData = data.filter((item) => item?.attributes?.slug === typology);

    // If no matching typology, return 404
    if (!currData || currData.length === 0) {
      return {
        notFound: true,
      };
    }
    console.log(currData, "current data");
    return {
      props: {
        currData,
      },
    };
  } catch (error) {
    console.error("Error fetching typologies:", error);
    return {
      notFound: true, // Redirect to 404 in case of API failure
    };
  }
}
