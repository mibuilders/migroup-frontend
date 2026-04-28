import React from "react";
import Conatiner from "../common/Conatiner";
import Image from "next/image";
import { cleanImage } from "../imageHandling";

const NewsDetail = ({ newssingledata }) => {
  console.log("newssingledata", newssingledata);
  return (
    <div className=" py-10 px-[20px] md:px-10 lg:px-[10.938vw] lg:pb-[5.229vw] lg:pt-[1.229vw] bg-white">
      <div className="xl:text-[4rem] flex gap-5  mt-3 lg:mb-[1.7vw] mb-2 xl:py-0 justify-start  text-start lg:text-[3rem] text-[1.5rem] capitalize font-[500]">
        <span className="text-black AriensNobela">
          {newssingledata?.attributes?.Title}
        </span>
      </div>

      <div>
        <Image
          src={cleanImage(
            newssingledata?.attributes?.mediaImage?.data?.attributes?.url
          )}
          alt={
            newssingledata?.attributes?.mediaImage?.data?.attributes
              ?.alternativeText
              ? newssingledata?.attributes?.mediaImage?.data?.attributes
                  ?.alternativeText
              : "blog image"
          }
          height={1000}
          width={1000}
          className=" w-full h-auto mb-[40px]"
        />
      </div>

      <div
        className="blogsinglecontent"
        dangerouslySetInnerHTML={{
          __html: newssingledata?.attributes?.Description,
        }}
      ></div>
    </div>
  );
};

export default NewsDetail;
