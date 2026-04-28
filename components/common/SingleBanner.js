import Image from "next/image";
import React from "react";
import { cleanImage } from "../imageHandling";

const SingleBanner = ({ banner }) => {
  // console.log('banner', banner)
  return (
    <div className="relative w-full">
      <Image
        src={cleanImage(banner?.DesktopBanner?.data?.attributes?.url)}
        alt={
          banner?.DesktopBanner?.data?.attributes?.alternativeText
            ? banner?.DesktopBanner?.data?.attributes?.alternativeText
            : "banner"
        }
        height={1000}
        width={1000}
        sizes="100%"
        className="hidden w-full md:block "
        priority
      />

      <Image
        src={cleanImage(banner?.MobileBanner?.data?.attributes?.url)}
        alt={
          banner?.MobileBanner?.data?.attributes?.alternativeText
            ? banner?.MobileBanner?.data?.attributes?.alternativeText
            : "banner"
        }
        height={1000}
        width={1000}
        sizes="100%"
        className="block w-full md:hidden "
        priority
      />
      <div className="absolute inset-0 bg-gradiant-banner z-[1]" />
      {banner?.Title && (
        <h1 className="absolute z-[2] mont  text-1xl md:text-3xl font-bold  text-white bottom-[10%] left-[10%] ">
          {banner?.Title}
        </h1>
      )}
    </div>
  );
};

export default SingleBanner;
