"use client";
// import review data 
import {recentReview} from "@/constant/Constant"

// import image attribiute in next image 
import Image from 'next/image';

// import react ratings 
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

// import section title setup 
import SectionStarter from '@/components/shared/SectionStarter';

// import review contain 
import {ReviewTitle} from "@/constant/Constant"

// import moment component 
import moment from 'moment';

// import swiper slider component 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";



const Review = () => {
    console.log(moment().startOf('day').from("1985")) 
    const {title} = ReviewTitle
    return (
        <div>
        <SectionStarter title={title} description=""/>
        <Swiper 
        autoplay 
        modules={[Autoplay]} 
        breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            }
          }}
        className=" mb-20 md:w-5/6 w-full">
            {
                recentReview.map((data) => (
                <SwiperSlide className="  border rounded-3xl mr-10 bg-gray-300" key={data.id}>
                    <div  className=" flex gap-4  h-56 py-10">   
                    <div className='w-48 flex justify-center items-center mx-6'>
                    <Image
                        src={data.image}
                        alt="Vercel Logo"
                        className='h-[80px] w-[80px] rounded-full'
                        width={80}
                        height={80}
                        priority
                    />
                    </div>
                    <div className="pr-4">
                        <h2 className='font-bold text-2xl'>{data.client_name}</h2>
                        <div className='md:flex gap-4 my-2'>
                        <Rating
                        style={{ maxWidth: 120 }}
                        value={Math.floor(data.rating)}
                        readOnly
                        />
                        <p >{moment(`${data.date}`).fromNow()}</p>
                        </div>
                        <p className="pt-3">{data.comment}</p>
                    </div>
                </div>
                </SwiperSlide>
                ))
            }

        </Swiper>
        </div>
    );
};

export default Review;