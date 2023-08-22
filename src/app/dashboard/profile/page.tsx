import React from 'react';
import './style.css'
import Image from 'next/image';
import user_img from '../../../assets/user.jpg'
import Link from 'next/link';
import SimpleBtn from '@/components/shared/btn/SimpleBtn';

const Account_setting = () => {

    return (
        <div className='mt-4'>
            <h1 className='text-4xl font-semibold text-black'>Your Profile</h1>
            <p className='text-gray-500 my-4'>Here you can edit public information about yourself <br />  The Changes will be displayed for other users within 5 minutes</p>

            <div className='border p-6 w-[1440px]'>
                <div className='flex justify-between'>
                    <div className=''>
                        <Image className='w-[100px] border rounded-full' src={user_img} alt='' />
                        <h1 className='text-4xl my-3 font-bold'>Mehetaj Khandaker</h1>
                        <p className='text-gray-500 flex gap-2'> <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                        </span> Dhaka Cantonment , Bangladesh</p>
                        <p className='text-gray-500 mt-3 flex gap-2'> <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                            </svg>

                        </span> xyz@mail.com</p>
                    </div>
                    <div>
                            <Link className='btn' href="/dashboard/update_profile">Update Profile</Link>
                    </div>
                </div>
            </div>

            <div className='flex '>
                <div>
                    <div className='border p-6 w-[400px]'>
                        <h1 className='text-gray-500 text-lg underline my-4'>Description</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt saepe quos vel delectus provident atque ducimus! Nisi perspiciatis voluptatibus dolore aliquid ducimus! Eligendi alias porro explicabo odit, ad illum iure?</p>
                    </div>
                    <div className='border p-6 w-[400px]'>
                        <h1 className='text-gray-500 text-lg underline my-4'>Languages</h1>
                        <p>
                            Bangla - Native <br />
                            English - fluent <br />
                            Hindi - Conversional <br />
                        </p>
                    </div>
                    <div className='border p-6 w-[400px]'>
                        <h1 className='text-gray-500 text-lg underline my-4'>Linked Account</h1>
                        <p className='flex gap-4 underline text-blue-500'>
                            <span>Facebook</span>
                            <span>GutHub</span>
                            <span>LinkedIn</span>
                        </p>
                    </div>
                    <div className='border p-6 w-[400px]'>
                        <h1 className='text-gray-500 text-lg underline my-4'>Education</h1>
                        <p className=' gap-4'>
                            <p>BSC in Computer science</p>
                            <p>At Brac university</p>
                        </p>
                    </div>
                </div>
                <div className='border p-8 w-[1040px]'>
                    <h1 className='text-gray-500 text-lg underline my-4'>Portfolio</h1>
                    <div className='my-4'>
                        <h1 className='text-gray-500 text-3xl my-4'>Multi Client Website</h1>

                        <h1 className='text-gray-500 text-lg underline my-4'>Features</h1>
                        <p>1. Lorem ipsum dolor sit amet consectetur.</p>
                        <p>1. Lorem ipsum dolor sit amet consectetur.</p>
                        <p>1. Lorem ipsum dolor sit amet consectetur.</p>
                        <p>1. Lorem ipsum dolor sit amet consectetur.</p>
                        <p>1. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h1 className='text-gray-500 text-3xl my-4'>Multi Client Website</h1>

                        <h1 className='text-gray-500 text-lg underline my-4'>Features</h1>
                        <p>1. Lorem ipsum dolor sit amet consectetur.</p>
                        <p>1. Lorem ipsum dolor sit amet consectetur.</p>
                        <p>1. Lorem ipsum dolor sit amet consectetur.</p>
                        <p>1. Lorem ipsum dolor sit amet consectetur.</p>
                        <p>1. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <hr />

                    <div>
                        <h1 className='text-gray-500 text-lg underline my-4'>Skills</h1>
                        <p className='flex gap-7'>
                            <span>React.js</span>
                            <span>React.js</span>
                            <span>React.js</span>
                            <span>React.js</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 w-[1440px] lg:grid-cols-3'>
                <div className='border p-8'>
                    <h1 className='text-gray-500 text-lg underline my-4'>Certification</h1>
                    <p>Complete Web development course at programming Hero </p>
                </div>
                <div className='border p-8'>
                    <h1 className='text-gray-500 text-lg underline my-4'>Reviews</h1>
                    <p className='my-3'>John Doe: Wow, awesome work , I am satisfied</p>
                    <hr />
                    <p className='my-3'>John Doe: Wow, awesome work , I am satisfied</p>
                    <hr />
                </div>
                <div className='border p-8'>
                    <h1 className='text-gray-500 text-lg underline my-4'>Another Experience</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi cupiditate eos harum tempore cum, animi fuga hic. Perspiciatis nemo sint minus fugiat, pariatur deserunt minima vel rem quia odio totam.</p>
                </div>
            </div>
        </div >
    );
};

export default Account_setting;