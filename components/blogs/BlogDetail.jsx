import React from "react";
import Conatiner from "../common/Conatiner";
import Image from "next/image";
import { cleanImage } from "../imageHandling";

const BlogDetail = ({ blogsingleData }) => {
  console.log("blogsingleData", blogsingleData);
  return (
    <div className=" py-10 md:px-10 px-[20px] lg:px-[10.938vw] lg:pb-[5.229vw] lg:pt-[1.229vw] bg-white">
      <div className="xl:text-[4rem] flex gap-5  mt-3 lg:mb-[1.7vw] mb-5 xl:py-0 justify-start  text-start lg:text-[3rem] text-[1.5rem] capitalize font-[500]">
        <span className="text-black AriensNobela">
          {blogsingleData?.attributes?.Title}
        </span>
      </div>

      <div>
        <Image
          src={cleanImage(
            blogsingleData?.attributes?.Postimage?.data?.attributes?.url
          )}
          alt={
            blogsingleData?.attributes?.Postimage?.data?.attributes
              ?.alternativeText
              ? blogsingleData?.attributes?.Postimage?.data?.attributes
                  ?.alternativeText
              : "blog image"
          }
          height={1000}
          width={1000}
          className=" w-full h-auto mb-[25px]"
        />
      </div>

      <div
        className="blogsinglecontent text-black"
        dangerouslySetInnerHTML={{
          __html: blogsingleData?.attributes?.PostData?.replace(
            /<li>/g,
            '<li style="margin-left: 1.2rem;">'
          ),
        }}
        
      ></div>
    </div>
  );
};

export default BlogDetail;
