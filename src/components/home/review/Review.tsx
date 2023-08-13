"use client";

import {recentReview} from "@/constant/Constant"
import Image from 'next/image';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import SectionStarter from '@/components/shared/SectionStarter';
import {ReviewTitle} from "@/constant/Constant"


const Review = () => {
    const {title} = ReviewTitle
    return (
        <div>
        <SectionStarter title={title} description=""/>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-6 '>
            {
                recentReview.map((data) => (<div 
                className='border py-16 rounded-2xl shadow-2xl flex gap-6 ' 
                key={data.id}>
                    <div className='w-48   flex justify-center items-center '>
                    <Image
                        src={data.image}
                        alt="Vercel Logo"
                        className='h-[100px] rounded-full'
                        width={100}
                        height={100}
                        priority
                    />
                    </div>
                    <div>
                        <h2 className='font-bold text-2xl'>{data.client_name}</h2>
                        <div className='flex gap-4 my-2'>
                        <Rating
                        style={{ maxWidth: 120 }}
                        value={Math.floor(data.rating)}
                        readOnly
                        />
                        <p>{data.date}</p>
                        </div>
                        <p>{data.comment}</p>
                    </div>
                </div>))
            }

        </div>
        </div>
    );
};

export default Review;