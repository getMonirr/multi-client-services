"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import SingleSlider from "./SingleSlider";
import { sliderContent } from "@/constant/Constant";

const Banner = () => {
  return (
    <>
      <Swiper autoplay modules={[Autoplay]}>
        {sliderContent.map((slide) => (
          <SwiperSlide key={slide.title}>
            <SingleSlider slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
