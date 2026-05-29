import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProjects } from "@/redux/features/project/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import Heading from "../common/Heading";
import { cleanImage } from "../imageHandling";
import Buttons from "../common/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../common/Animation";

const allowedTitles = [
  "MI Gordon",
  "MI Royal Court - I",
  "MI Retreat Center",
  "MI Retreat Center - II",
];
const ProjectListing = ({ title, projectType }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  // useEffect(() => {
  //   dispatch(fetchProjects({ projectType: projectType }));
  // }, [dispatch]);
  const { data } = useSelector((state) => state.projects);
  //   console.log("data", data);

  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    dispatch(fetchProjects({ projectType: projectType }));
  }, [dispatch]);

  // Count projects for each tab
  const projectCounts = {
    Ongoing: data?.filter(
      (project) => project?.attributes?.projectStatus === "Ongoing"
    ).length,
    Completed: data?.filter(
      (project) => project?.attributes?.projectStatus === "Completed"
    ).length,
    Upcoming: data?.filter(
      (project) => project?.attributes?.projectStatus === "Upcoming"
    ).length,
  };

  // Tabs to display
  const availableTabs = Object.entries(projectCounts)
    .filter(([, count]) => count > 0)
    .map(([tab]) => tab);

  useEffect(() => {
    // Ensure activeTab is set only if it's null or unavailable in the new data
    if (
      (!activeTab || !availableTabs.includes(activeTab)) &&
      availableTabs.length > 0
    ) {
      setActiveTab(availableTabs[0]); // Select the first available tab dynamically
    }
  }, [availableTabs]);

  // Filter projects based on the active tab
  const filteredProjects =
    data &&
    data?.filter((project) => project?.attributes?.projectStatus === activeTab);

  if (filteredProjects) {
    filteredProjects.sort((a, b) => {
      const hasButton = (p) =>
        ["Ongoing", "Completed"].includes(activeTab) &&
        allowedTitles.includes(p?.attributes?.projectTitle);
      return (hasButton(b) ? 1 : 0) - (hasButton(a) ? 1 : 0);
    });
  }
  // console.log(filteredProjects, "filter");
  return (
    <div className="bg-primary-color py-[40px] md:py-20">
      {/* Tabs Section */}
      <>
        <div className="px-6 xl:px-32">
          <div className="items-center justify-between mb-8 md:flex">
            <div className="headwrap">
              <div className="xl:text-[3.5rem] xl:leading-[5rem] leading-[3rem] flex gap-5 py-6 xl:py-0 justify-start  text-start lg:text-[3.5rem] text-[2rem] capitalize font-[500] AriensNobela">
                <motion.div
                  ref={ref}
                  data-splitting=""
                  variants={fadeIn("left", 0.2)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <span className="text-secondary-color">{title}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xl:h-[2px] xl:w-[200px] h-[2px] w-[100px] "
                    viewBox="0 0 200 2"
                    fill="none"
                  >
                    <path d="M0 1H200" stroke="#AD843E" />
                  </svg>
                </motion.div>
              </div>
            </div>
            <div className="flex justify-center flex-wrap">
              {availableTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 mt-8 md:mt-0 text-lg font-semibold capitalize transition-all ${activeTab === tab
                    ? "text-secondary-color border-b-2 border-secondary-color"
                    : "text-white"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
      {/* Projects Section */}
      <div className="feature_projects_container">
        {filteredProjects &&
          filteredProjects.map((project, index) => (
            <div
              key={`residentialproject${index}`}
              className={`feature_project flex flex-1 items-center ${index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
                } lg:flex-row flex-col w-full overflow-hidden md:mb-10`}
            >
              {/* Left Section: Image */}
              <div className="flex-[0.6]   flex justify-center lg:py-20 xl:pt-20 pt-0 xl:pb-10">
                <div className="relative shine">
                  <div className="absolute px-5 py-2 right-0 top-0 z-10 AriensNobela font-[600] text-[1.5rem] bg-secondary-color">
                    {`${activeTab} Project`}
                  </div>
                  <Image
                    src={cleanImage(
                      project?.attributes?.projectListing?.projectThumbnail
                        ?.data?.attributes?.url
                    )}
                    height={1000}
                    width={1000}
                    alt={
                      project?.attributes?.projectListing?.projectThumbnail
                        ?.data?.attributes?.alternativeText
                        ? project?.attributes?.projectListing?.projectThumbnail
                          ?.data?.attributes?.alternativeText
                        : "project"
                    }
                    className={`h-full md:w-[500px] lg:w-full xl:w-full w-full object-contain ${activeTab === "Upcoming" ? "blur-md" : ""
                      }`}
                  />
                </div>
              </div>

              {/* Right Section: Text Content */}
              <div className="flex-[0.4]">
                <div className="px-5 py-10 font-bold capitalize text-start xl:pl-20 xl:px-32 lg:py-40 xl:py-48">
                  <h3 className="flex items-center pb-10 text-2xl text-secondary-color xl:text-4xl lg:text-3xl">
                    {project?.attributes?.projectListing?.logo?.data?.attributes
                      ?.url ? (
                      <Image
                        src={cleanImage(
                          project?.attributes?.projectListing?.logo?.data
                            ?.attributes?.url
                        )}
                        height={100}
                        width={150}
                        alt={
                          project?.attributes?.projectListing?.logo?.data
                            ?.attributes?.alternativeText
                            ? project?.attributes?.projectListing?.logo?.data
                              ?.attributes?.alternativeText
                            : "logo"
                        }
                        className="h-auto w-[150px] object-contain"
                      />
                    ) : (
                      <div className="xl:text-[3.5rem] xl:leading-[5rem] leading-[3rem] flex gap-5 justify-start  text-start lg:text-[3.5rem] text-[2rem] capitalize font-[500] AriensNobela">
                        <motion.div
                          ref={ref}
                          data-splitting=""
                          variants={fadeIn("left", 0.2)}
                          initial={"hidden"}
                          whileInView={"show"}
                          viewport={{ once: false, amount: 0.2 }}
                        >
                          <span className="text-secondary-color">
                            {project?.attributes?.projectTitle}
                          </span>
                        </motion.div>
                      </div>
                    )}
                  </h3>
                  { }
                  {project?.attributes?.projectListing?.shortDescription && (
                    <p className="text-lg font-medium leading-6 text-white xl:leading-8">
                      {project?.attributes?.projectListing?.shortDescription}
                    </p>
                  )}
                  {["Ongoing", "Completed"].includes(activeTab) &&
                    allowedTitles.includes(
                      project?.attributes?.projectTitle
                    ) && (
                      <div className="pt-10">
                        <a
                          href={`/projects/${projectType == "Commercial"
                            ? "commercial"
                            : "residential"
                            }/${project?.attributes?.projectUrl}`}
                        >
                          <Buttons text={"Know More"} />
                        </a>
                      </div>
                    )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectListing;
