import InnerPageBanner from "@/components/common/InnerPageBanner";
import Overview from "@/components/contact/Overview";
import React from "react";
import axios from "axios";
import qs from "qs";
import Seo from "@/components/Seo/Seo";
import SingleBanner from "@/components/common/SingleBanner";

const contact = ({ seodata }) => {
  const seo = seodata?.attributes?.seo;
  const banner = seodata?.attributes?.Banner;
  const contactdata = seodata;

  return (
    <div>
      <Seo seo={seo} />
      {/* <InnerPageBanner banner={banner} /> */}
      <SingleBanner banner={banner} />
      <Overview contactdata={contactdata} />
    </div>
  );
};

export default contact;

export async function getServerSideProps() {
  try {
    const query = {
      populate: [
        "Banner.DesktopBanner",
        "Banner.MobileBanner",
        "seo.metaImage",
        "seo.metaSocial.image",
        "seo.schema",
        "Phone.number",
      ],
    };

    const queryString = qs.stringify(query, {
      encodeValuesOnly: true,
    });

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/contact-us-page/?${queryString}`;
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
