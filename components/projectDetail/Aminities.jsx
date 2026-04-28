import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Grid } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import { cleanImage } from "../imageHandling";
import { fadeIn } from "../common/Animation";
import { useState } from "react";

export default function AmenitiesSlider({ AmenitiesData }) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className="relative xl:h-[650px] h-auto text-white py-10">
      {/* Background */}
      <div className="absolute top-0 w-full h-full left-0 z-0">
        <Image
          src={"/Images/Home/counter.png"}
          className="h-full w-full object-cover"
          height={2000}
          width={2000}
          alt="Background"
        />
      </div>

      {/* Title Section */}
      <div className="relative flex justify-center items-center ">
        <div className="xl:text-[5rem] flex gap-2 xl:py-5 justify-center  text-center lg:text-[4rem] text-[1.8rem] capitalize font-[500] AriensNobela">
          <motion.div
            //  ref={ref}
            data-splitting=""
            variants={fadeIn("left", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span className="text-secondary-color">Project </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 2"
              fill="none"
            >
              <path d="M0 1H200" stroke="white" />
            </svg>
          </motion.div>
          <span className="text-white ">Amenities</span>
        </div>
      </div>

      {/* Amenities Swiper */}
      <div className="w-full overflow-hidden mx-auto xl:pt-20 lg:pt-10 xl:my-0 my-20">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={5} // Default for desktop
          slidesPerGroup={1} // Move one slide (amenity) at a time
          speed={1200}
          onReachBeginning={() => setIsBeginning(true)}
          onReachEnd={() => setIsEnd(true)}
          onSlideChange={({ isBeginning, isEnd }) => {
            setIsBeginning(isBeginning);
            setIsEnd(isEnd);
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next-custom-amn",
            prevEl: ".swiper-button-prev-custom-amn",
          }}
          loop
          breakpoints={{
            // For mobile/tablet
            0: {
              slidesPerView: 2,
            },
            765: {
              slidesPerView: 3,
            },
            // For desktop
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {AmenitiesData.amenities.data.map((amenity) => (
            <SwiperSlide key={amenity.id}>
              <motion.div
                className="flex flex-col items-center text-center xl:p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-secondary-color p-6 shadow-lg hover:bg-primary-color transition-all rounded-full">
                  <Image
                    src={cleanImage(
                      amenity.attributes.icon.data.attributes.url
                    )}
                    className="h-[4rem] w-[4rem] invert"
                    height={100}
                    width={100}
                    alt={amenity.attributes.Title}
                  />
                </div>
                <p className="xl:text-[1.3rem] text-[1rem] xl:w-[75%] w-full font-[400] Atala mt-4">
                  {amenity.attributes.Title}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative py-10">
        <div className="flex gap-4 justify-center ">
          <button
            disabled={isBeginning}
            className={`flex ${
              isBeginning ? "  bg-SnowWhite bg-opacity-40" : "bg-SnowWhite"
            }  rounded-full swiper-button-prev-custom-amn xl:h-[3.75rem] xl:w-[3.75rem] h-[3rem] w-[3rem] justify-center items-center cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_823_209)">
                <path
                  d="M3.63605 12.707C3.44858 12.5194 3.34326 12.2651 3.34326 12C3.34326 11.7348 3.44858 11.4805 3.63605 11.293L9.29305 5.63598C9.3853 5.54047 9.49564 5.46428 9.61764 5.41188C9.73965 5.35947 9.87087 5.33188 10.0036 5.33073C10.1364 5.32957 10.2681 5.35487 10.391 5.40516C10.5139 5.45544 10.6256 5.52969 10.7194 5.62358C10.8133 5.71747 10.8876 5.82913 10.9379 5.95202C10.9882 6.07492 11.0135 6.2066 11.0123 6.33938C11.0111 6.47216 10.9836 6.60338 10.9311 6.72538C10.8787 6.84739 10.8026 6.95773 10.707 7.04998L6.75705 11L20 11C20.2653 11 20.5196 11.1053 20.7072 11.2929C20.8947 11.4804 21 11.7348 21 12C21 12.2652 20.8947 12.5195 20.7072 12.7071C20.5196 12.8946 20.2653 13 20 13L6.75705 13L10.707 16.95C10.8892 17.1386 10.99 17.3912 10.9877 17.6534C10.9854 17.9156 10.8803 18.1664 10.6949 18.3518C10.5095 18.5372 10.2586 18.6424 9.99645 18.6447C9.73425 18.6469 9.48165 18.5461 9.29305 18.364L3.63605 12.707Z"
                  fill="#AD843E"
                />
              </g>
              <defs>
                <clipPath id="clip0_823_209">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="matrix(0 1 1 0 0 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button
            disabled={isEnd}
            className={`flex  ${
              isEnd ? " bg-SnowWhite  bg-opacity-40" : "bg-SnowWhite"
            }  rounded-full swiper-button-next-custom-amn xl:h-[3.75rem] xl:w-[3.75rem] h-[3rem] w-[3rem] justify-center items-center cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_823_214)">
                <path
                  d="M20.364 12.707C20.5514 12.5194 20.6567 12.2651 20.6567 12C20.6567 11.7348 20.5514 11.4805 20.364 11.293L14.707 5.63598C14.6147 5.54047 14.5044 5.46428 14.3824 5.41188C14.2604 5.35947 14.1291 5.33188 13.9964 5.33073C13.8636 5.32957 13.7319 5.35487 13.609 5.40516C13.4861 5.45544 13.3744 5.52969 13.2806 5.62358C13.1867 5.71747 13.1124 5.82913 13.0621 5.95202C13.0118 6.07492 12.9865 6.2066 12.9877 6.33938C12.9889 6.47216 13.0164 6.60338 13.0689 6.72538C13.1213 6.84739 13.1974 6.95773 13.293 7.04998L17.243 11L3.99995 11C3.73474 11 3.48038 11.1053 3.29284 11.2929C3.10531 11.4804 2.99995 11.7348 2.99995 12C2.99995 12.2652 3.10531 12.5195 3.29284 12.7071C3.48038 12.8946 3.73474 13 3.99995 13L17.243 13L13.293 16.95C13.1108 17.1386 13.01 17.3912 13.0123 17.6534C13.0146 17.9156 13.1197 18.1664 13.3051 18.3518C13.4905 18.5372 13.7414 18.6424 14.0036 18.6447C14.2657 18.6469 14.5183 18.5461 14.707 18.364L20.364 12.707Z"
                  fill="#AD843E"
                />
              </g>
              <defs>
                <clipPath id="clip0_823_214">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="matrix(0 1 -1 0 24 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
