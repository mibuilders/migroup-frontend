import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { fadeIn } from "../common/Animation";
import Buttons from "../common/Button";
import { cleanImage } from "../imageHandling";
import Heading from "../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const AboutMiGroup = ({ overview }) => {
  const ref = useRef(null);
  // console.log("object", overview);
  const [isExpanded, setIsExpanded] = useState(false);

  const description = overview?.Description || "";
  const shortDescription = description.slice(0, 650) + " ...."; // Show first 200 characters
  const isLong = description.length > 650;
  console.log({ img: overview?.Image });
  return (
    <>
      {overview && (
        <section className="overflow-hidden bg-primary-color">
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
            {/*  */}
            {/* <motion.div
              ref={ref}
              data-splitting=""
              variants={fadeIn("right", 0.4)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h-auto flex-[0.5] shine w-full"
            >
              <Image
                height={1000}
                width={1000}
                className="w-full h-full lg:h-[90vh] object-cover"
                src={cleanImage(overview?.Image?.data?.attributes?.url)}
                alt={
                  overview?.Image?.data?.attributes?.alternativeText
                    ? overview?.Image?.data?.attributes?.alternativeText
                    : "img"
                }
              />
            </motion.div> */}

            <motion.div
              ref={ref}
              data-splitting=""
              variants={fadeIn("right", 0.4)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h-auto flex-[0.5] flex justify-center overflow-hidden shine w-full"
            >
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="w-full h-full"
              >
                {overview?.Image?.data?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      height={1000}
                      width={1000}
                      className="w-full h-full lg:h-[70vh] object-cover"
                      src={cleanImage(item?.attributes?.url)}
                      alt={
                        item?.attributes?.alternativeText
                          ? item?.attributes?.alternativeText
                          : "img"
                      }
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/*  */}
            <div className="flex-[0.5] relative h-full w-full md:px-5 md:py-20 lg:py-20 xl:px-10 px-5  py-10 flex justify-center items-center">
              <div className="absolute inset-0 animate-[spin_35s_linear_infinite]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1059 1052"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    opacity="0.05"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M546.413 552.286L789.841 792.033L719.877 761.415C674.487 790.589 628.519 811.097 581.973 820.918L593.826 766.614L663.501 736.862L610.884 713.754L546.413 552.286ZM532.825 0V489.893C568.096 417.68 593.248 349.222 598.452 288.852C597.874 287.119 597.296 285.386 596.428 283.653C617.533 289.43 639.505 302.428 665.525 317.738L719.877 287.119C670.729 257.945 623.893 238.592 579.082 230.215C558.266 158.869 543.522 81.4563 532.825 0ZM224.636 579.149L284.192 588.681C293.155 616.411 303.852 641.83 317.151 663.494L339.701 611.789L505.938 548.242L261.064 792.9L291.42 722.997C263.088 679.092 240.248 631.72 224.636 579.149ZM528.777 560.085V1052L472.69 824.673C418.627 808.498 372.37 788.278 336.81 762.859L392.319 735.707L459.102 769.214L458.524 766.903C449.273 713.176 483.966 647.029 528.777 560.085ZM0 526.289H492.35C409.954 486.716 350.109 454.365 283.325 462.453C291.709 438.189 302.406 413.925 315.127 389.662L290.842 334.202C262.799 367.709 239.67 414.792 221.745 476.029L0 526.289ZM764.4 336.802L832.34 484.405L771.049 470.829C761.798 437.9 751.101 413.348 739.247 395.15L718.432 443.388L544.678 509.824L798.514 257.945L764.4 336.802ZM330.161 290.585C374.972 263.433 421.229 240.903 469.51 223.572L465.463 279.031C441.467 291.741 414.58 303.295 390.873 316.293L442.623 338.246L507.672 505.78L256.149 258.523L330.161 290.585ZM763.532 598.213C756.594 617.566 746.764 636.919 738.669 655.984L760.93 717.22C787.817 673.315 810.079 628.254 824.245 581.46C897.678 562.684 979.785 547.086 1059 530.044L560.001 528.311C633.723 567.306 703.109 595.613 763.532 598.213Z"
                    fill="#AD843E"
                  />
                </svg>
              </div>

              <div className="flex flex-col h-full items-center justify-center xl:h-screen gap-5 align-middle xl:gap-10 md:gap-5 ">
                {/* {isExpanded ? null : (
                  <div className="xl:w-[33rem] lg:w-[500px] lg:h-[22rem] xl:h-[357px] h-full w-full shine ">
                    <Image
                      height={1000}
                      width={1000}
                      className="w-full h-full"
                      src={cleanImage(overview?.Image2?.data?.attributes?.url)}
                      alt={
                        overview?.Image2?.data?.attributes?.alternativeText
                          ? overview?.Image2?.data?.attributes?.alternativeText
                          : "img"
                      }
                    />
                  </div>
                )} */}

                <div className="headwrap relative flex justify-center flex-col items-center xl:gap-2 gap-0">
                  {/* <Heading light>{overview?.sectionTitle}</Heading> */}
                  <div className="xl:text-[5rem] flex gap-2 py-6 xl:py-0 justify-start  text-start lg:text-[4rem] text-[2rem] capitalize font-[500] AriensNobela">
                    <motion.div
                      ref={ref}
                      data-splitting=""
                      variants={fadeIn("left", 0.2)}
                      initial={"hidden"}
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.2 }}
                    >
                      <span className="text-secondary-color heading-line">
                        {overview?.sectionTitle?.split(" ")[0]}
                      </span>
                    </motion.div>
                    <span className="text-white">
                      {" "}
                      {overview?.sectionTitle?.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="2"
                    viewBox="0 0 200 2"
                    fill="none"
                  >
                    <path d="M0 1H200" stroke="white" />
                  </svg> */}
                </div>

                <div className=" ">
                  <motion.div
                    data-splitting=""
                    variants={fadeIn("left", 0.4)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="Alata text-[1rem] relative xl:leading-[2rem] text-center leading-[1.5rem] text-white font-[400] capitalize"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: isExpanded ? description : shortDescription,
                      }}
                      className="lg:text-[0.95vw] text-[0.9rem]"
                    />
                    {isLong && (
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-secondary-color ml-2 underline cursor-pointer"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </motion.div>
                </div>
                {/* <Buttons text={"Download Brochure"} /> */}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AboutMiGroup;
