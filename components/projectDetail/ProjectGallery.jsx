import React, { useEffect, useRef, useState } from "react";
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
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const ProjectGallery = ({ gallery }) => {
  console.log({ gallery });
  const ref = useRef();
  const content = [
    gallery?.gallerytabs,
    [{ galleryTitle: "video", galleryImage: gallery.videotabcontent }],
  ];

  let tabs = content.map((item) => item);

  console.log("gallery", gallery);

  const [activeTab, setActiveTab] = useState("Exterior");

  Fancybox.bind("[data-fancybox]", {
    Carousel: {
      transition: "slide",
      infinite: false,
    },
  });

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      Hash: false,
      Thumbs: false,
      Toolbar: {
        display: {
          left: [],
        },
      },
    });
  }, []);

  // const finalData = gallery?.gallerytabs.find(
  //   (v) => v.galleryTitle.toLowerCase() === activeTab
  // ).galleryImage?.data
  // console.log(finalData, "final data");

  // const duplicatedSlides = [...finalData]
  // const finalData = gallery?.gallerytabs.find((v) => {
  //   return(
  //     // console.log('v',v)
  //     v.galleryTitle === activeTab
  //   )
  // });
  // console.log("finalData", finalData);

  const filteredData = gallery?.gallerytabs?.find(
    (item) => item?.galleryTitle === activeTab
  );
  const finalData = [...tabs[0], ...tabs[1]];
  console.log(tabs[1][0], "gal tabs");
  return (
    <>
      {finalData && gallery?.showGallery && (
        <div className="bg-primary-color">
          <div className=" container mx-auto py-10 lg:py-[5.208vw]">
            {/* Header Section */}
            <div className="flex flex-col items-center justify-between gap-10 xl:flex-row">
              <div className="headwrap">
                {/* <Heading light>{gallery?.sectionTitle}</Heading> */}
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
                      {gallery?.sectionTitle?.split(" ")[0]}
                    </span>
                  </motion.div>
                  <span className="text-white">
                    {gallery?.sectionTitle?.split(" ").slice(1).join(" ")}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center w-full gap-10 mb-4 justify-evenly">
                  {finalData.map((tab, tabIndex) => (
                    <button
                      key={tabIndex}
                      onClick={() => setActiveTab(tab?.galleryTitle)}
                      className={`text-lg transition-all font-semibold ${
                        activeTab === tab?.galleryTitle
                          ? "text-secondary-color xl:text-[1.25rem] text-[1.1rem] font-[600] capitalize"
                          : "text-white xl:text-[1.25rem] text-[1.1rem] font-[600] capitalize"
                      }`}
                    >
                      {tab?.galleryTitle}
                      {activeTab === tab?.galleryTitle && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="2"
                          viewBox="0 0 66 2"
                          fill="none"
                          className="w-full"
                        >
                          <path d="M0 1H66" stroke="#AD843E" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Swiper Section */}
            <div className="relative xl:py-20 py-10">
              <div className={"swiperContainer1"}>
                {activeTab === "video" ? (
                  <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={5} // Show 2 on each side of center
                    loopAdditionalSlides={2} // Ensures correct duplication for smooth looping
                    spaceBetween={-80} // Overlapping effect
                    // autoplay={{
                    //   delay: 2000,
                    //   disableOnInteraction: false,
                    // }}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 300,
                      modifier: 2.3,
                      slideShadows: false,
                    }}
                    navigation={{
                      nextEl: ".button-next",
                      prevEl: ".button-prev",
                    }}
                    breakpoints={{
                      320: { slidesPerView: 1, spaceBetween: 10 },
                      768: { slidesPerView: 2, spaceBetween: 10 }, // 1 on each side
                      1024: { slidesPerView: 2, spaceBetween: -50 }, // 2 on each side
                    }}
                    modules={[Autoplay, EffectCoverflow, Navigation]}
                    className={"swiperSlide1 "}
                  >
                    {tabs[1][0] &&
                      tabs[1][0].galleryImage?.map((item, index) => {
                        return (
                          <SwiperSlide
                          data-fancybox="gallerySection"
                          href={
                            item?.videolink ||
                            cleanImage(item?.video?.data?.attributes?.url)
                          }
                          key={index}
                          className="shine"
                        >
                          <div className="relative h-[35vw] w-full">
                            <Image
                              height={1000}
                              width={1000}
                              src={cleanImage(
                                item?.videothumb?.data.attributes?.url
                              )}
                              alt="Gallery img"
                              className="object-cover h-full w-full "
                            />
                        
                            {/* Custom SVG Play Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center animate-ping-slow">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="#000"
                                  viewBox="0 0 24 24"
                                  className="w-8 h-8"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        
                        );
                      })}
                  </Swiper>
                ) : (
                  <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={5} // Show 2 on each side of center
                    loopAdditionalSlides={2} // Ensures correct duplication for smooth looping
                    spaceBetween={-80} // Overlapping effect
                    // autoplay={{
                    //   delay: 2000,
                    //   disableOnInteraction: false,
                    // }}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 300,
                      modifier: 2.3,
                      slideShadows: false,
                    }}
                    navigation={{
                      nextEl: ".button-next",
                      prevEl: ".button-prev",
                    }}
                    breakpoints={{
                      320: { slidesPerView: 1, spaceBetween: 10 },
                      768: { slidesPerView: 2, spaceBetween: 10 }, // 1 on each side
                      1024: { slidesPerView: 2, spaceBetween: -50 }, // 2 on each side
                    }}
                    modules={[Autoplay, EffectCoverflow, Navigation]}
                    className={"swiperSlide1 "}
                  >
                    {filteredData?.galleryImage?.data &&
                      filteredData?.galleryImage?.data?.map((item, index) => {
                        return (
                          <SwiperSlide
                            data-fancybox="gallerySection"
                            href={cleanImage(item?.attributes?.url)}
                            key={index}
                            className={" shine"}
                          >
                            <Image
                              height={1000}
                              width={1000}
                              src={cleanImage(item?.attributes?.url)}
                              alt={
                                item?.attributes?.alternativeText
                                  ? item?.attributes?.alternativeText
                                  : "Gallery img"
                              }
                              className={" h-[35vw]"}
                            />
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                )}
              </div>
              {/*Desktop  Navigation Buttons */}
              <div className="hidden 2xl:block">
                <button
                  // disabled={isBeginning}
                  className={`absolute top-1/2 -left-20 z-[10] transform -translate-y-1/2 bg-white button-prev rounded-full xl:h-16 xl:w-16 h-12 w-12 flex justify-center items-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_152_3049)">
                      <path
                        d="M3.63605 12.707C3.44858 12.5195 3.34326 12.2652 3.34326 12C3.34326 11.7348 3.44858 11.4805 3.63605 11.293L9.29305 5.63601C9.3853 5.5405 9.49564 5.46431 9.61764 5.41191C9.73965 5.3595 9.87087 5.33191 10.0036 5.33076C10.1364 5.3296 10.2681 5.3549 10.391 5.40519C10.5139 5.45547 10.6256 5.52972 10.7194 5.62361C10.8133 5.71751 10.8876 5.82916 10.9379 5.95205C10.9882 6.07495 11.0135 6.20663 11.0123 6.33941C11.0111 6.47219 10.9836 6.60341 10.9311 6.72541C10.8787 6.84742 10.8026 6.95776 10.707 7.05001L6.75705 11L20 11C20.2653 11 20.5196 11.1054 20.7072 11.2929C20.8947 11.4804 21 11.7348 21 12C21 12.2652 20.8947 12.5196 20.7072 12.7071C20.5196 12.8946 20.2653 13 20 13L6.75705 13L10.707 16.95C10.8892 17.1386 10.99 17.3912 10.9877 17.6534C10.9854 17.9156 10.8803 18.1664 10.6949 18.3518C10.5095 18.5372 10.2586 18.6424 9.99645 18.6447C9.73425 18.647 9.48165 18.5462 9.29305 18.364L3.63605 12.707Z"
                        fill="#AD843E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_152_3049">
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
                  // disabled={isEnd}
                  className={`absolute top-1/2 -right-20 transform z-[10] -translate-y-1/2 bg-white button-next rounded-full xl:h-16 xl:w-16 h-12 w-12 flex justify-center items-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_152_3054)">
                      <path
                        d="M20.364 12.707C20.5514 12.5195 20.6567 12.2652 20.6567 12C20.6567 11.7348 20.5514 11.4805 20.364 11.293L14.707 5.63601C14.6147 5.5405 14.5044 5.46431 14.3824 5.41191C14.2604 5.3595 14.1291 5.33191 13.9964 5.33076C13.8636 5.3296 13.7319 5.3549 13.609 5.40519C13.4861 5.45547 13.3744 5.52972 13.2806 5.62361C13.1867 5.71751 13.1124 5.82916 13.0621 5.95205C13.0118 6.07495 12.9865 6.20663 12.9877 6.33941C12.9889 6.47219 13.0164 6.60341 13.0689 6.72541C13.1213 6.84742 13.1974 6.95776 13.293 7.05001L17.243 11L3.99995 11C3.73474 11 3.48038 11.1054 3.29284 11.2929C3.10531 11.4804 2.99995 11.7348 2.99995 12C2.99995 12.2652 3.10531 12.5196 3.29284 12.7071C3.48038 12.8946 3.73474 13 3.99995 13L17.243 13L13.293 16.95C13.1108 17.1386 13.01 17.3912 13.0123 17.6534C13.0146 17.9156 13.1197 18.1664 13.3051 18.3518C13.4905 18.5372 13.7414 18.6424 14.0036 18.6447C14.2657 18.647 14.5183 18.5462 14.707 18.364L20.364 12.707Z"
                        fill="#AD843E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_152_3054">
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

              {/*Mobile  Navigation Buttons  */}
              <div className="block pt-10 2xl:hidden">
                <div className="flex justify-center gap-4 ">
                  <button
                    // disabled={isBeginning}
                    className={`flex bg-white  rounded-full button-prev xl:h-[3.75rem] xl:w-[3.75rem] h-[3rem] w-[3rem] justify-center items-center cursor-pointer`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_152_3049)">
                        <path
                          d="M3.63605 12.707C3.44858 12.5195 3.34326 12.2652 3.34326 12C3.34326 11.7348 3.44858 11.4805 3.63605 11.293L9.29305 5.63601C9.3853 5.5405 9.49564 5.46431 9.61764 5.41191C9.73965 5.3595 9.87087 5.33191 10.0036 5.33076C10.1364 5.3296 10.2681 5.3549 10.391 5.40519C10.5139 5.45547 10.6256 5.52972 10.7194 5.62361C10.8133 5.71751 10.8876 5.82916 10.9379 5.95205C10.9882 6.07495 11.0135 6.20663 11.0123 6.33941C11.0111 6.47219 10.9836 6.60341 10.9311 6.72541C10.8787 6.84742 10.8026 6.95776 10.707 7.05001L6.75705 11L20 11C20.2653 11 20.5196 11.1054 20.7072 11.2929C20.8947 11.4804 21 11.7348 21 12C21 12.2652 20.8947 12.5196 20.7072 12.7071C20.5196 12.8946 20.2653 13 20 13L6.75705 13L10.707 16.95C10.8892 17.1386 10.99 17.3912 10.9877 17.6534C10.9854 17.9156 10.8803 18.1664 10.6949 18.3518C10.5095 18.5372 10.2586 18.6424 9.99645 18.6447C9.73425 18.647 9.48165 18.5462 9.29305 18.364L3.63605 12.707Z"
                          fill="#AD843E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_152_3049">
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
                    // disabled={isEnd}
                    className={`flex bg-white  rounded-full button-next xl:h-[3.75rem] xl:w-[3.75rem] h-[3rem] w-[3rem] justify-center items-center cursor-pointer`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_152_3054)">
                        <path
                          d="M20.364 12.707C20.5514 12.5195 20.6567 12.2652 20.6567 12C20.6567 11.7348 20.5514 11.4805 20.364 11.293L14.707 5.63601C14.6147 5.5405 14.5044 5.46431 14.3824 5.41191C14.2604 5.3595 14.1291 5.33191 13.9964 5.33076C13.8636 5.3296 13.7319 5.3549 13.609 5.40519C13.4861 5.45547 13.3744 5.52972 13.2806 5.62361C13.1867 5.71751 13.1124 5.82916 13.0621 5.95205C13.0118 6.07495 12.9865 6.20663 12.9877 6.33941C12.9889 6.47219 13.0164 6.60341 13.0689 6.72541C13.1213 6.84742 13.1974 6.95776 13.293 7.05001L17.243 11L3.99995 11C3.73474 11 3.48038 11.1054 3.29284 11.2929C3.10531 11.4804 2.99995 11.7348 2.99995 12C2.99995 12.2652 3.10531 12.5196 3.29284 12.7071C3.48038 12.8946 3.73474 13 3.99995 13L17.243 13L13.293 16.95C13.1108 17.1386 13.01 17.3912 13.0123 17.6534C13.0146 17.9156 13.1197 18.1664 13.3051 18.3518C13.4905 18.5372 13.7414 18.6424 14.0036 18.6447C14.2657 18.647 14.5183 18.5462 14.707 18.364L20.364 12.707Z"
                          fill="#AD843E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_152_3054">
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
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGallery;
