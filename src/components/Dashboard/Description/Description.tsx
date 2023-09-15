"use client"
import SimpleBtn from '@/components/shared/btn/SimpleBtn';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';


type Inputs = {
    description: string
}

const Description = () => {
    
 

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-6 w-full lg:w-[1000px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description / Bio</label>
                <textarea {...register("description")} maxLength={1200} className="bg-gray-50 border h-[220px] lg:h-[250px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hey, this is my rahim, so I have to say something about myself. Sometimes it is hard to introduce yourself because you know yourself so well that you do not know where to start with. Let me give a try to see what kind of image you have about me through my self-description. I hope that my impression about myself and your impression about me are not so different. Here it goes." required />
                <SimpleBtn className='my-5'>
                    <input className='' type="submit" value="Update Bio / Description" />
                </SimpleBtn>
            </form>

        </div>
    );
};

export default Description;