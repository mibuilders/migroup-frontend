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

const ProjectListingNew = ({ title, projectType }) => {
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
    data
      ?.filter((project) => project?.attributes?.projectStatus === activeTab)
      ?.slice(); // Create a new array before reversing

  if (activeTab === "Completed") {
    filteredProjects.reverse(); // Reverse only for "Completed" tab
  }

  return (
    <div className="bg-primary-color py-[40px] md:py-32">
      {/* Tabs Section */}

      <div className=" container mx-auto">
        <div className="items-center justify-between mb-8 md:flex">
          <div className="headwrap">
            <div className="xl:text-[5rem] flex gap-2 py-6 xl:py-0 justify-start  text-start lg:text-[4rem] text-[2rem] capitalize font-[500] AriensNobela">
              <motion.div
                ref={ref}
                data-splitting=""
                variants={fadeIn("left", 0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <span className="text-secondary-color heading-line ">
                  {title?.split(" ")[0]}
                </span>
              </motion.div>
              <span className="text-white">
                {title?.split(" ").slice(1).join(" ")}
              </span>
            </div>
          </div>
          <div className="flex justify-center flex-wrap">
            {availableTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 mt-8 md:mt-0 text-lg font-semibold capitalize transition-all ${
                  activeTab === tab
                    ? "text-secondary-color border-b-2 border-secondary-color"
                    : "text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {/* Projects Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-[3.125vw] lg:gap-y-[3.125vw]">
          {filteredProjects &&
            filteredProjects.map((project, index) => (
              <div key={index} className=" overflow-hidden">
                <div className="shine">
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
                    className={` relative lg:h-[26.042vw] object-cover ${
                      activeTab.includes("Upcoming") && "blur-md"
                    }`}
                  />
                </div>
                <h5 className="text-secondary-color lg:text-[2.083vw] text-center mt-3 lg:mt-[1.25vw]">
                  {project?.attributes?.projectTitle}
                </h5>
                {activeTab.includes("Ongoing") && (
                  <div className=" lg:mt-[1.25vw] mt-3 flex justify-center">
                    <a
                      href={`/projects/${
                        projectType == "Commercial"
                          ? "commercial"
                          : "residential"
                      }/${project?.attributes?.projectUrl}`}
                    >
                      <Buttons text={"Know More"} />
                    </a>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectListingNew;
