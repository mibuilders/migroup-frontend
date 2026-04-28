import Opening from "@/components/careers/Opening";
import Overview from "@/components/careers/Overview";
import GetInTouch from "@/components/common/GetInTouch";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import React from "react";
import axios from "axios";
import qs from "qs";
import Seo from "@/components/Seo/Seo";
import SingleBanner from "@/components/common/SingleBanner";

const career = ({ seodata, jobs }) => {
  const seo = seodata?.attributes?.seo;
  const banner = seodata?.attributes?.Banner;
  const overview = seodata?.attributes?.Overview;
  const jobopening = seodata?.attributes?.jobOpening;

  return (
    <div className="min-h-screen bg-primary-color">
      <Seo seo={seo} />
      {/* <InnerPageBanner banner={banner} /> */}
      <SingleBanner banner={banner} />
      <Overview overview={overview} />
      <Opening jobopening={jobopening} jobs={jobs} />
      {/* <GetInTouch /> */}
    </div>
  );
};

export default career;

export async function getServerSideProps() {
  try {
    const query = {
      populate: [
        "Banner.DesktopBanner",
        "Banner.MobileBanner",
        "seo.metaImage",
        "seo.metaSocial.image",
        "seo.schema",
        "Overview.Image",
        "jobOpening",
      ],
    };

    const queryString = qs.stringify(query, {
      encodeValuesOnly: true,
    });

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/career-page/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);
    const response = await axios.get(endpoint);
    const seodata = response.data.data;

    const query1 = {
      populate: [
        "Job_Title",
        "JobType",
        "job_department",
        "jobicon",
        "jobtags",
      ],
      sort: ["Date:desc"],
    };

    const queryString1 = qs.stringify(query1, {
      encodeValuesOnly: true,
    });

    const endpoint1 = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/job-openings?${queryString1}`;
    // console.log(`Final url: ${endpoint}`);

    const response1 = await axios.get(endpoint1);

    const jobs = response1.data.data;

    return {
      props: { seodata, jobs },
    };
  } catch (error) {
    console.log("Error fetching data", error);
    return {
      props: { seodata: null },
    };
  }
}
