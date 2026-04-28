"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const SwiperComponent = () => {
    const images = [
        '/Images/about/rightimg.png',
        '/Images/about/rightimg.png',
        '/Images/about/rightimg.png',
        '/Images/about/rightimg.png',
        '/Images/about/rightimg.png',
      ];
      
  return (
    <div className={"swiperContainer"}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={-80} // Overlapping effect
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Autoplay, EffectCoverflow]}
        className={"mySwiper"}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className={"swiperSlide"}>
            <img src={src} alt={`Slide ${index}`} className={"swiperImage"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
