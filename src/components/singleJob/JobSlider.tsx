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
import Image from "next/image";

const JobSlider = ({jobData}: {jobData:any}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  console.log(jobData)
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
        {
          jobData?.images?.map((img:string, i:number) =>
            <SwiperSlide key={i}>
          <Image 
          src={`${img}`}
          alt="gig pic" />
        </SwiperSlide>
            )
        }
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          jobData?.images?.map((img:string, i:number) =>
            <SwiperSlide key={i}>
          <Image 
          src={`${img}`}
          alt="gig pic" />
        </SwiperSlide>
            )
        }
      </Swiper>
    </>
  );
};

export default JobSlider;
