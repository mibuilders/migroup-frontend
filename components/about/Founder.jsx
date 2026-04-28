import React, { useRef, useState } from "react";
import Container from "../common/Conatiner";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Heading from "../common/Heading";
import { motion } from "framer-motion";
import { fadeIn } from "../common/Animation";
const Founder = ({ team }) => {
  const ref = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <>
      {team && (
        <section className="relative h-full bg-[#181D23] text-white py-10 md:py-16  xl:py-20">
          {/* <Container> */}
          <div className="container mx-auto">
            <div className="relative flex flex-col items-center justify-center gap-2 xl:gap-10 z-10 text-center">
              <div className="xl:text-[3.333vw] flex flex-wrap items-center justify-center gap-2 py-6 xl:py-0 text-center lg:text-[3.333vw] text-[2rem] capitalize font-[500] AriensNobela">
                <motion.div
                  ref={ref}
                  data-splitting=""
                  variants={fadeIn("left", 0.2)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <span className="text-secondary-color heading-line after:bg-white text-nowrap">
                    Meet Our{" "}
                  </span>
                </motion.div>
                <span className="text-white">Founder</span>
              </div>

              {/* Swiper Section */}
              <div className="w-full flex  justify-center items-center">
                <div className="w-full  ">
                  {" "}
                  {/* Optional: control max width */}
                  <Swiper
                    modules={[Navigation, Keyboard, Autoplay, EffectCoverflow]}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      nextEl: ".cust-swiper-button-nextnew1",
                      prevEl: ".cust-swiper-button-prevnew1",
                    }}
                    onReachBeginning={() => setIsBeginning(true)}
                    onReachEnd={() => setIsEnd(true)}
                    onSlideChange={({ isBeginning, isEnd }) => {
                      setIsBeginning(isBeginning);
                      setIsEnd(isEnd);
                    }}
                    speed={1200}
                    className="w-full h-full"
                    breakpoints={{
                      0: { slidesPerView: 1, spaceBetween: 10 },
                      768: { slidesPerView: 1, spaceBetween: 20 },
                      1200: { slidesPerView: 1, spaceBetween: 30 },
                    }}
                  >
                    {team?.team?.map((item, index) => (
                      <SwiperSlide
                        key={index}
                        className="flex w-full h-full justify-center items-center"
                      >
                        <div className="text-white text-center Alata w-full">
                          {item?.Name && (
                            <div className="text-[1.5rem] xl:text-[2.5rem] text-secondary-color font-medium">
                              {item?.Name}
                            </div>
                          )}
                          {item?.Designation && (
                            <div className="text-[1rem] xl:text-[2.083vw] text-white">
                              {item.Designation}
                            </div>
                          )}
                          <div
                            className="text-[0.8rem] lg:leading-[1.667vw] xl:text-[0.833vw] font-[400] text-white mt-5"
                            dangerouslySetInnerHTML={{
                              __html: item?.Description,
                            }}
                          ></div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {/* Navigation Buttons */}
                  {team?.team?.length > 1 && (
                    <div className="flex gap-4 pt-10 justify-center">
                      {/* Buttons are same as you have now */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* </Container> */}
        </section>
      )}
    </>
  );
};

export default Founder;
