import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { fadeIn } from "../common/Animation";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import Container from "../common/Conatiner";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Heading from "../common/Heading";
import { cleanImage } from "../imageHandling";
import PopupForm from "../Form/FloorplanPopUp";

const FloorPlan = ({ plans }) => {
  console.log("plans", plans);

  // Bind Fancybox on mount
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      Hash: false,
      Thumbs: false,
      zoom: true,
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  // State to control popup modal visibility and form submission status
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const ref = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <>
      {plans && plans?.showPlan && (
        <section className="relative bg-primary-color ">
          {/* Desktop Navigation Buttons */}
          <div className="xl:block hidden">
            <div className="absolute top-1/2 z-[10] transform -translate-y-1/2 left-0 right-0 flex justify-between px-4">
              <button
                disabled={isBeginning}
                className={`flex ${
                  isBeginning
                    ? "  bg-white bg-opacity-80"
                    : "bg-white"
                } rounded-full cust-swiper-button-left1 xl:h-[3.75rem] xl:w-[3.75rem] h-[3rem] w-[3rem] justify-center items-center cursor-pointer`}
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
                className={`flex ${
                  isEnd ? "bg-white  bg-opacity-80" : "bg-white"
                } rounded-full cust-swiper-button-Right2 xl:h-[3.75rem] xl:w-[3.75rem] h-[3rem] w-[3rem] justify-center items-center cursor-pointer`}
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

          <Container>
              <div className="xl:text-[5rem] flex gap-2 xl:py-5 justify-center  text-center lg:text-[4rem] text-[2.5rem] capitalize font-[500] AriensNobela">
                   <motion.div
                     ref={ref}
                     data-splitting=""
                     variants={fadeIn("left", 0.2)}
                     initial={"hidden"}
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.2 }}
                   >
                     <span className="text-secondary-color">Floor </span>
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 200 2"
                       fill="none"
                     >
                       <path d="M0 1H200" stroke="white" />
                     </svg>
                   </motion.div>
                   <span className="text-white ">Plan</span>
                 </div>
              

            <div className="relative xl:my-10">
              <Swiper
                speed={1200}
                grabCursor={true}
                slidesPerView={3}
                spaceBetween={70}
                navigation={{
                  prevEl: ".cust-swiper-button-left1",
                  nextEl: ".cust-swiper-button-Right2",
                }}
                onReachBeginning={() => setIsBeginning(true)}
                onReachEnd={() => setIsEnd(true)}
                onSlideChange={({ isBeginning, isEnd }) => {
                  setIsBeginning(isBeginning);
                  setIsEnd(isEnd);
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 3 },
                  1240: { slidesPerView: 3 },
                }}
                pagination={true}
                modules={[Navigation, Autoplay]}
                className="w-full h-full swiper-wrap swiper-plan"
              >
                {plans?.planImages &&
                  plans?.planImages?.data.map((value, index) => (
                    <SwiperSlide key={index} className="relative w-full  h-full">
                      {isFormSubmitted ? (
                        // After submission, render image normally wrapped in an anchor for Fancybox
                        <a
                          data-fancybox="gallery"
                          href={cleanImage(value?.attributes?.url)}
                        >
                            
                          <div>
                            <Image
                              src={cleanImage(value?.attributes?.url)}
                              height={1000}
                              alt={value?.attributes?.alternativeText || "img"}
                              width={1000}
                              className="w-full h-full"
                            />
                          </div>
                        </a>
                      ) : (
                        <div
                          onClick={() => setPopupOpen(true)}
                          style={{ cursor: "pointer" }}
                        >
                          <div
                            className="absolute z-[1] top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2"
                            onClick={() => setPopupOpen(true)}
                          >
                            <svg
                              width="54"
                              height="54"
                              viewBox="0 0 54 54"
                              fill="none"
                              className="cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="54"
                                height="54"
                                rx="27"
                                transform="matrix(0 -1 -1 0 54 54)"
                                fill="#AD843E"
                              />
                              <path
                                d="M33 27.998H28V32.998C28 33.2633 27.8946 33.5176 27.7071 33.7052C27.5196 33.8927 27.2652 33.998 27 33.998C26.7348 33.998 26.4804 33.8927 26.2929 33.7052C26.1054 33.5176 26 33.2633 26 32.998V27.998H21C20.7348 27.998 20.4804 27.8927 20.2929 27.7052C20.1054 27.5176 20 27.2633 20 26.998C20 26.7328 20.1054 26.4785 20.2929 26.2909C20.4804 26.1034 20.7348 25.998 21 25.998H26V20.998C26 20.7328 26.1054 20.4785 26.2929 20.2909C26.4804 20.1034 26.7348 19.998 27 19.998C27.2652 19.998 27.5196 20.1034 27.7071 20.2909C27.8946 20.4785 28 20.7328 28 20.998V25.998H33C33.2652 25.998 33.5196 26.1034 33.7071 26.2909C33.8946 26.4785 34 26.7328 34 26.998C34 27.2633 33.8946 27.5176 33.7071 27.7052C33.5196 27.8927 33.2652 27.998 33 27.998Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          <div className="blur-sm">
                            <Image
                              src={cleanImage(value?.attributes?.url)}
                              height={1000}
                              alt={value?.attributes?.alternativeText || "img"}
                              width={1000}
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            <div className="xl:hidden block">
              <div className="flex justify-center gap-4">
                <button
                  disabled={isBeginning}
                  className={`flex ${
                    isBeginning ? " bg-white bg-opacity-80" : "bg-white"
                  } rounded-full cust-swiper-button-left1 button-prev2 xl:h-[3.75rem] xl:w-[3.75rem] h-[3rem] w-[3rem] justify-center items-center cursor-pointer`}
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
                  className={`flex ${
                    isEnd ? " bg-white  bg-opacity-80" : "bg-white"
                  } rounded-full button-next1 cust-swiper-button-Right2 xl:h-[3.75rem] xl:w-[3.75rem] h-[3rem] w-[3rem] justify-center items-center cursor-pointer`}
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
          </Container>

          {/* Custom Popup Form Modal */}
          <PopupForm
            isOpen={isPopupOpen}
            onClose={() => setPopupOpen(false)}
            onSubmit={() => {
              setIsFormSubmitted(true);
              setPopupOpen(false);
            }}
            source="Floor Plans"
            title="Floor Plans"
          />
        </section>
      )}
    </>
  );
};

export default FloorPlan;
