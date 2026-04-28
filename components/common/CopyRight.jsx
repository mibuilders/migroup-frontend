import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SiFacebook } from "react-icons/si";

const CopyRight = ({ copyrighttext }) => {
  const router = useRouter();
  return (
    <div className="px-5 py-10 pb-10 bg-SnowWhite md:px-10 xl:px-40">
      <div className="mb-5 border-b"></div>
      <div className="flex flex-col justify-between gap-10 xl:flex-row">
        <span className="text-textColor Alata xl:text-[0.87rem] text-[0.8rem] leading-[1.5rem]  font-[500] ">
          {copyrighttext}
        </span>

        <div className="flex gap-10 relative z-10">
          <a
            href="https://www.facebook.com/mibuilders/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiFacebook className="h-[1.7rem] text-primary-color w-[1.7rem] cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/mi-builders-970032300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="h-[1.5rem] w-[1.5rem] cursor-pointer"
              src="/Icons/Link.svg"
              height={100}
              width={100}
              alt="LinkedIn"
            />
          </a>
          <a href="https://www.youtube.com/@mibuilders1987" target="_blank" rel="noopener noreferrer">
            <Image
              className="h-[1.5rem] w-[1.5rem] cursor-pointer"
              src="/Icons/youtube.svg"
              height={100}
              width={100}
              alt="YouTube"
            />
          </a>
          <a
            href="https://www.instagram.com/m.i.group?igsh=M2Q5eWh5bmJwNzVw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="h-[1.5rem] w-[1.5rem] cursor-pointer"
              src="/Icons/insta.svg"
              height={100}
              width={100}
              alt="YouTube"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
