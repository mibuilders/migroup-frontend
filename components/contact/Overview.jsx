import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { fadeIn } from "../common/Animation";
import Link from "next/link";
import GetIntouchForm from "../Form/GetIntouchForm";

const Overview = ({ contactdata }) => {
  const ref = useRef();

  console.log("contactdata", contactdata);
  return (
    <div className="bg-[#181D23] pt-5 lg:pt-[5.208vw] overflow-hidden min-h-screen">
      <div className="relative flex flex-col justify-between w-full lg:flex-row lg:min-h-auto">
        <div className="absolute top-0 left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="xl:h-[800px] xl:w-[800px] w-full h-full"
            viewBox="0 0 887 1052"
            fill="none"
          >
            <path
              opacity="0.05"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M374.413 552.286L617.841 792.033L547.877 761.415C502.487 790.589 456.519 811.097 409.973 820.918L421.826 766.614L491.501 736.862L438.884 713.754L374.413 552.286ZM360.825 0V489.893C396.096 417.68 421.248 349.222 426.452 288.852C425.874 287.119 425.296 285.386 424.428 283.653C445.533 289.43 467.505 302.428 493.525 317.738L547.877 287.119C498.729 257.945 451.893 238.592 407.082 230.215C386.266 158.869 371.522 81.4563 360.825 0ZM52.6364 579.149L112.192 588.681C121.155 616.411 131.852 641.83 145.151 663.494L167.701 611.789L333.938 548.242L89.0639 792.9L119.42 722.997C91.0876 679.092 68.2482 631.72 52.6364 579.149ZM356.777 560.085V1052L300.69 824.673C246.627 808.498 200.37 788.278 164.81 762.859L220.319 735.707L287.102 769.214L286.524 766.903C277.273 713.176 311.966 647.029 356.777 560.085ZM-172 526.289H320.35C237.954 486.716 178.109 454.365 111.325 462.453C119.709 438.189 130.406 413.925 143.127 389.662L118.842 334.202C90.7985 367.709 67.67 414.792 49.7453 476.029L-172 526.289ZM592.4 336.802L660.34 484.405L599.049 470.829C589.798 437.9 579.101 413.348 567.247 395.15L546.432 443.388L372.678 509.824L626.514 257.945L592.4 336.802ZM158.161 290.585C202.972 263.433 249.229 240.903 297.51 223.572L293.463 279.031C269.467 291.741 242.58 303.295 218.873 316.293L270.623 338.246L335.672 505.78L84.149 258.523L158.161 290.585ZM591.532 598.213C584.594 617.566 574.764 636.919 566.669 655.984L588.93 717.22C615.817 673.315 638.079 628.254 652.245 581.46C725.678 562.684 807.785 547.086 887 530.044L388.001 528.311C461.723 567.306 531.109 595.613 591.532 598.213Z"
              fill="#AD843E"
            />
          </svg>
        </div>
        <div className="lg:w-[43.75vw] px-6 lg:pl-[13.542vw]  pr-4 flex-1 w-full lg:h-[36.5vw] lg:mt-0 mt-[2rem] ">
          <div className="flex lg:items-center items-start lg:h-[6.771vw] lg:mt-[2.404vw] relative lg:gap-[2.083vw] gap-5 after:content-[''] after:absolute after:lg:w-[80%] after:w-full after:h-[2px] after:lg:-bottom-[1vw] after:-bottom-4 after:bg-secondary-color">
            <div className="p-5 rounded-full bg-secondary-color">
              <Image
                src={"/Images/icons/call-icon.svg"}
                width={1000}
                height={1000}
                className=" size-[2rem] lg:size-[1.667vw]"
              />
            </div>
            <div>
              <p className="AriensNobela lg:text-[1.042vw]">Call Us Now</p>
              {contactdata?.attributes?.Phone &&
                contactdata?.attributes?.Phone?.number?.map((item, index) => {
                  // console.log("item", item);
                  return (
                    <p className="mb-1" key={`phone${index}`}>
                      <Link href={`tel:${item?.text?.replace(/-|\s/g, "")}`}>
                        {item?.text}
                      </Link>
                    </p>
                  );
                })}
            </div>
          </div>
          <div className="flex mt-8 lg:items-center items-start lg:h-[6.771vw] lg:mt-[2.404vw] relative lg:gap-[2.083vw] gap-5 after:content-[''] after:absolute  after:lg:w-[80%] after:w-full after:h-[2px] after:lg:-bottom-[1vw] after:-bottom-4 after:bg-secondary-color">
            <div className="p-5 rounded-full bg-secondary-color">
              <Image
                src={"/Images/icons/email-icon.svg"}
                width={1000}
                height={1000}
                className="size-[2rem] lg:size-[1.667vw] "
              />
            </div>
            {contactdata?.attributes?.Email && (
              <div>
                <p className="AriensNobela lg:text-[1.042vw]">Send Email</p>
                <Link href={"mailto:abc@gmail.com"} className="Alata">
                  {contactdata?.attributes?.Email}
                </Link>
              </div>
            )}
          </div>
          <div className="flex mt-8 lg:items-center items-start lg:h-[6.\771vw] lg:mt-[2.404vw] lg:gap-[2.083vw] gap-5 ">
            <div className="p-5 rounded-full bg-secondary-color">
              <Image
                src={"/Images/icons/location-icon.svg"}
                width={1000}
                height={1000}
                className="size-[2rem] lg:size-[1.667vw]"
              />
            </div>
            {contactdata?.attributes?.Address && (
              <div className=" w-[60%] lg:w-[70%]">
                <p className="AriensNobela lg:text-[1.042vw]">Location</p>
                {contactdata?.attributes?.Address}
              </div>
            )}
          </div>
        </div>
        <div className="lg:w-[43.75vw] w-full  flex-1 lg:px-0 px-5 lg:mt-0 mt-[2rem]">
          <div className="xl:text-[5rem] flex gap-2 py-6 xl:py-0 justify-start  text-start lg:text-[4rem] text-[2rem] capitalize font-[500] AriensNobela">
            <motion.div
              ref={ref}
              data-splitting=""
              variants={fadeIn("left", 0.2)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <span className="text-secondary-color heading-line ">Get in</span>
            </motion.div>
            <span className="text-white"> touch</span>
          </div>
          <div className="relative flex flex-col items-start justify-start w-full mt-0 align-middle xl:flex-row lg:mt-14 md:flex-col lg:flex-col lg:items-center">
            <GetIntouchForm />
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-20 w-full">
        <div className="relative w-full" style={{ paddingBottom: "35.25%" }}>
          <div
            className="absolute top-0 left-0 w-full h-full"
            dangerouslySetInnerHTML={{
              __html: contactdata?.attributes?.googleMap,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
