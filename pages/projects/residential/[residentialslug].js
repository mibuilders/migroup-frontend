import GetInTouch from "@/components/common/GetInTouch";
import SingleBanner from "@/components/common/SingleBanner";
import Amenities from "@/components/projectDetail/Aminities";
import EMICalculator from "@/components/projectDetail/Calculator";
import ConstuctionUpdate from "@/components/projectDetail/ConstuctionUpdate";
import FloorPlan from "@/components/projectDetail/FloorPlan";
import Location from "@/components/projectDetail/Location";
import ProjectGallery from "@/components/projectDetail/ProjectGallery";
import { fetchSingleProjects } from "@/redux/features/project/projectDetailSlice";
import { store } from "@/redux/store";
import React, { useEffect } from "react";
import Overview from "@/components/projectDetail/Overview";
import Seo from "@/components/Seo/Seo";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const AmenitiesSlider = dynamic(() => import("../../../components/projectDetail/Aminities"), { ssr: false });
const ProjectDetail = ({ projectsinledata }) => {
  const router = useRouter();
  // console.log('projectsinledata', projectsinledata)
  const seo = projectsinledata && projectsinledata[0]?.attributes?.seo;
  const banner = projectsinledata && projectsinledata[0]?.attributes?.Banner;
  const projtitle = projectsinledata && projectsinledata[0]?.attributes?.projectTitle;
  const overview = projectsinledata && projectsinledata[0]?.attributes?.Overview;
  const configuration = projectsinledata && projectsinledata[0]?.attributes?.Configuration;
  const plans = projectsinledata && projectsinledata[0]?.attributes?.Plans;
  const location = projectsinledata && projectsinledata[0]?.attributes?.Location;
  const locadv = projectsinledata && projectsinledata[0]?.attributes?.locationAdvantage;
  const gallery = projectsinledata && projectsinledata[0]?.attributes?.Gallery;
  const constructionupdates = projectsinledata && projectsinledata[0]?.attributes?.constructionupdates;
  const AmenitiesData = projectsinledata && projectsinledata[0]?.attributes?.Amenities;
  

 
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0); // Force scroll to top
    };

    // Scroll to top when the page loads
    handleRouteChange();

    // Scroll to top on route change
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <div className="overflow-hidden">
      <Seo seo={seo} />
      <SingleBanner banner={banner} />
      <Overview overview={overview} configuration={configuration} projtitle={projtitle} />
    { AmenitiesData?.amenities?.data?.length>0 && <AmenitiesSlider  AmenitiesData={AmenitiesData}/>}
      <FloorPlan plans={plans} />
      <Location location={location} locadv={locadv} />
      <ProjectGallery gallery={gallery} />
      <EMICalculator />
      <ConstuctionUpdate constructionupdates={constructionupdates} />
      <GetInTouch />
    </div>
  );
};

export default ProjectDetail;


export async function getServerSideProps({ params }) {
  try {
    // Dispatch the action and await the result
    await store.dispatch(fetchSingleProjects(params?.residentialslug));

    // Retrieve the updated state
    const projectsinledata = store.getState().projsingledata.projsingledata;
    // console.log("Fetched data:", projectsinledata);

    if (!projectsinledata || Object.keys(projectsinledata).length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: { projectsinledata },
    };
  } catch (error) {
    console.log("Error fetching project data", error);
    return {
      props: { projectsinledata: null },
    };
  }
}
