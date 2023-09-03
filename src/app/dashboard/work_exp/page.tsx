import React from 'react';
import Update_profile_sidebar from '@/components/Dashboard/Update_profile_sidebar/Update_profile_sidebar';
import Work_exp from '@/components/Dashboard/Work_exp/Work_exp';
import Courses from '@/components/Dashboard/Courses/Courses';

const page = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-semibold text-black'>Update Your Information</h1>
            <p className='text-gray-500 my-4'>Here you can edit public information about yourself <br />  The Changes will be displayed for other users within 5 minutes</p>
            <div className='flex gap-20'>
                <div>
                    <Update_profile_sidebar />
                </div>
                <div>
                    <Work_exp />
                    <Courses />
                </div>
            </div>
        </div>
    );
};

export default page;