"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";



const JobSlider = ({ images }: { images: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as any
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="lg:h-[400px]"
      >

        {images &&
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="w-full h-full object-cover object-center"
                src={image}
              />
            </SwiperSlide>
          ))}

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="singleServiceSwiper"
      >
        {images &&
          images.map((image, index) => (
            <SwiperSlide className="w-full" key={index}>
              <img
                className="h-[150px] w-full object-cover object-center"
                src={image}
              />
            </SwiperSlide>
          ))}

      </Swiper>
    </>
  );
};

export default JobSlider;
