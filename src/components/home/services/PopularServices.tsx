"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import SectionStarter from "@/components/shared/SectionStarter";
import {
  popularServices,
  popularServicesSliderContent,
} from "@/constant/Constant";
import RootContainer from "@/components/shared/RootContainer";
import SinglePopularService from "./SinglePopularService";

const PopularServices = () => {
  const { title, description } = popularServices;
  return (
    <div className="mb-8">
      <RootContainer>
        <SectionStarter title={title} description={description} />

        {/* slider  */}
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {popularServicesSliderContent.map((slide) => (
            <SwiperSlide key={slide.title}>
              <SinglePopularService slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </RootContainer>
    </div>
  );
};

export default PopularServices;
