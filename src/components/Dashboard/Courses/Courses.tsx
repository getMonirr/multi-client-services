import SimpleBtn from '@/components/shared/btn/SimpleBtn';
import React from 'react';

const Courses = () => {
    return (
        <div className='my-16'>
            <h1 className='text-2xl font-bold'>Training or Courses</h1>
            <form>
                <div className='flex gap-10 my-6'>
                    <div className='w-[500px]'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Program </label>
                        <input type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Web development" required />
                    </div>
                    <div className='w-[500px]'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization</label>
                        <input type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Programming Hero" required />
                    </div>
                </div>
                <div className='flex gap-10 my-6'>
                    <div className='w-[500px]'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date </label>
                        <input type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Web development" required />
                    </div>
                    <div className='w-[500px]'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ending Date</label>
                        <input type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Programming Hero" required />
                    </div>
                </div>
                <SimpleBtn>
                    <input type="submit" value="Update Training/Courses" />
                </SimpleBtn>
            </form>
        </div>
    );
};

export default Courses;