import React, { useRef, useState } from "react";
import Container from "../common/Conatiner";
import {
  Autoplay,
  EffectCoverflow,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { fadeIn } from "../common/Animation";
import { motion } from "framer-motion";
import Heading from "../common/Heading";
import { cleanImage } from "../imageHandling";

const ConstuctionUpdate = ({ constructionupdates }) => {
  console.log("constructionupdates", constructionupdates);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const ref = useRef(null);
  const image = [
    "/Images/Project/i1.png",
    "/Images/Project/i2.png",
    "/Images/Project/p1.png",
  ];
  return (
    <>
      {constructionupdates && constructionupdates?.showConstUpdates && (
        <section className="bg-primary-color">
          <div className="container mx-auto py-10 lg:py-[5.208vw]">
            <div className="headwrap">
              {/* <Heading light>{constructionupdates?.sectionTitle}</Heading> */}
              <div className="xl:text-[5rem] flex gap-2  justify-start  text-start lg:text-[4rem] text-[1.6rem] capitalize font-[500] AriensNobela">
                <motion.div
                  ref={ref}
                  data-splitting=""
                  variants={fadeIn("left", 0.2)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <span className="text-secondary-color heading-line ">
                    {constructionupdates?.sectionTitle?.split(" ")[0]}
                  </span>
                </motion.div>
                <span className="text-white">
                  {constructionupdates?.sectionTitle
                    ?.split(" ")
                    .slice(1)
                    .join(" ")}
                </span>
              </div>
            </div>

            <div className="w-full pt-10 pb-5 xl:pt-20 xl:pb-20">
              <Swiper
                speed={1200}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 1.7 },
                }}
                spaceBetween={50}
                navigation={{
                  nextEl: ".button-next1",
                  prevEl: ".button-prev2",
                }}
                loop={true}
                modules={[
                  Navigation,
                  Mousewheel,
                  Autoplay,
                  EffectCoverflow,
                  Pagination,
                ]}
                className=""
              >
                {constructionupdates?.Updates?.Image &&
                  constructionupdates?.Updates?.Image?.data.map(
                    (item, index) => (
                      <SwiperSlide key={`update${index}`}>
                        <div className="w-full h-full shine">
                          <Image
                            height={1000}
                            width={1000}
                            src={cleanImage(item?.attributes?.url)}
                            alt={
                              item?.attributes?.alternativeText
                                ? item?.attributes?.alternativeText
                                : "Gallery img"
                            }
                            className=" xl:!h-[33.125vw] h-full w-full object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    )
                  )}
              </Swiper>
            </div>
            <div className="">
              <div className="flex justify-start gap-4 ">
                <button
                  disabled={isBeginning}
                  className={`flex ${
                    isBeginning ? "  bg-white bg-opacity-80" : "bg-white"
                  }  rounded-full button-prev2 xl:h-[3.75rem] xl:w-[3.75rem] h-[3rem] w-[3rem] justify-center items-center cursor-pointer`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                  >
                    <g opacity="0.3">
                      <path
                        d="M0.894835 8.99305L4.8215 5.12971C4.94817 4.96082 5.11706 4.87638 5.32817 4.87638C5.53928 4.87638 5.71872 4.95027 5.8665 5.09805C6.01428 5.24582 6.08817 5.42527 6.08817 5.63638C6.08817 5.84749 6.00372 6.01638 5.83483 6.14305L3.23817 8.73971H18.9448C19.1559 8.73971 19.3354 8.8136 19.4832 8.96138C19.6309 9.10916 19.7048 9.2886 19.7048 9.49971C19.7048 9.71082 19.6309 9.89027 19.4832 10.038C19.3354 10.1858 19.1559 10.2597 18.9448 10.2597H3.23817L5.83483 12.8564C6.00372 12.983 6.08817 13.1519 6.08817 13.363C6.08817 13.5742 6.01428 13.7536 5.8665 13.9014C5.71872 14.0492 5.53928 14.123 5.32817 14.123C5.11706 14.123 4.94817 14.0386 4.8215 13.8697L0.894835 10.0064C0.768167 9.87971 0.704834 9.71082 0.704834 9.49971C0.704834 9.2886 0.768167 9.11971 0.894835 8.99305Z"
                        fill="#AD843E"
                      />
                    </g>
                  </svg>
                </button>
                <button
                  disabled={isEnd}
                  className={`flex  ${
                    isEnd ? " bg-white  bg-opacity-80" : "bg-white"
                  }  rounded-full button-next1 xl:h-[3.75rem] xl:w-[3.75rem] h-[3rem] w-[3rem] justify-center items-center cursor-pointer`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                  >
                    <path
                      d="M19.5151 8.99305L15.5884 5.12971C15.4617 4.96082 15.2929 4.87638 15.0817 4.87638C14.8706 4.87638 14.6912 4.95027 14.5434 5.09805C14.3956 5.24582 14.3217 5.42527 14.3217 5.63638C14.3217 5.84749 14.4062 6.01638 14.5751 6.14305L17.1717 8.73971H1.46508C1.25397 8.73971 1.07452 8.8136 0.926745 8.96138C0.778967 9.10916 0.705078 9.2886 0.705078 9.49971C0.705078 9.71082 0.778967 9.89027 0.926745 10.038C1.07452 10.1858 1.25397 10.2597 1.46508 10.2597H17.1717L14.5751 12.8564C14.4062 12.983 14.3217 13.1519 14.3217 13.363C14.3217 13.5742 14.3956 13.7536 14.5434 13.9014C14.6912 14.0492 14.8706 14.123 15.0817 14.123C15.2929 14.123 15.4617 14.0386 15.5884 13.8697L19.5151 10.0064C19.6417 9.87971 19.7051 9.71082 19.7051 9.49971C19.7051 9.2886 19.6417 9.11971 19.5151 8.99305Z"
                      fill="#AD843E"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ConstuctionUpdate;
