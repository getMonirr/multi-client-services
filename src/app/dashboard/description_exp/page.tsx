import Description from '@/components/Dashboard/Description/Description';
import Update_profile_sidebar from '@/components/Dashboard/Update_profile_sidebar/Update_profile_sidebar';
import React from 'react';

const page = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-semibold text-black'>Update Your Information</h1>
            <p className='text-gray-500 my-4'>Here you can edit public information about yourself <br />  The Changes will be displayed for other users within 5 minutes</p>
            <div className='lg:flex lg:gap-20'>
                <div>
                    <Update_profile_sidebar />
                </div>
                <div>
                    <Description />
                </div>
            </div>
        </div>
    );
};

export default page;