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
import { cleanImage } from "../imageHandling";
import { useRouter } from "next/router";
import Link from "next/link";
import NewsCard from "../news/NewsCard";

const HomeNewEvents = ({ newsdata }) => {
  const ref = useRef(null);
  const router = useRouter();
  const handleroute = (slug) => {
    router.push(slug);
  };
  return (
    <>
      {newsdata && newsdata?.length !== 0 && (
        <section className="relative items-center w-full px-6 pb-8 align-middle xl:px-32 md:py-20">
          <div className="flex flex-col items-center justify-between w-full mb-6 align-middle md:mb-10 xl:flex-row md:flex-col lg:flex-col">
            <div className="xl:text-[5rem] flex gap-5 py-6 xl:py-0 justify-start  text-start lg:text-[4rem] text-[2rem] capitalize font-[500] AriensNobela">
              <motion.div
                ref={ref}
                data-splitting=""
                variants={fadeIn("left", 0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <span className="text-secondary-color">News & </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 2"
                  fill="none"
                >
                  <path d="M0 1H200" stroke="#AD843E" />
                </svg>
              </motion.div>
              <span className="text-white ">Events</span>
            </div>
            <div className="hidden md:block ">
              <Buttons onClick={() => handleroute("/news")} text={"View All"} />
            </div>
          </div>
          <Swiper
            modules={[Navigation, Keyboard, Autoplay, EffectCoverflow]}
            spaceBetween={40}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".cust-swiper-button-next6",
              prevEl: ".cust-swiper-button-prev6",
            }}
            speed={1200}
            className=""
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1200: { slidesPerView: 3, spaceBetween: 100 },
            }}
          >
            {newsdata &&
              newsdata.map((item, index) => {
                return (
                  <SwiperSlide className="relative" key={index}>
                    <div className="pb-10">
                      <NewsCard data={item} key={index} />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
          <div className="">
            <SwiperButton
              next={"cust-swiper-button-next6"}
              prev={"cust-swiper-button-prev6"}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default HomeNewEvents;
