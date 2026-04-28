import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../common/Animation";

const OurMission = ({ vision, mission }) => {
  console.log({ vision });
  // const [isMission, setIsMission] = useState(true);
  // const controls = useAnimation();
  // const textControls = useAnimation();
  // const ref = useRef(null);

  // useEffect(() => {
  //   const rotateAndToggle = async () => {
  //     await controls.start({ rotate: 180, transition: { duration: 5, ease: "easeInOut" } });
  //     controls.set({ rotate: 0 });
  //     setIsMission((prev) => !prev);
  //     await textControls.start({ opacity: 0, transition: { duration: 0.5 } });
  //     textControls.set({ y: 50, opacity: 0 });
  //     await textControls.start({ y: 0, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } });
  //   };

  //   const interval = setInterval(rotateAndToggle, 2000);
  //   return () => clearInterval(interval);
  // }, [controls, textControls]);
  const [isMission, setIsMission] = useState(true);
  const controls = useAnimation();
  const textControls = useAnimation();
  const ref = useRef(null);

  // useEffect(() => {
  //   let isMounted = true;

  //   const rotateAndToggle = async () => {
  //     if (isMounted) {
  //       await controls.start({ rotate: 360, transition: { duration: 5, ease: "easeInOut" } });
  //       if (isMounted) {
  //         setIsMission((prev) => !prev);
  //         await textControls.start({ opacity: 0, transition: { duration: 0.5 } });
  //         if (isMounted) {
  //           await textControls.start({ y: 0, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } });
  //         }
  //       }
  //     }
  //   };

  //   controls.set({ rotate: 0 });  // Set initial state safely after mount
  //   textControls.set({ y: 0, opacity: 1 });

  //   const interval = setInterval(rotateAndToggle, 3000);

  //   return () => {
  //     isMounted = false;
  //     clearInterval(interval);
  //   };
  // }, [controls, textControls]);

  return (
    <>
      {vision && (
        <section className="sticky top-0 ">
          <div className="absolute inset-0 top-0 left-0 ">
            <Image
              height={2000}
              width={2000}
              src={"/Images/about/ourvision.png"}
              className="object-cover w-full h-full"
              alt="img"
            />
            {/* <div className="absolute xl:top-32  top-2 left-0 w-full h-[0.5px]  bg-white"></div>
            <div className="absolute xl:bottom-32 bottom-5 left-0 w-full h-[0.5px] bg-white"></div> */}
          </div>

          <div className="px-5  border-white border-y-2 xl:px-16 py-20">
            <div className="flex flex-col items-center justify-between text-white bg-gray-900 xl:flex-row lg:flex-row xl:h-screen ">
              <div className="flex-[0.6] z-10 ">
                <div
                  // animate={textControls}
                  className="xl:text-[5rem] flex-col flex gap-5   xl:py-0 justify-start text-start lg:text-[4rem] md:text-[2.5] text-[2rem] capitalize font-[500] AriensNobela"
                >
                  <h3> {vision?.sectionTitle}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xl:h-[2px] xl:w-[200px] h-[2px] w-[100px] mb-5 -mt-6"
                    viewBox="0 0 200 2"
                    fill="none"
                  >
                    <path d="M0 1H200" stroke="white" />
                  </svg>
                </div>

                {/* <motion.p
              animate={textControls}
              className="Alata text-[1rem] xl:leading-[2rem] xl:text-start leading-[1.5rem] text-white font-[500] capitalize"
            >
              {isMission
                ? "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. Ipsum amet et elementum ipsum. Condimentum faucibus lacinia tempus vulputate sit arcu egestas. Imperdiet pellentesque diam metus at. A sit netus tortor lacus dictum rutrum atPosuere suspendisse risus sed viverra magna ipsum quam elit imperdiet."
                : "Our vision is to innovate and lead with integrity, delivering exceptional solutions for a sustainable future."}
            </motion.p> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: vision?.Description,
                  }}
                ></div>
              </div>
              <div className="flex-[0.4] flex justify-center items-center z-10">
                <motion.div animate={controls}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full xl:w-[662px] xl:h-[659px]"
                    viewBox="0 0 662 659"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M341.572 345.966L493.744 496.15L450.008 476.97C421.634 495.245 392.899 508.092 363.802 514.244L371.212 480.227L414.767 461.59L381.874 447.114L341.572 345.966ZM333.078 0V306.882C355.127 261.646 370.85 218.762 374.103 180.945C373.742 179.859 373.38 178.773 372.838 177.688C386.031 181.306 399.766 189.449 416.032 199.039L450.008 179.859C419.285 161.583 390.007 149.46 361.995 144.213C348.982 99.5195 339.765 51.0264 333.078 0ZM140.424 362.794L177.654 368.765C183.256 386.136 189.943 402.059 198.257 415.63L212.353 383.241L316.271 343.433L163.196 496.693L182.172 452.904C164.461 425.401 150.183 395.726 140.424 362.794ZM330.548 350.851V659L295.487 516.597C261.691 506.464 232.775 493.798 210.546 477.875L245.245 460.866L286.993 481.855L286.632 480.408C280.849 446.752 302.536 405.316 330.548 350.851ZM0 329.681H307.777C256.27 304.892 218.859 284.626 177.112 289.692C182.353 274.493 189.04 259.294 196.992 244.094L181.811 209.353C164.28 230.342 149.822 259.836 138.617 298.197L0 329.681ZM477.84 210.981L520.311 303.444L481.997 294.94C476.214 274.312 469.527 258.932 462.117 247.532L449.105 277.75L340.488 319.367L499.166 161.583L477.84 210.981ZM206.389 182.03C234.402 165.021 263.318 150.908 293.499 140.051L290.969 174.792C275.969 182.754 259.161 189.992 244.342 198.134L276.692 211.886L317.355 316.834L160.123 161.945L206.389 182.03ZM477.298 374.736C472.96 386.859 466.816 398.983 461.755 410.925L475.671 449.285C492.479 421.782 506.395 393.554 515.25 364.241C561.155 352.48 612.481 342.709 662 332.033L350.067 330.948C396.152 355.375 439.526 373.108 477.298 374.736Z"
                      fill="white"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}
      {mission && (
        <section className="sticky top-0 ">
          <div className="absolute inset-0  top-0 left-0 ">
            <Image
              height={2000}
              width={2000}
              src={"/Images/about/mission.jpeg"}
              className="object-cover w-full h-full brightness-[15%] "
              alt="img"
            />
            {/* <div className="absolute xl:top-32  top-2 left-0 w-full h-[0.5px]  bg-white"></div>
            <div className="absolute xl:bottom-32 bottom-5 left-0 w-full h-[0.5px] bg-white"></div> */}
          </div>

          <div className="px-5 border-white border-y-2 xl:px-16 py-20">
            <div className="flex flex-col items-center justify-between text-white bg-gray-900 xl:flex-row lg:flex-row xl:h-screen ">
              <div className="flex-[0.6] z-10 ">
                <div
                  // animate={textControls}
                  className="xl:text-[5rem] flex-col flex gap-5   xl:py-0 justify-start text-start lg:text-[4rem] md:text-[2.5] text-[2rem] capitalize font-[500] AriensNobela"
                >
                  <h3> {mission?.sectionTitle}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xl:h-[2px] xl:w-[200px] h-[2px] w-[100px] mb-5 -mt-6"
                    viewBox="0 0 200 2"
                    fill="none"
                  >
                    <path d="M0 1H200" stroke="white" />
                  </svg>
                </div>

                {/* <motion.p
              animate={textControls}
              className="Alata text-[1rem] xl:leading-[2rem] xl:text-start leading-[1.5rem] text-white font-[500] capitalize"
            >
              {isMission
                ? "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. Ipsum amet et elementum ipsum. Condimentum faucibus lacinia tempus vulputate sit arcu egestas. Imperdiet pellentesque diam metus at. A sit netus tortor lacus dictum rutrum atPosuere suspendisse risus sed viverra magna ipsum quam elit imperdiet."
                : "Our vision is to innovate and lead with integrity, delivering exceptional solutions for a sustainable future."}
            </motion.p> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: mission?.Description,
                  }}
                ></div>
              </div>
              <div className="flex-[0.4] flex justify-center items-center z-10">
                <motion.div animate={controls}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full xl:w-[662px] xl:h-[659px]"
                    viewBox="0 0 662 659"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M341.572 345.966L493.744 496.15L450.008 476.97C421.634 495.245 392.899 508.092 363.802 514.244L371.212 480.227L414.767 461.59L381.874 447.114L341.572 345.966ZM333.078 0V306.882C355.127 261.646 370.85 218.762 374.103 180.945C373.742 179.859 373.38 178.773 372.838 177.688C386.031 181.306 399.766 189.449 416.032 199.039L450.008 179.859C419.285 161.583 390.007 149.46 361.995 144.213C348.982 99.5195 339.765 51.0264 333.078 0ZM140.424 362.794L177.654 368.765C183.256 386.136 189.943 402.059 198.257 415.63L212.353 383.241L316.271 343.433L163.196 496.693L182.172 452.904C164.461 425.401 150.183 395.726 140.424 362.794ZM330.548 350.851V659L295.487 516.597C261.691 506.464 232.775 493.798 210.546 477.875L245.245 460.866L286.993 481.855L286.632 480.408C280.849 446.752 302.536 405.316 330.548 350.851ZM0 329.681H307.777C256.27 304.892 218.859 284.626 177.112 289.692C182.353 274.493 189.04 259.294 196.992 244.094L181.811 209.353C164.28 230.342 149.822 259.836 138.617 298.197L0 329.681ZM477.84 210.981L520.311 303.444L481.997 294.94C476.214 274.312 469.527 258.932 462.117 247.532L449.105 277.75L340.488 319.367L499.166 161.583L477.84 210.981ZM206.389 182.03C234.402 165.021 263.318 150.908 293.499 140.051L290.969 174.792C275.969 182.754 259.161 189.992 244.342 198.134L276.692 211.886L317.355 316.834L160.123 161.945L206.389 182.03ZM477.298 374.736C472.96 386.859 466.816 398.983 461.755 410.925L475.671 449.285C492.479 421.782 506.395 393.554 515.25 364.241C561.155 352.48 612.481 342.709 662 332.033L350.067 330.948C396.152 355.375 439.526 373.108 477.298 374.736Z"
                      fill="white"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default OurMission;
