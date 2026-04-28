"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Buttons from "../common/Button";
import { cleanImage } from "../imageHandling";
import { motion } from "framer-motion";
import { fadeIn } from "../common/Animation";
import SwiperButton from "../common/SwiperButton";
const FeaturedProjects = ({ projectdata }) => {
  const imageSwiperRef = useRef(null);
  const textSwiperRef = useRef(null);
  const ref = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const coreValues = projectdata?.projects?.data || [];
  // Calculate initial slide for second slider to be different from first
  const initialSlide = 0;
  return (
    <div className="relative w-full h-screen bg-[#181D23] text-white overflow-hidden">
      <div className="xl:text-[4.167vw] flex gap-2 py-6 xl:py-10 justify-center  text-center lg:text-[4.167vw] text-[2rem] capitalize font-[500] AriensNobela">
        <motion.div
          ref={ref}
          data-splitting=""
          variants={fadeIn("left", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <span className="text-secondary-color heading-line after:bg-white text-nowrap">
            Featured{" "}
          </span>
        </motion.div>
        <span className="text-white">Projects </span>
      </div>

      {/* TEXT SECTION + TITLE */}
      <div className="relative z-10 h-full w-full">
        <div className="absolute bg-[#181D23] lg:h-[41.667vw] h-full inset-0 z-[-10]">
          <Swiper
            modules={[Navigation, Autoplay]}
            grabCursor={false}
            centeredSlides={false}
            slidesPerView={1}
            draggable={false}
            loop={true}
            autoplay={true}
            speed={1200}
            spaceBetween={30}
            allowTouchMove={false}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            navigation={{
              nextEl: ".cust-swiper-button-next8",
              prevEl: ".cust-swiper-button-prev8",
            }}
            className="w-full lg:h-full h-full"
          >
            {projectdata?.projects?.data?.map((project, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  src={cleanImage(
                    project.attributes.projectListing.projectThumbnail.data
                      .attributes.url
                  )}
                  alt="Project Background"
                  fill
                  className="object-cover w-full h-full"
                />
                <div
                  className="absolute inset-0 z-[0]"
                  style={{
                    background: `linear-gradient(270deg, #181D23 0%, rgba(24, 29, 35, 0.80) 25%, rgba(24, 29, 35, 0.00) 50%, rgba(24, 29, 35, 0.00) 75%, #181D23 100%),
                linear-gradient(180deg, #181D23 2.44%, rgba(24, 29, 35, 0.00) 26.38%, rgba(24, 29, 35, 0.00) 50.31%, rgba(24, 29, 35, 0.00) 74.25%, #181D23 98.19%)`,
                  }}
                ></div>

                {/* optional dark overlay */}
                
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* TEXT CONTENT SWIPER */}
        <div className="absolute right-[5%] top-[40%] transform  -translate-y-1/2 w-[90%] max-w-[600px] z-20">
          <Swiper
            modules={[Navigation, Autoplay]}
            grabCursor={false}
            centeredSlides={false}
            slidesPerView={1}
            allowTouchMove={false}
            draggable={false}
            loop={true}
            speed={1200}
            autoplay={true}
            spaceBetween={20}
            initialSlide={initialSlide}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onReachBeginning={() => setIsBeginning(true)}
            navigation={{
              nextEl: ".cust-swiper-button-next8",
              prevEl: ".cust-swiper-button-prev8",
            }}
            className="w-full h-full"
          >
            {projectdata?.projects?.data?.map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col gap-5 items-start text-start px-5">
                  <Image
                    src={cleanImage(
                      project.attributes.projectListing.logo.data.attributes.url
                    )}
                    alt="Project Logo"
                    width={200}
                    height={60}
                    className="object-contain"
                  />
                  <p className="text-sm lg:text-[0.833vw] leading-relaxed max-w-xl">
                    {project.attributes.projectListing.shortDescription}
                  </p>
                  <Buttons
                    text="Know More"
                    onClick={() => {
                      const url = `/projects/${
                        project.projectType === "Commercial"
                          ? "commercial"
                          : "residential"
                      }/${project.attributes.projectUrl}`;
                      window.location.href = url;
                    }}
                  />
                  <div className="mt-3 flex justify-center gap-5">
                    <div className="flex gap-4 justify-center ">
                      <button
                        disabled={isBeginning}
                        className={`flex ${
                        
                          "bg-SnowWhite"
                        }  rounded-full cust-swiper-button-prev8 xl:h-[3.75rem] xl:w-[3.75rem] h-[3rem] w-[3rem] justify-center items-center cursor-pointer`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_823_209)">
                            <path
                              d="M3.63605 12.707C3.44858 12.5194 3.34326 12.2651 3.34326 12C3.34326 11.7348 3.44858 11.4805 3.63605 11.293L9.29305 5.63598C9.3853 5.54047 9.49564 5.46428 9.61764 5.41188C9.73965 5.35947 9.87087 5.33188 10.0036 5.33073C10.1364 5.32957 10.2681 5.35487 10.391 5.40516C10.5139 5.45544 10.6256 5.52969 10.7194 5.62358C10.8133 5.71747 10.8876 5.82913 10.9379 5.95202C10.9882 6.07492 11.0135 6.2066 11.0123 6.33938C11.0111 6.47216 10.9836 6.60338 10.9311 6.72538C10.8787 6.84739 10.8026 6.95773 10.707 7.04998L6.75705 11L20 11C20.2653 11 20.5196 11.1053 20.7072 11.2929C20.8947 11.4804 21 11.7348 21 12C21 12.2652 20.8947 12.5195 20.7072 12.7071C20.5196 12.8946 20.2653 13 20 13L6.75705 13L10.707 16.95C10.8892 17.1386 10.99 17.3912 10.9877 17.6534C10.9854 17.9156 10.8803 18.1664 10.6949 18.3518C10.5095 18.5372 10.2586 18.6424 9.99645 18.6447C9.73425 18.6469 9.48165 18.5461 9.29305 18.364L3.63605 12.707Z"
                              fill="#AD843E"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_823_209">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="matrix(0 1 1 0 0 0)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                      <button
                        disabled={isEnd}
                        className={`flex  ${
                   "bg-SnowWhite"
                        }  rounded-full cust-swiper-button-next8 xl:h-[3.75rem] xl:w-[3.75rem] h-[3rem] w-[3rem] justify-center items-center cursor-pointer`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_823_214)">
                            <path
                              d="M20.364 12.707C20.5514 12.5194 20.6567 12.2651 20.6567 12C20.6567 11.7348 20.5514 11.4805 20.364 11.293L14.707 5.63598C14.6147 5.54047 14.5044 5.46428 14.3824 5.41188C14.2604 5.35947 14.1291 5.33188 13.9964 5.33073C13.8636 5.32957 13.7319 5.35487 13.609 5.40516C13.4861 5.45544 13.3744 5.52969 13.2806 5.62358C13.1867 5.71747 13.1124 5.82913 13.0621 5.95202C13.0118 6.07492 12.9865 6.2066 12.9877 6.33938C12.9889 6.47216 13.0164 6.60338 13.0689 6.72538C13.1213 6.84739 13.1974 6.95773 13.293 7.04998L17.243 11L3.99995 11C3.73474 11 3.48038 11.1053 3.29284 11.2929C3.10531 11.4804 2.99995 11.7348 2.99995 12C2.99995 12.2652 3.10531 12.5195 3.29284 12.7071C3.48038 12.8946 3.73474 13 3.99995 13L17.243 13L13.293 16.95C13.1108 17.1386 13.01 17.3912 13.0123 17.6534C13.0146 17.9156 13.1197 18.1664 13.3051 18.3518C13.4905 18.5372 13.7414 18.6424 14.0036 18.6447C14.2657 18.6469 14.5183 18.5461 14.707 18.364L20.364 12.707Z"
                              fill="#AD843E"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_823_214">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="matrix(0 1 -1 0 24 0)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
