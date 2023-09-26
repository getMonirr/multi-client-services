"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import SingleSlider from "./SingleSlider";
import { sliderContent } from "@/constant/Constant";

const Banner = () => {
  return (
    <div className="dark:bg-gray-900">
      <Swiper
        autoplay
        modules={[Autoplay, Pagination, EffectFade]}
        pagination={{ clickable: true }}
        effect={"fade"}
        className="banner-slider"
      >
        {sliderContent.map((slide) => (
          <SwiperSlide key={slide.title}>
            <SingleSlider slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
