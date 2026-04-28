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

const ProjectListingNewList = ({ title, projectType, name }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { data } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects({ projectType }));
  }, [dispatch, projectType]);

  // Filter single project based on name and type
  const filteredProjects =
    data &&
    data.filter(
      (project) =>
        project?.attributes?.projectTitle?.toLowerCase() ===
          name?.toLowerCase() &&
        project?.attributes?.projectType === projectType
    );

  return (
    <div className="bg-primary-color py-[30px] container mx-auto md:py-20">
      <div className="container mx-auto">
    

        {/* Single Project Display */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 lg:gap-x-[3.125vw]">
          {filteredProjects && filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => {
              const status = project?.attributes?.projectStatus;

              return (
                <div key={index} className="overflow-hidden">
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
                          ?.data?.attributes?.alternativeText || "project"
                      }
                      className={`relative lg:h-[26.042vw] object-cover`}
                    />
                  </div>

                  <h5 className="text-secondary-color lg:text-[2.083vw] text-center mt-3 lg:mt-[1.25vw]">
                    {project?.attributes?.projectTitle}
                  </h5>

                  {status === "Ongoing" && (
                    <div className="lg:mt-[1.25vw] mt-3 flex justify-center">
                      <a
                        href={`/projects/${
                          projectType.toLowerCase() === "commercial"
                            ? "commercial"
                            : "residential"
                        }/${project?.attributes?.projectUrl}`}
                      >
                        <Buttons text={"Know More"} />
                      </a>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-white text-center">No matching project found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectListingNewList;
