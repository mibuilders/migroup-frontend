import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../common/Animation";
import Buttons from "../common/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SwiperButton from "../common/SwiperButton";
import Image from "next/image";
const HomeTestimonials = ({ testimonialdata }) => {
  console.log("testimonialdata", testimonialdata);
  const ref = useRef(null);

  return (
    <div className=" bg-primary-color">
      <section className="relative items-center w-full container mx-auto  align-middle home_testimonials py-10 lg:py-[5.208vw] ">
        <div className="absolute inset-0  animate-[spin_35s_linear_infinite] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 667 664"
            fill="none"
          >
            <path
              opacity="0.05"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M344.152 348.591L497.473 499.914L453.407 480.589C424.819 499.003 395.866 511.947 366.55 518.146L374.015 483.87L417.899 465.092L384.759 450.506L344.152 348.591ZM335.594 0V309.21C357.809 263.631 373.651 220.422 376.929 182.317C376.565 181.224 376.2 180.13 375.654 179.036C388.947 182.682 402.786 190.886 419.174 200.549L453.407 181.223C422.452 162.809 392.953 150.594 364.729 145.307C351.618 100.275 342.331 51.4135 335.594 0ZM141.485 365.546L178.996 371.563C184.64 389.065 191.378 405.109 199.754 418.783L213.957 386.148L318.66 346.038L164.428 500.461L183.548 456.34C165.703 428.628 151.318 398.728 141.485 365.546ZM333.045 353.513V664L297.719 520.516C263.668 510.306 234.533 497.544 212.136 481.5L247.098 464.362L289.161 485.511L288.797 484.053C282.97 450.142 304.821 408.391 333.045 353.513ZM0 332.182H310.101C258.205 307.205 220.512 286.785 178.449 291.89C183.73 276.576 190.467 261.261 198.479 245.946L183.184 210.941C165.521 232.09 150.954 261.808 139.664 300.459L0 332.182ZM481.449 212.582L524.241 305.746L485.637 297.177C479.81 276.393 473.073 260.896 465.607 249.41L452.497 279.857L343.06 321.79L502.936 162.809L481.449 212.582ZM207.948 183.411C236.172 166.273 265.307 152.053 295.716 141.114L293.167 176.119C278.053 184.141 261.119 191.433 246.187 199.638L278.782 213.494L319.752 319.238L161.333 163.174L207.948 183.411ZM480.903 377.579C476.533 389.795 470.342 402.01 465.243 414.043L479.264 452.694C496.198 424.982 510.22 396.54 519.142 367.005C565.393 355.154 617.107 345.309 667 334.552L352.711 333.459C399.144 358.071 442.846 375.939 480.903 377.579Z"
              fill="#AD843E"
            />
          </svg>
        </div>
        <div className="  ">
          <div className="xl:text-[5rem]  flex gap-5 justify-start  text-start lg:text-[4rem] text-[2.5rem] capitalize font-[500] AriensNobela">
            <motion.h3
              // ref={ref}
              data-splitting=""
              variants={fadeIn("up", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className=" text-secondary-color relative xl:text-[5rem] lg:text-[4rem] text-[2rem] flex justify-start pb-10 flex-col "
            >
              <span className="heading-line">Testimonials</span>
            </motion.h3>
          </div>
          <div className="hidden md:block ">
            {/* <Buttons text={"View All"} /> */}
          </div>
        </div>
        <div className="relative w-full lg:flex lg:justify-center lg:items-center">
          <div className="flex items-center justify-center w-full testimonial-card xl:px-60 relative xl:py-5">
            {/* Static Quote Image */}
            <Image
              src="/Images/icons/qute.svg"
              height={500}
              width={500}
              alt="icon"
              className="absolute xl:top-5 -top-4 left-1/2 transform -translate-x-1/2 xl:w-[70px] w-[50px] h-auto object-contain"
            />

            {/* Swiper Component */}
            <Swiper
              modules={[Navigation, Keyboard, Autoplay, EffectCoverflow]}
              spaceBetween={40}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".cust-swiper-button-next5",
                prevEl: ".cust-swiper-button-prev5",
              }}
              speed={1200}
              className="w-full md:w-[70%] lg:w-[80%] "
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 1, spaceBetween: 20 },
                1200: { slidesPerView: 1, spaceBetween: 40 },
              }}
            >
              {testimonialdata &&
                testimonialdata.map((item, index) => (
                  <SwiperSlide className="relative" key={index}>
                    <div className="relative pt-0 text-center testimonial_content Alata xl:pt-20 md:pt-20">
                      {/* Testimonial Text */}
                      <div
                        className="text-white py-10 Alata xl:text-[1.25rem] text-[1.1rem] xl:leading-[2rem]"
                        dangerouslySetInnerHTML={{
                          __html: item?.attributes?.Comment,
                        }}
                      ></div>
                      <svg
                        style={{ margin: "0 auto" }}
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_116_958)">
                          <path
                            d="M7.4044 2.55664C7.38617 2.56575 7.31325 2.64779 7.18565 2.80273C7.06716 2.94857 6.87347 3.1901 6.60459 3.52734C6.33571 3.86458 5.98708 4.3112 5.55869 4.86719C5.12119 5.41406 4.58799 6.09766 3.95908 6.91797C3.49424 7.51042 3.05674 8.07096 2.64658 8.59961C2.24554 9.12826 1.89235 9.59082 1.58701 9.9873C1.28167 10.3838 1.03786 10.7005 0.855567 10.9375C0.673275 11.1745 0.582129 11.2975 0.582129 11.3066C0.573015 11.3704 0.577572 11.4297 0.595801 11.4844C0.61403 11.5391 0.645931 11.5938 0.691504 11.6484L0.787207 11.7305H14.336L14.4181 11.6348C14.4728 11.5801 14.5092 11.5163 14.5274 11.4434C14.5457 11.3704 14.5366 11.3066 14.5001 11.252C14.491 11.2155 14.1355 10.7461 13.4337 9.84375C12.7319 8.94141 11.964 7.95475 11.13 6.88379C10.296 5.81283 9.52809 4.83073 8.82627 3.9375C8.13356 3.04427 7.77809 2.5931 7.75986 2.58398C7.69606 2.54753 7.63454 2.52702 7.57529 2.52246C7.51605 2.5179 7.45908 2.5293 7.4044 2.55664Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_116_958">
                            <rect
                              width="14"
                              height="14"
                              fill="white"
                              transform="matrix(1 0 0 -1 0.542416 14)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      {/* User Name & Position */}
                      {item?.attributes?.Name && (
                        <h4 className="py-2 text-white xl:text-[1.1rem] text-[1rem] Alata">
                          {item?.attributes?.Name}
                        </h4>
                      )}

                      {item?.attributes?.Position && (
                        <h5 className="text-white Alata">
                          {item?.attributes?.Position}
                        </h5>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className="pt-10 md:pt-0 lg:absolute lg:w-[95%] xl:w-[75%]">
            <div className=" text-center  flex justify-center items-center lg:hidden ">
              <button
                className={`cust-swiper-button-prev5 cust-swiper-button-prev border-0 bg-transparent prev m-2`}
              >
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="54"
                    height="54"
                    rx="27"
                    transform="matrix(0 -1 -1 0 54 54)"
                    fill="#F4EBE2"
                  />
                  <g clip-path="url(#clip0_116_923)">
                    <path
                      d="M18.636 27.707C18.4485 27.5194 18.3432 27.2651 18.3432 27C18.3432 26.7348 18.4485 26.4805 18.636 26.293L24.293 20.636C24.3852 20.5405 24.4956 20.4643 24.6176 20.4119C24.7396 20.3595 24.8708 20.3319 25.0036 20.3307C25.1364 20.3296 25.268 20.3549 25.3909 20.4052C25.5138 20.4554 25.6255 20.5297 25.7194 20.6236C25.8133 20.7175 25.8875 20.8291 25.9378 20.952C25.9881 21.0749 26.0134 21.2066 26.0122 21.3394C26.0111 21.4722 25.9835 21.6034 25.9311 21.7254C25.8787 21.8474 25.8025 21.9577 25.707 22.05L21.757 26L35 26C35.2652 26 35.5196 26.1053 35.7071 26.2929C35.8946 26.4804 36 26.7348 36 27C36 27.2652 35.8946 27.5195 35.7071 27.7071C35.5196 27.8946 35.2652 28 35 28L21.757 28L25.707 31.95C25.8891 32.1386 25.9899 32.3912 25.9877 32.6534C25.9854 32.9156 25.8802 33.1664 25.6948 33.3518C25.5094 33.5372 25.2586 33.6424 24.9964 33.6447C24.7342 33.6469 24.4816 33.5461 24.293 33.364L18.636 27.707Z"
                      fill="#AD843E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_116_923">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="matrix(0 1 1 0 15 15)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              <button
                className={`cust-swiper-button-next5 cust-swiper-button-next border-0 bg-transparent next m-2`}
              >
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="54"
                    width="54"
                    height="54"
                    rx="27"
                    transform="rotate(-90 0 54)"
                    fill="#F4EBE2"
                  />
                  <g clip-path="url(#clip0_116_928)">
                    <path
                      d="M35.364 27.707C35.5515 27.5194 35.6568 27.2651 35.6568 27C35.6568 26.7348 35.5515 26.4805 35.364 26.293L29.707 20.636C29.6148 20.5405 29.5044 20.4643 29.3824 20.4119C29.2604 20.3595 29.1292 20.3319 28.9964 20.3307C28.8636 20.3296 28.732 20.3549 28.6091 20.4052C28.4862 20.4554 28.3745 20.5297 28.2806 20.6236C28.1867 20.7175 28.1125 20.8291 28.0622 20.952C28.0119 21.0749 27.9866 21.2066 27.9878 21.3394C27.9889 21.4722 28.0165 21.6034 28.0689 21.7254C28.1213 21.8474 28.1975 21.9577 28.293 22.05L32.243 26L19 26C18.7348 26 18.4804 26.1053 18.2929 26.2929C18.1054 26.4804 18 26.7348 18 27C18 27.2652 18.1054 27.5195 18.2929 27.7071C18.4804 27.8946 18.7348 28 19 28L32.243 28L28.293 31.95C28.1109 32.1386 28.0101 32.3912 28.0123 32.6534C28.0146 32.9156 28.1198 33.1664 28.3052 33.3518C28.4906 33.5372 28.7414 33.6424 29.0036 33.6447C29.2658 33.6469 29.5184 33.5461 29.707 33.364L35.364 27.707Z"
                      fill="#AD843E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_116_928">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="matrix(0 1 -1 0 39 15)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <div className=" swiper-nav hidden lg:block">
              <SwiperButton
                next={"cust-swiper-button-next5"}
                prev={"cust-swiper-button-prev5"}
              />
            </div>
          </div>
        </div>

        {/* <div className="xl:w-[15%] md:w-[18%] lg:w-[18%] w-[100%] block md:hidden ">
                <Buttons text={"View All"} />
            </div> */}
      </section>
    </div>
  );
};

export default HomeTestimonials;
