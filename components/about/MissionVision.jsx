import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionVision = ({ vision, mission }) => {
  const secref = useRef(); // Ref for the section
  const compassRef = useRef(); // Ref for the compass
  const visionRef = useRef(); // Ref for the vision section
  const missionRef = useRef(); // Ref for the mission section

  useGSAP(() => {
    // Timeline for synchronized animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: secref.current, // Trigger on the section
        start: "top top", // Start when the top of the section hits the top of the viewport
        end: "+=100%", // End after scrolling 100% of the viewport height
        scrub: 1, // Smooth animation tied to scroll
        pin: true, // Pin the section while scrolling
        markers: false, // Set to true for debugging
      },
    });

    // Rotate the compass
    tl.to(compassRef.current, {
      rotation: 90, // Rotate the compass by 90 degrees
    });

    // Move the vision section up and out of view
    tl.to(
      visionRef.current,
      {
        y: "-100%", // Move the vision section up
      },
      0
    ); // Start at the same time as the compass rotation

    // Move the mission section into view
    tl.fromTo(
      missionRef.current,
      { y: "100%" }, // Start below and invisible
      { y: "0%" }, // Move into view and fade in
      0 // Start at the same time as the compass rotation
    );
  });

  return (
    <div className="h-[100dvh] relative mission overflow-hidden" ref={secref}>
      <div className="size-full absolute -z-10">
        <Image
          fill
          src={"/Images/about/ourvision.webp"}
          className="object-cover w-full h-full relative"
          alt="img"
        />
      </div>
      <div className="h-full flex items-center">
        <div className="flex h-[80%] flex-col-reverse lg:flex-row gap-10 lg:gap-0 w-full justify-center items-center md:py-2 md:border-y-2 border-white">
          <div className="lg:w-[60%] relative flex flex-col justify-center items-center mx-2 md:mx-10 lg:ml-40 overflow-y-hidden">
            {/* Vision Section */}
            <div ref={visionRef} className=" ">
              <h5 className=" text-[3rem] lg:text-[4.167vw] heading-line mb-10 AriensNobela text-center lg:text-start after:left-[40%] lg:after:left-0">
                {vision?.sectionTitle}
              </h5>
              <div
                className=" text-[0.8rem] xl:text-[1rem] text-center lg:text-start"
                dangerouslySetInnerHTML={{
                  __html: vision?.Description,
                }}
              ></div>
            </div>

            {/* Mission Section */}
            <div
              ref={missionRef}
              className="mt-5 absolute top-0 left-0 size-full "
            >
              <h5 className="text-[3rem] lg:text-[4.167vw] heading-line mb-10 AriensNobela text-center lg:text-start after:left-[40%] lg:after:left-0">
                {mission?.sectionTitle}
              </h5>
              <div
                className=" text-[0.8rem] xl:text-[1rem] text-center lg:text-start"
                dangerouslySetInnerHTML={{
                  __html: mission?.Description,
                }}
              ></div>
            </div>
          </div>

          {/* Compass SVG */}
          <div>
            <svg
              ref={compassRef}
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full xl:w-[662px] xl:h-[659px] compass"
              viewBox="0 0 662 659"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M341.572 345.966L493.744 496.15L450.008 476.97C421.634 495.245 392.899 508.092 363.802 514.244L371.212 480.227L414.767 461.59L381.874 447.114L341.572 345.966ZM333.078 0V306.882C355.127 261.646 370.85 218.762 374.103 180.945C373.742 179.859 373.38 178.773 372.838 177.688C386.031 181.306 399.766 189.449 416.032 199.039L450.008 179.859C419.285 161.583 390.007 149.46 361.995 144.213C348.982 99.5195 339.765 51.0264 333.078 0ZM140.424 362.794L177.654 368.765C183.256 386.136 189.943 402.059 198.257 415.63L212.353 383.241L316.271 343.433L163.196 496.693L182.172 452.904C164.461 425.401 150.183 395.726 140.424 362.794ZM330.548 350.851V659L295.487 516.597C261.691 506.464 232.775 493.798 210.546 477.875L245.245 460.866L286.993 481.855L286.632 480.408C280.849 446.752 302.536 405.316 330.548 350.851ZM0 329.681H307.777C256.27 304.892 218.859 284.626 177.112 289.692C182.353 274.493 189.04 259.294 196.992 244.094L181.811 209.353C164.28 230.342 149.822 259.836 138.617 298.197L0 329.681ZM477.84 210.981L520.311 303.444L481.997 294.94C476.214 274.312 469.527 258.932 462.117 247.532L449.105 277.75L340.488 319.367L499.166 161.583L477.84 210.981ZM206.389 182.03C234.402 165.021 263.318 150.908 293.499 140.051L290.969 174.792C275.969 182.754 259.161 189.992 244.342 198.134L276.692 211.886L317.355 316.834L160.123 161.945L206.389 182.03ZM477.298 374.736C472.96 386.859 466.816 398.983 461.755 410.925L475.671 449.285C492.479 421.782 506.395 393.554 515.25 364.241C561.155 352.48 612.481 342.709 662 332.033L350.067 330.948C396.152 355.375 439.526 373.108 477.298 374.736Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
