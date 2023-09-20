"use client";
import { useEffect, useState } from "react";

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
import useSWR from "swr";
import { fetcher } from "@/utils/swr/fetcher";

type SliderType = {
  _id: string;
  images: string[];
  category: string;
  title: string;
};

const PopularServices = () => {
  const { title, description } = popularServices;

  const { data: popularCategories } = useSWR(
    "/api/services?category='popular'",
    fetcher
  );

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
          {popularCategories?.data &&
            popularCategories?.data.map((slide: SliderType, index: number) => (
              <SwiperSlide key={index}>
                <SinglePopularService slide={slide} />
              </SwiperSlide>
            ))}
        </Swiper>
      </RootContainer>
    </div>
  );
};

export default PopularServices;
