import SimpleBtn from '@/components/shared/btn/SimpleBtn';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    role: string
    company: string
    startDate: string
    endingDate: string
    shortDescription: string
    location: string
}

const Work_exp = () => {
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
            <h1 className='text-2xl font-bold'>Job Details</h1>
            <form>
                <form className="mb-6 w-full lg:w-[1000px]">
                    <div className='lg:flex gap-10 my-6'>
                        <div className='w-full lg:w-[500px]'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                            <input {...register("role")} type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Stack Engineer" required />
                        </div>
                        <div className='w-full lg:w-[500px]'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                            <input {...register("company")} type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Google" required />
                        </div>
                    </div>
                    <div className='lg:flex gap-10 my-6'>
                        <div className='w-full lg:w-[500px]'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date </label>
                            <input {...register("startDate")} type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Stack Engineer" required />
                        </div>
                        <div className='w-full lg:w-[500px]'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                            <input {...register("endingDate")} type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Google" required />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</label>
                        <textarea {...register("shortDescription")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-[100px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="As Full stack engineer at this company. I feel  ......" required />
                    </div>
                    <SimpleBtn className='my-5'>
                        <input className='' type="submit" value="Update Work Experience" />
                    </SimpleBtn>
                </form>
            </form>
        </div>
    );
};

export default Work_exp;