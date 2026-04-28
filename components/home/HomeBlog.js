import React, { useRef } from "react";
import { motion } from "framer-motion";
import Buttons from "../common/Button";
import { fadeIn } from "../common/Animation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SwiperButton from "../common/SwiperButton";
import Link from "next/link";
import { cleanImage } from "../imageHandling";
import { useRouter } from "next/router";

const HomeBlog = ({ blogdata }) => {
  // console.log('blogdata', blogdata)
  const ref = useRef(null);
  const router = useRouter();
  const handleroute = (slug) => {
    router.push(slug);
  };
  return (
    <section className="relative items-center w-full py-0 pb-32 pt-3 md:pt-3  align-middle bg-white home_blog md:mb-0  md:py-24">
      <div className=" container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full align-middle ">
          <div className="xl:text-[5rem] flex gap-5 py-6 justify-start  text-start lg:text-[4rem] text-[2rem] capitalize font-[500] AriensNobela">
            <motion.div
              ref={ref}
              data-splitting=""
              variants={fadeIn("left", 0.2)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className=""
            >
              <span
                className="  text-secondary-color heading-line
"
              >
                Our
              </span>
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 2"
              fill="none"
            >
              <path d="M0 1H200" stroke="#AD843E" />
            </svg> */}
            </motion.div>
            <span className="text-black ">Blogs</span>
          </div>

          <a href={`/blogs`}>
            <Buttons text={"View All"} />
          </a>
        </div>
      </div>
      {/* <div className="hidden md:block w-[90%] mx-auto">
        <Swiper
          modules={[Navigation, Keyboard, Autoplay, EffectCoverflow]}
          // slidesPerView={'auto'}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".cust-swiper-button-next1",
            prevEl: ".cust-swiper-button-prev2",
          }}
          speed={1200}
          centeredSlides={true}
          className=""
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 1, spaceBetween: 10 },
            900: { slidesPerView: 3, spaceBetween: 10 },
            1200: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {blogdata.length > 0 &&
            blogdata.map((data, index) => (
              <SwiperSlide className="relative w-full" key={index}>
                <a
                  href={`/blogs/${data?.attributes?.slug}`}
                  className="inline-block overflow-hidden"
                >
                  <div className="relative pt-2 blog_card xl:pt-20 md:pt-20 flex justify-center items-center overflow-hidden group">
                    <div className=" absolute opacity-0 group-hover:opacity-100 z-[2] transition-opacity duration-200">
                      <Image
                        src={"/Images/Blogs/plus.svg"}
                        alt={"plus"}
                        height={75}
                        width={75}
                        className=""
                      />
                    </div>
                    <div class="bg-gradient-to-t  from-[#000000] to-transparent size-full absolute z-[1]  "></div>
                    <>
                      <div className=" w-full">
                        <Image
                          src={cleanImage(
                            data?.attributes?.thumbnailimage?.data?.attributes
                              ?.url
                          )}
                          alt={
                            data?.attributes?.thumbnailimage?.data?.attributes
                              ?.alternativeText
                              ? data?.attributes?.thumbnailimage?.data
                                  ?.attributes?.alternativeText
                              : "blog image"
                          }
                          height={1000}
                          width={1000}
                          className="object-cover   w-full h-auto blog_img group-hover:scale-110 transition-all duration-300"
                        />
                      </div>
                      <div className="absolute p-6 blog_content bottom-6 z-[2] group-hover:translate-y-[15rem] transition-all duration-150">
                        <h5 className="pb-4 text-white Alata text-sm  min-h-[3.083vw]  lg:text-[1.1vw]">
                          {data?.attributes?.Title}
                        </h5>
                        <div
                          className="mt-3 text-xs text-white md:text-base lg:text-[0.729vw]"
                          dangerouslySetInnerHTML={{
                            __html: data?.attributes?.PostData
                              ? data.attributes.PostData.substring(0, 180) +
                                "..."
                              : "",
                          }}
                        ></div>
                        <button
                          className="Alata text-[#AD843E]"
                          style={{ borderBottom: "1px solid " }}
                        >
                          Read More
                        </button>
                      </div>
                    </>
                  </div>
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className=" md:hidden block">
        <Swiper
          modules={[Navigation, Keyboard, Autoplay]}
          // slidesPerView={'auto'}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".cust-swiper-button-next1",
            prevEl: ".cust-swiper-button-prev2",
          }}
          speed={1200}
          centeredSlides={true}
          className=""
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 10 },
            1200: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {blogdata.length > 0 &&
            blogdata.map((data, index) => (
              <SwiperSlide className="relative w-full" key={index}>
                <a
                  href={`/blogs/${data?.attributes?.slug}`}
                  className=" overflow-hidden"
                >
                  <div className="relative pt-2 blog_card xl:pt-20 md:pt-20 shine">
                    <div class="bg-gradient-to-t from-[#000000] to-transparent size-full absolute z-[1]"></div>
                    <>
                      <div className=" w-full">
                        <Image
                          src={cleanImage(
                            data?.attributes?.thumbnailimage?.data?.attributes
                              ?.url
                          )}
                          alt={
                            data?.attributes?.thumbnailimage?.data?.attributes
                              ?.alternativeText
                              ? data?.attributes?.thumbnailimage?.data
                                  ?.attributes?.alternativeText
                              : "blog image"
                          }
                          height={1000}
                          width={1000}
                          className="object-cover w-auto h-auto"
                        />
                      </div>
                      <div className="absolute p-6 blog_content bottom-6 z-[2]">
                        <h5 className="pb-4 text-white Alata">
                          {data?.attributes?.Title}
                        </h5>
                        <div
                          className="my-2 text-xs md:text-base"
                          dangerouslySetInnerHTML={{
                            __html: data?.attributes?.PostData?.substring(
                              0,
                              100
                            ),
                          }}
                        ></div>
                        <button
                          className="Alata text-[#AD843E]"
                          style={{ borderBottom: "1px solid " }}
                        >
                          Read More
                        </button>
                      </div>
                    </>
                  </div>
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      </div> */}
      <div className=" w-full container mx-auto mt-5">
        <Swiper
          modules={[Navigation, Keyboard, Autoplay]}
          // slidesPerView={'auto'}
          spaceBetween={40}
          loop={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          navigation={{
            nextEl: ".cust-swiper-button-next1",
            prevEl: ".cust-swiper-button-prev2",
          }}
          speed={1200}
          centeredSlides={true}
          className="blog-swip"
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {blogdata.length > 0 &&
            blogdata.map((data, index) => (
              <SwiperSlide className="" key={index}>
                <a href={`/blogs/${data?.attributes?.slug}`}>
                  <div className=" relative w-full h-[20rem] lg:w-[27.708vw] lg:h-[33.021vw] group flex justify-center items-center">
                    <div class="bg-gradient-to-t  from-[#000000] to-transparent lg:size-full absolute z-[1]  "></div>
                    <div className="hidden lg:block absolute opacity-0 group-hover:opacity-100 z-[2] transition-opacity duration-200">
                      <Image
                        src={"/Images/Blogs/plus.svg"}
                        alt={"plus"}
                        height={75}
                        width={75}
                        className=""
                      />
                    </div>
                    <Image
                      fill
                      className=" absolute size-full"
                      src={cleanImage(
                        data?.attributes?.thumbnailimage?.data?.attributes?.url
                      )}
                      alt={
                        data?.attributes?.thumbnailimage?.data?.attributes
                          ?.alternativeText
                          ? data?.attributes?.thumbnailimage?.data?.attributes
                              ?.alternativeText
                          : "blog image"
                      }
                    />
                    <div className=" hidden lg:block absolute p-3 lg:p-6 blog_content bottom-3 lg:bottom-6 z-[2] group-hover:translate-y-[25rem] transition-all duration-150">
                      <h5 className="pb-4 text-white Alata text-sm  min-h-[3.083vw]  lg:text-[1.1vw]">
                        {data?.attributes?.Title}
                      </h5>
                      <div
                        className="mt-3 text-xs text-white md:text-base lg:text-[0.729vw]"
                        dangerouslySetInnerHTML={{
                          __html: data?.attributes?.PostData
                            ? data.attributes.PostData.substring(0, 180) + "..."
                            : "",
                        }}
                      ></div>
                      <button
                        className="Alata text-[#AD843E]"
                        style={{ borderBottom: "1px solid " }}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                  <div className="lg:hidden block p-3 lg:p-6  bottom-3 lg:bottom-6 z-[2] group-hover:translate-y-[25rem] transition-all duration-150">
                    <h5 className="pb-2 text-black Alata text-base    lg:text-[1.1vw]">
                      {data?.attributes?.Title}
                    </h5>
                    <div
                      className=" text-xs text-black  lg:text-[0.729vw] pb-2"
                      dangerouslySetInnerHTML={{
                        __html: data?.attributes?.PostData
                          ? data.attributes.PostData.substring(0, 180) + "..."
                          : "",
                      }}
                    ></div>
                    <button
                      className="Alata text-[#AD843E] text-[13px]"
                      style={{ borderBottom: "1px solid " }}
                    >
                      Read More
                    </button>
                  </div>
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="xl:block lg:block md:hidden ">
        <SwiperButton
          next={"cust-swiper-button-next1"}
          prev={"cust-swiper-button-prev2"}
        />
      </div>
    </section>
  );
};

export default HomeBlog;
