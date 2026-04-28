import Image from "next/image";
import React, { useRef, useState } from "react";
import Conatiner from "../common/Conatiner";
import Buttons from "../common/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../common/Animation";
import PopupForm from "../Form/PopupForm";

const Overview = ({ overview, configuration, projtitle }) => {
  // console.log("overview", overview);
  // console.log("configuration", configuration);
  const ref = useRef(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedConf, setSelectedConf] = useState(false);

  const handleClick = (item) => {
    setSelectedConf(item);
    setPopupOpen(true);
  };
  // console.log("selectedConf", selectedConf);
  return (
    <>
      {
        <div className="relative flex-col justify-center text-center bg-primary-color xl:py-20">
          <div className="absolute inset-0 z-0 flex items-center justify-center top-5">
            <Image
              src={"/Icons/d1.svg"}
              alt="img"
              height={500}
              className="xl:w-[37.5rem] w-full h-full"
              width={500}
            />
          </div>
          {
            <Conatiner>
              {overview && overview?.showOverview && (
                <>
                  {overview?.SectionTitle && (
                    // <motion.h3
                    //   ref={ref}
                    //   data-splitting=""
                    //   variants={fadeIn("up", 0.3)}
                    //   initial={"hidden"}
                    //   whileInView={"show"}
                    //   viewport={{ once: false, amount: 0.2 }}
                    //   className="text-secondary-color relative z-1 font-[400] xl:text-[5rem] text-[2.5rem] md:text-[4rem] capitalize"
                    // >
                    //   {overview?.SectionTitle}
                    // </motion.h3>
                    <div className="xl:text-[5rem] flex gap-2 py-6 xl:py-0 justify-center  text-center lg:text-[4rem] text-[2rem] capitalize font-[500] AriensNobela">
                      <motion.div
                        ref={ref}
                        data-splitting=""
                        variants={fadeIn("left", 0.2)}
                        initial={"hidden"}
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                      >
                        <span className="text-secondary-color heading-line ">
                          {overview?.SectionTitle?.split(" ")[0]}
                        </span>
                      </motion.div>
                      <span className="text-white">
                        {overview?.SectionTitle?.split(" ").slice(1).join(" ")}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-center mb-10 -mt-3"></div>
                  <div
                    className="relative z-1 section-description"
                    dangerouslySetInnerHTML={{ __html: overview?.Description }}
                  ></div>
                </>
              )}
              {configuration?.length !== 0 && (
                <div className="relative z-10 flex flex-col justify-around gap-5 pt-10 xl:flex-row ">
                  {configuration &&
                    configuration?.map((item, index) => {
                      // console.log("item", item);
                      return (
                        <div
                          className="flex flex-col justify-start gap-4 text-center"
                          key={`conf${index}`}
                        >
                          <span className="Alata xl:text-[3.75rem] text-[2rem] md:text-[2.5rem] font-[500] text-white">
                            {item?.Title}
                          </span>
                          <span className="xl:text-[1.5rem] md:text-[1.2rem] text-[1rem] font-[400] Atala text-white">
                            {item?.text}
                          </span>
                          <div className="flex justify-center w-full">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="relative cursor-pointer"
                              onClick={() => handleClick(item)}
                            >
                              <button
                                type={"button"}
                                className="bg-secondary-color rounded-[4.5rem]  cursor-pointer flex lg:pr-3 lg:pl-6 pl-4 pr-3 xl:py-2 py-4 items-center justify-between gap-[1rem] relative overflow-hidden transition-colors duration-300 ease-in-out hover:bg-primary-color "
                              >
                                <span className="text-center Alata text-[1rem] font-[500] text-white">
                                  Know More
                                </span>

                                <motion.div
                                  className="bg-white rounded-[3.8rem] lg:p-[0.9rem] p-[0.8] transition-colors duration-300 ease-in-out hover:bg-accent-color"
                                  // whileHover={{ rotate: 90 }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                  >
                                    <g clipPath="url(#clip0_116_601)">
                                      <motion.path
                                        // initial={{ y: 0 }}
                                        // animate={{ y: [0, -5, 0] }}
                                        transition={{
                                          repeat: Infinity,
                                          duration: 1,
                                        }}
                                        d="M11.293 21.3139C11.4806 21.5014 11.7349 21.6067 12 21.6067C12.2652 21.6067 12.5195 21.5014 12.707 21.3139L18.364 15.6569C18.4595 15.5647 18.5357 15.4543 18.5881 15.3323C18.6405 15.2103 18.6681 15.0791 18.6693 14.9463C18.6704 14.8135 18.6451 14.6818 18.5948 14.5589C18.5446 14.4361 18.4703 14.3244 18.3764 14.2305C18.2825 14.1366 18.1709 14.0624 18.048 14.0121C17.9251 13.9618 17.7934 13.9365 17.6606 13.9377C17.5278 13.9388 17.3966 13.9664 17.2746 14.0188C17.1526 14.0712 17.0423 14.1474 16.95 14.2429L13 18.1929V4.9499C13 4.68469 12.8947 4.43033 12.7071 4.2428C12.5196 4.05526 12.2652 3.9499 12 3.9499C11.7348 3.9499 11.4805 4.05526 11.2929 4.2428C11.1054 4.43033 11 4.68469 11 4.9499V18.1929L7.05002 14.2429C6.86142 14.0607 6.60882 13.96 6.34662 13.9622C6.08443 13.9645 5.83361 14.0697 5.6482 14.2551C5.4628 14.4405 5.35763 14.6913 5.35535 14.9535C5.35307 15.2157 5.45386 15.4683 5.63602 15.6569L11.293 21.3139Z"
                                        fill="#AD843E"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_116_601">
                                        <rect
                                          width="24"
                                          height="24"
                                          fill="white"
                                          transform="matrix(-1 0 0 -1 24 24.95)"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </motion.div>
                              </button>
                            </motion.div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </Conatiner>
          }
          <PopupForm
            isOpen={isPopupOpen}
            onClose={() => setPopupOpen(false)}
            title={"Enquire Now"}
            source={"Enquire Now - " + selectedConf?.Title}
            projectEnquire={projtitle}
          />
        </div>
      }
    </>
  );
};

export default Overview;
