// components/BannerSwiper.js
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { cleanImage } from "../imageHandling";

const BannerSwiper = ({ banners }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      className="w-full"
    >
      {banners?.map((banner, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full">
            {/* Desktop Image */}
            <Image
              src={cleanImage(banner?.DesktopBanner?.data?.attributes?.url)}
              alt={
                banner?.DesktopBanner?.data?.attributes?.alternativeText || "banner"
              }
              height={1000}
              width={1000}
              sizes="100vw"
              className="hidden w-full md:block"
              priority
            />

            {/* Mobile Image */}
            <Image
              src={cleanImage(banner?.MobileBanner?.data?.attributes?.url)}
              alt={
                banner?.MobileBanner?.data?.attributes?.alternativeText || "banner"
              }
              height={1000}
              width={1000}
              sizes="100vw"
              className="block w-full md:hidden"
              priority
            />

            {/* Overlay & Title */}
            <div className="absolute inset-0 bg-gradiant-banner z-[1]" />
            {banner?.Title && (
              <h1 className="absolute z-[2] mont text-1xl md:text-3xl font-bold text-white bottom-[10%] left-[10%]">
                {banner?.Title}
              </h1>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSwiper;
