import SimpleBtn from '@/components/shared/btn/SimpleBtn';
import React from 'react';

const Education = () => {
    return (
        <form>
            <div className='flex gap-10 my-6'>
                <div className='w-[500px]'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">University / College Name</label>
                    <input type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bangladesh university of engineering and technology" required />
                </div>
                <div className='w-[500px]'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                    <input type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gazipur, Dhaka" required />
                </div>
            </div>
            <div className='flex gap-10 my-6'>
                <div className='w-[500px]'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                    <input type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
                <div className='w-[500px]'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Graduate Date</label>
                    <input type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
            </div>
            <div className='flex gap-10 my-6'>
                <div className='w-[500px]'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Degree</label>
                    <input type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="M.A / B.A ..." required />
                </div>
                <div className='w-[500px]'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area of study</label>
                    <input type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Computer science and engineering" required />
                </div>
            </div>
            <SimpleBtn>
                <input type="submit" value="Update Education" />
            </SimpleBtn>
        </form>
    );
};

export default Education;