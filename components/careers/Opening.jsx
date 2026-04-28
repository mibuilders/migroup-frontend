import React, { useEffect, useRef, useState } from "react";
import JobCard from "./JobCard";
import { motion } from "framer-motion";
import { fadeIn } from "../common/Animation";
import Heading from "../common/Heading";
import Link from "next/link";

const Opening = ({ jobopening, jobs }) => {
  const ref = useRef();
  const [activeTab, setActiveTab] = useState("All");
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    // Extract unique departments from jobdata
    const uniqueDepartments = Array.from(
      new Set(
        jobs.map(
          (job) => job?.attributes?.job_department?.data?.attributes?.Title
        )
      )
    );

    setDepartments(["All", ...uniqueDepartments]);
  }, [jobs]);

  console.log("activeTab", activeTab);
  const filteredJobs =
    activeTab === "All"
      ? jobs
      : jobs.filter(
          (job) =>
            job?.attributes?.job_department?.data?.attributes?.Title ===
            activeTab
        );
  const jobData = [
    {
      icon: "/Images/icons/jobcard1.svg",
      field: "Engineering",
      title: "Junior Management",
      location: "Chennai",
      duration: "8 years",
      perks: ["Junior Management", "Account & Taxation", "Finance & Accounts"],
    },
    {
      icon: "/Images/icons/jobcard1.svg",
      field: "PMC",
      title: "Junior Management",
      location: "Chennai",
      duration: "8 years",
      perks: ["Junior Management", "Account & Taxation", "Finance & Accounts"],
    },
    {
      icon: "/Images/icons/jobcard1.svg",
      field: "Finance and Accounts",
      title: "Junior Management",
      location: "Chennai",
      duration: "8 years",
      perks: ["Junior Management", "Account & Taxation", "Finance & Accounts"],
    },
    {
      icon: "/Images/icons/jobcard1.svg",
      title: "Junior Management",
      field: "Billing",
      location: "Chennai",
      duration: "8 years",
      perks: ["Junior Management", "Account & Taxation", "Finance & Accounts"],
    },
    {
      icon: "/Images/icons/jobcard1.svg",
      field: "Legal",
      title: "Junior Management",
      location: "Chennai",
      duration: "8 years",
      perks: ["Junior Management", "Account & Taxation", "Finance & Accounts"],
    },
  ];

  return (
    jobopening && (
      <div className=" bg-[#F4EBE2] lg:py-[5.208vw] py-2">
        <div className=" container mx-auto">
          <div className="headwrap">
            {/* <Heading>{jobopening?.Title}</Heading> */}
            <div className="xl:text-[5rem] flex gap-2 py-6 xl:py-0 justify-start  text-center lg:text-[4rem] text-[2rem] capitalize font-[500] AriensNobela">
              <motion.div
                ref={ref}
                data-splitting=""
                variants={fadeIn("left", 0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <span className="text-secondary-color heading-line ">
                  {jobopening?.Title?.split(" ")[0]}
                </span>
              </motion.div>
              <span className="text-black">
                {jobopening?.Title?.split(" ").slice(1).join(" ")}
              </span>
            </div>
          </div>
          <div>
            <div
              className="text-black lg:text-[0.781vw] text-[1rem] lg:py-[1.875vw] py-4"
              dangerouslySetInnerHTML={{
                __html: jobopening?.Description,
              }}
            ></div>
            <div className="flex flex-col justify-between w-full gap-5 lg:flex-row ">
              <p className="text-black lg:text-[1.042vw] text-[1.2rem]  lg:py-0 py-4">
                Please email your resume to{" "}
                <Link href={`mailto:${jobopening?.emailText}`}>
                  {jobopening?.emailText}
                </Link>
              </p>
              <div className="flex flex-row flex-wrap gap-x-4">
                {departments?.length > 1 &&
                  departments?.map((item, index) => (
                    <p
                      key={index}
                      className={`cursor-pointer Alata lg:text-[0.938vw] text-[1rem] ${
                        activeTab === item
                          ? "text-[#AD843E] underline"
                          : "text-black"
                      }`}
                      onClick={() => setActiveTab(item)}
                    >
                      {item}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-24  lg:gap-[5.208vw] my-10">
            {filteredJobs &&
              filteredJobs.map((item, index) => (
                <JobCard key={index} content={item} />
              ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Opening;
