import React, { useRef, useState } from "react";
import Container from "../common/Conatiner";
import Image from "next/image";
import { fadeIn } from "../common/Animation";
import { motion } from "framer-motion";
import Heading from "../common/Heading";

const Location = ({ location, locadv }) => {
  const [openSection, setOpenSection] = useState(locadv[0]?.id);
  const ref = useRef(null);
  // console.log("location", location);
  // console.log("locadv", locadv);

  return (
    <>
      {location && location?.showLocation && (
        <section className="bg-white">
          <div className=" container mx-auto py-10 lg:py-[5.208vw]">
            <div className="text-center headwrap xl:pb-2 pb-10">
              <div className="xl:text-[5rem] flex gap-2  justify-center  text-center lg:text-[4rem] text-[2rem] capitalize font-[500] AriensNobela">
                <motion.div
                  //  ref={ref}
                  data-splitting=""
                  variants={fadeIn("left", 0.2)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <span className="text-secondary-color">Location</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 2"
                    fill="none"
                  >
                    <path d="M0 1H200" stroke="#181D23" />
                  </svg>
                </motion.div>
                <span className="text-black ">Advantage</span>
              </div>
            </div>

            <div className="flex flex-col gap-5 xl:pt-20 xl:flex-row">
              <div className="flex-[0.5] map">
                <div
                  className="h-full lg:h-[40vw]"
                  dangerouslySetInnerHTML={{ __html: location?.googleMap }}
                ></div>
                {/* <Image
                  src={"/Images/Project/location.png"}
                  height={1000}
                  width={1000}
                  alt="Logo"
                  className="w-full h-full"
                /> */}
              </div>
              <div className="flex-[0.5]">
                {/* Sections for Business Districts, Schools, Colleges, and Hotels */}
                {locadv.map((section) => (
                  <div key={section.id} className="mb-5 xl:mb-10">
                    <div
                      className="bg-secondary-color rounded-[4.5rem] cursor-pointer flex lg:pr-3 lg:pl-6 pl-4 pr-3 py-2 items-center justify-between gap-[1rem]"
                      onClick={() =>
                        setOpenSection(
                          openSection === section.id ? "" : section.id
                        )
                      }
                    >
                      <p className="mont text-[1rem] text-gray-800 font-[600] capitalize">
                        {section.locationtitle}
                      </p>
                      <span>
                        {openSection === section.id ? (
                          <div className="bg-white rounded-[3.8rem] lg:p-[0.9rem] p-[0.5rem]">
                            {/* Minus Icon */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M6 12h13"
                                stroke="#AD843E"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div className="bg-white rounded-[3.8rem] lg:p-[0.9rem] p-[0.5rem]">
                            {/* Plus Icon */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M12 6v13m-7-6.5h14"
                                stroke="#AD843E"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        )}
                      </span>
                    </div>
                    {openSection === section.id && (
                      <ul className="mt-4">
                        {section.landmark.map((item) => (
                          <li
                            key={item.id}
                            className="flex justify-between px-4 py-1 text-black"
                          >
                            <span className="flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                              >
                                <path
                                  d="M10 2.375C6.89453 2.375 4.375 4.77305 4.375 7.72656C4.375 11.125 8.125 16.5105 9.50195 18.3707C9.55911 18.4492 9.63402 18.5131 9.72058 18.5572C9.80713 18.6012 9.90288 18.6242 10 18.6242C10.0971 18.6242 10.1929 18.6012 10.2794 18.5572C10.366 18.5131 10.4409 18.4492 10.498 18.3707C11.875 16.5113 15.625 11.1277 15.625 7.72656C15.625 4.77305 13.1055 2.375 10 2.375Z"
                                  stroke="#212020"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M10 9.875C11.0355 9.875 11.875 9.03553 11.875 8C11.875 6.96447 11.0355 6.125 10 6.125C8.96447 6.125 8.125 6.96447 8.125 8C8.125 9.03553 8.96447 9.875 10 9.875Z"
                                  stroke="#212020"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {item.landmark}
                            </span>
                            <span className="mont text-[0.9rem] font-[600] capitalize text-gray-800">
                              {item.Distance}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Location;
