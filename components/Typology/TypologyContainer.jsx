import React, { useRef } from "react";
import SingleBanner from "../common/SingleBanner";
import Details from "./Details";
import ProjectListingNewList from "../project/SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../common/Animation";
import FaqSection from "./FaqSection";

const TypologyContainer = ({ data }) => {
  data = data[0]?.attributes;
  const banner = data.Banner;
  console.log({ data: data.projects });
  const ref = useRef(null);
  return (
    <div className="">
      <SingleBanner banner={banner} />
      {data?.projects && (
       <div className="bg-primary-color">
        <div className="items-center justify-between px-16  md:flex">
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
                <span className=" ">
                Recent 
                </span>
              </motion.div>
           <span>Projects </span>
            </div>
          </div>
      
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.projects?.data?.map((project) => (
            <ProjectListingNewList
              key={project.id}
              projectType={project.attributes.projectType}
              title={project.attributes.projectTitle}
              name={project.attributes.projectTitle}
            />
          ))}
        </div> 
        </div>
      )}
      {data && <Details data={data} />}
   

      {data && data?.Faq && <FaqSection data={data?.Faq} />}
     
    </div>
  );
};

export default TypologyContainer;
