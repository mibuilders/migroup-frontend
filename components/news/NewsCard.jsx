import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cleanImage } from "../imageHandling";

const NewsCard = ({ data }) => {
  // console.log("news data", data);

  const dateObj = new Date(data?.attributes?.Date); // Parse the original date

  const optionsDay = { day: "numeric" }; // Option for the day
  const optionsMonth = { month: "short" }; // Option for the month

  const day = dateObj.toLocaleDateString("en-GB", optionsDay); // Extract the day
  const month = dateObj.toLocaleDateString("en-GB", optionsMonth); // Extract the month

  let custslug;
  if (data?.attributes?.mediaType == "Internal") {
    custslug = `/news/${data?.attributes?.slug}`;
  } else if (data?.attributes?.mediaType == "External") {
    custslug = data?.attributes?.externalLink;
  } else {
    custslug = "#";
  }

  return (
    <Link href={custslug}>
      <div className=" min-h-[20rem] lg:min-h-[32.083vw]  p-4 lg:p-8 relative bg-[#F4EBE2] w-10/12 md:w-full mx-auto ">
        <div className="">
          <div className="text-black text-2xl lg:text-[2.083vw] lg:leading-[2.083vw]  AriensNobela">
            <div className="">{day}</div>
            <div className="">{month}</div>
          </div>
          <p className="text-black lg:mt-[2.083vw] text-xs lg:text-[0.95vw] font-extralight Alata lg:leading-[1.6vw]">
            {data?.attributes?.shortDescription}
          </p>
        </div>
        <Image
          src={cleanImage(
            data?.attributes?.thumbnailImage?.data?.attributes?.url
          )}
          alt={
            data?.attributes?.thumbnailImage?.data?.attributes?.alternativeText
              ? data?.attributes?.thumbnailImage?.data?.attributes
                  ?.alternativeText
              : "news image"
          }
          height={1000}
          width={1000}
          className=" w-full h-[15rem] md:h-[10rem] lg:w-[20.833vw] lg:h-[15.625vw]  md:absolute bottom-[-2.083vw] right-[-2.083vw] mt-5 object-cover"
        />
      </div>
    </Link>
  );
};

export default NewsCard;
