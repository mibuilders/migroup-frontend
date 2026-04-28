import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cleanImage } from "../imageHandling";

const BlogCard = ({ data }) => {
  console.log("data", data);
  return (
    <a href={`/blogs/${data?.attributes?.slug}`}>
      <div className="relative md:h-[30rem]  lg:min-h-[33.021vw] flex justify-center items-center overflow-hidden group">
        <div className=" absolute opacity-0 group-hover:opacity-100 z-[2] transition-opacity duration-200">
          <Image
            src={"/Images/Blogs/plus.svg"}
            alt={"plus"}
            height={75}
            width={75}
            className=""
          />
        </div>
        <div className="bg-gradient-to-t from-[#000000] to-transparent size-full absolute z-[1]" />

        <Image
          width={1000}
          height={1000}
          className="lg:size-full md:absolute h-[30rem] md:h-full w-full object-cover object-top"
          src={cleanImage(
            data?.attributes?.thumbnailimage?.data?.attributes?.url
          )}
          alt={
            data?.attributes?.thumbnailimage?.data?.attributes?.alternativeText
              ? data?.attributes?.thumbnailimage?.data?.attributes
                  ?.alternativeText
              : "blog image"
          }
        />
        <div className="absolute bottom-[0] left-0 w-full text-white p-4 z-[2]">
          <div className="lg:px-[1.406vw] lg:py-[1.25vw] Alata group-hover:translate-y-[45rem] transition-all duration-150">
            <h5 className="text-sm min-h-[3.083vw]  lg:text-[1.1vw]">
              {data?.attributes?.Title}
            </h5>
            {/* <p>{data?.description}</p> */}
            <div
              className="mt-3 text-xs md:text-base lg:text-[0.729vw]"
              dangerouslySetInnerHTML={{
                __html: data?.attributes?.PostData
                  ? data.attributes.PostData.substring(0, 180) + "..."
                  : "",
              }}
            ></div>
            <button className="underline xl:text-[1.5rem] text-[1.2rem] mt-3 text-[#AD843E]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
