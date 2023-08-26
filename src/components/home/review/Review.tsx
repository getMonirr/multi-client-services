"use client";
// import review data
import { recentReview } from "@/constant/Constant";

// import image attribiute in next image
import Image from "next/image";

// import react ratings
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// import section title setup
import SectionStarter from "@/components/shared/SectionStarter";

// import review contain
import { ReviewTitle } from "@/constant/Constant";

// import moment component
import moment from "moment";

// import swiper slider component
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import RootContainer from "@/components/shared/RootContainer";

const Review = () => {
//   console.log(moment().startOf("day").from("1985"));
  const { title } = ReviewTitle;
  return (
    <RootContainer>
      <SectionStarter title={title} description="Peoples love" />
      <Swiper
        autoplay
        modules={[Autoplay]}
        slidesPerView={2.2}
        className=" mb-20 md:w-3/4 "
      >
        {recentReview.map((data) => (
          <SwiperSlide
            className=" p-10 border rounded-3xl mr-10 bg-multi-icon-bg"
            key={data.id}
          >
            <div className=" flex gap-4  h-56 py-10">
              <div className="w-48   flex justify-center items-center ">
                <Image
                  src={data.image}
                  alt="Vercel Logo"
                  className="h-[100px] rounded-full"
                  width={100}
                  height={100}
                  priority
                />
              </div>
              <div>
                <h2 className="font-bold text-2xl">{data.client_name}</h2>
                <div className="flex gap-4 my-2">
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={Math.floor(data.rating)}
                    readOnly
                  />
                  <p>{moment(`${data.date}`).fromNow()}</p>
                </div>
                <p className="pt-6">{data.comment}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </RootContainer>
  );
};

export default Review;
