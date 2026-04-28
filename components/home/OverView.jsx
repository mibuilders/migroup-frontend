import Image from "next/image";
import React, { useRef } from "react";
import Button from "../common/Button";
import {
  fadeIn,
  slideFromLeft,
  slideFromRight,
  zoomIn,
} from "../common/Animation";
import { motion } from "framer-motion";
import { cleanImage } from "../imageHandling";
import { useRouter } from "next/router";

const OverView = ({ overview }) => {
  console.log("overview", overview);
  const ref = useRef(null);
  const router = useRouter();
  return (
    <>
      {overview && (
        <section className="bg-primary-color   lg:py-40  py-10 xl:py-52">
          <div className=" flex flex-col lg:flex-row justify-between items-center">
            <div className=" relative">
              <motion.div
                variants={slideFromRight(1)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:block hidden absolute -top-20 right-40 lg:w-[16.458vw]"
              >
                <Image
                  height={239}
                  width={316}
                  src={"/Images/Home/c1.png"}
                  className=" "
                />
              </motion.div>
              <motion.div
                variants={slideFromLeft(1)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className=" lg:block hidden absolute -top-20 left-20 lg:w-[19.792vw]"
              >
                <Image
                  height={239}
                  width={316}
                  src={"/Images/Home/c2.png"}
                  className=" "
                />
              </motion.div>
              <motion.div
                ref={ref}
                data-splitting=""
                variants={zoomIn("left", 0.5)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="relative z-[1]"
              >
                <Image
                  src={cleanImage(
                    overview?.featuredImage?.data?.attributes?.url
                  )}
                  height={1000}
                  width={1000}
                  alt={
                    overview?.featuredImage?.data?.attributes?.alternativeText
                      ? overview?.featuredImage?.data?.attributes
                          ?.alternativeText
                      : "overview"
                  }
                  className="h-full w-full lg:w-[62.5vw] "
                />
              </motion.div>
            </div>

            <div className=" container mx-auto lg:w-[40%]  font-[700] capitalize relative">
              <div className=" animate-[spin_35s_linear_infinite] absolute left-0 top-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="455"
                  height="452"
                  viewBox="0 0 455 452"
                  fill="none"
                >
                  <path
                    opacity="0.05"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M234.767 237.294L339.356 340.303L309.296 327.148C289.794 339.683 270.044 348.494 250.045 352.714L255.138 329.382L285.074 316.599L262.467 306.67L234.767 237.294ZM228.928 0V210.487C244.083 179.46 254.889 150.046 257.125 124.108C256.877 123.363 256.628 122.618 256.256 121.874C265.323 124.356 274.764 129.941 285.943 136.518L309.296 123.363C288.179 110.828 268.056 102.513 248.803 98.9138C239.859 68.2592 233.524 34.9984 228.928 0ZM96.5152 248.836L122.103 252.931C125.954 264.846 130.55 275.767 136.264 285.075L145.953 262.86L217.376 235.556L112.166 340.675L125.209 310.641C113.036 291.777 103.223 271.423 96.5152 248.836ZM227.189 240.645V452L203.092 354.327C179.863 347.377 159.989 338.69 144.711 327.768L168.56 316.102L197.254 330.499L197.005 329.506C193.03 306.422 207.936 278.001 227.189 240.645ZM0 226.124H211.538C176.137 209.121 150.425 195.221 121.731 198.696C125.333 188.271 129.929 177.846 135.395 167.421L124.96 143.593C112.912 157.989 102.974 178.219 95.273 204.529L0 226.124ZM328.425 144.71L357.615 208.128L331.282 202.295C327.307 188.147 322.711 177.598 317.618 169.779L308.675 190.505L234.021 219.05L343.082 110.828L328.425 144.71ZM141.854 124.852C161.107 113.186 180.981 103.506 201.725 96.0593L199.986 119.888C189.676 125.349 178.124 130.313 167.939 135.898L190.173 145.33L218.122 217.312L110.055 111.076L141.854 124.852ZM328.052 257.027C325.071 265.342 320.848 273.657 317.37 281.848L326.934 308.159C338.486 289.295 348.051 269.934 354.137 249.829C385.688 241.762 420.965 235.06 455 227.738L240.605 226.993C272.28 243.747 302.091 255.91 328.052 257.027Z"
                    fill="#AD843E"
                  />
                </svg>
              </div>
              {overview?.sectionTitle && (
                <motion.h3
                  ref={ref}
                  data-splitting=""
                  variants={fadeIn("up", 0.3)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className=" text-secondary-color relative  lg:text-[4.167vw] text-[2.5rem] flex justify-start pb-10 flex-col"
                >
                  <span className="heading-line font-medium">
                    {overview?.sectionTitle}
                  </span>
                </motion.h3>
              )}

              <div className="flex flex-col lg:text-[0.95vw] text-[0.9rem] font-[400]  relative gap-5">
                <motion.div
                  ref={ref}
                  data-splitting=""
                  variants={fadeIn("left", 0.4)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  dangerouslySetInnerHTML={{
                    __html: overview?.Description,
                  }}
                ></motion.div>
              </div>
              <div className="xl:w-[35%] md:w-[40%] lg:w-[50%] w-[80%] pt-10 text-nowrap">
                {/* {overview?.CTA?.brochure?.data?.attributes.url && ( */}
                <Button
                  text={"know more"}
                  onClick={() => {
                    router.push(`about-us`);
                  }}
                />
                {/* )} */}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default OverView;
