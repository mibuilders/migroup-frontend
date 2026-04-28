import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { cleanImage } from "../imageHandling";

const InnerPageBanner = ({ banner }) => {
  const router = useRouter();

  return (
    <div className="relative">
      {/* Banner Images */}
      <div className="absolute inset-0 bg-gradiant-banner z-[1]" />
      <div className="relative">
        {/* Desktop Banner */}
        <Image
          className="hidden w-full md:block"
          src={cleanImage(banner?.DesktopBanner?.data?.attributes?.url)}
          alt={
            banner?.DesktopBanner?.data?.attributes?.alternativeText
              ? banner?.DesktopBanner?.data?.attributes?.alternativeText
              : "banner"
          }
          width={1920}
          height={1080}
          priority
        />
        {/* Mobile Banner */}
        <Image
          className="block w-full md:hidden"
          src={cleanImage(banner?.MobileBanner?.data?.attributes?.url)}
          alt={
            banner?.MobileBanner?.data?.attributes?.alternativeText
              ? banner?.MobileBanner?.data?.attributes?.alternativeText
              : "banner"
          }
          width={500}
          height={800}
          priority
        />
      </div>

      {/* Overlay Section */}
      {banner?.Title && (
        <div className="absolute px-0 bg-opacity-50 xl:px-32 bottom-2 md:bottom-12 z-[2]">
          <div className="container px-4 mx-auto">
            <div className="flex justify-center">
              <div className="text-center">
                <h1
                  className="font-bold text-white text-1xl md:text-3xl"
                  data-splitting=""
                >
                  {banner?.Title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InnerPageBanner;
