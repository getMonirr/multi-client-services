import SimpleBtn from '@/components/shared/btn/SimpleBtn';
import React from 'react';

const Work_exp = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Job Details</h1>
            <form>
                <form className="mb-6 w-[1000px]">
                    <div className='flex gap-10 my-6'>
                        <div className='w-[500px]'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                            <input type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Stack Engineer" required />
                        </div>
                        <div className='w-[500px]'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                            <input type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Google" required />
                        </div>
                    </div>
                    <div className='flex gap-10 my-6'>
                        <div className='w-[500px]'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date </label>
                            <input type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Stack Engineer" required />
                        </div>
                        <div className='w-[500px]'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                            <input type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Google" required />
                        </div>
                    </div>
                    <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</label>
                    <textarea  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-[100px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="As Full stack engineer at this company. I feel  ......" required />
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