import Link from 'next/link';
import React from 'react';

const Update_profile_sidebar = () => {
    return (
        <div className='border w-[300px] bg-blue-50 p-10'>
            <h1 className='text-2xl font-bold my-6'>Edit Profile</h1>
            <Link className='text-[19px] block mt-3' href="/dashboard/update_profile">General </Link>
            <Link className='text-[19px] block mt-3' href="">Security</Link>
            <Link className='text-[19px] block mt-3' href="/dashboard/Update_portfolio">Portfolio</Link>
            <Link className='text-[19px] block mt-3' href="">Description</Link>
            <Link className='text-[19px] block mt-3' href="">Work Experience</Link>
            <Link className='text-[19px] block mt-3' href="">Build Resume</Link>
        </div>
    );
};

export default Update_profile_sidebar;