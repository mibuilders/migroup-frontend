import AboutMiGroup from "@/components/about/AboutMiGroup";
import ManagementTeam from "@/components/about/ManagementTeam";
import OurMission from "@/components/about/OurMission";
import GetInTouch from "@/components/common/GetInTouch";
import SingleBanner from "@/components/common/SingleBanner";
import Seo from "@/components/Seo/Seo";
import React from "react";
import axios from "axios";
import qs from "qs";
import Founder from "@/components/about/Founder";
import MissionVision from "@/components/about/MissionVision";

const About = ({ aboutusdata }) => {
  const seo = aboutusdata?.attributes?.seo;
  const banner = aboutusdata?.attributes?.Banner;
  console.log({banner});
  const overview = aboutusdata?.attributes?.Overview;
  const vision = aboutusdata?.attributes?.Vision;
  const mission = aboutusdata?.attributes?.Mission;
  const team = aboutusdata?.attributes?.Team;
  const founder = aboutusdata?.attributes?.Founder;
  console.log({ founder });

  return (
    <div className=" ">
      <Seo seo={seo} />
      <SingleBanner banner={banner} />
      <AboutMiGroup overview={overview} />
      <div className=" hidden lg:block">
        <MissionVision vision={vision} mission={mission} />
      </div>
      <div className=" lg:hidden block">
        <OurMission vision={vision} mission={mission} />
      </div>
      <Founder team={founder} />
      <ManagementTeam team={team} />
      <GetInTouch />
    </div>
  );
};

export default About;

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
        "Overview.Image2",
        "Team.team.Image",
        "Founder.team.Image",
        "Founder",
        "Vision",
        "Mission",
      ],
    };

    const queryString = qs.stringify(query, {
      encodeValuesOnly: true,
    });

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/about-us-page/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);
    const response = await axios.get(endpoint);
    const aboutusdata = response.data.data;

    return {
      props: { aboutusdata },
    };
  } catch (error) {
    console.log("Error fetching data", error);
    return {
      props: { aboutusdata: null },
    };
  }
}
