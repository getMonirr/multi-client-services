import React from 'react';
import './style.css'
import Image from 'next/image';
import user_img from '../../../assets/user.jpg'

const Account_setting = () => {






    return (
        <div className='mt-4'>
            <h1 className='text-4xl font-semibold text-black'>Update your Profile</h1>
            <p className='text-gray-500 my-4'>Here you can edit public information about yourself <br />  The Changes will be displayed for other users within 5 minutes</p>

            <div>
                <form className='flex gap-20'>

                    <div>
                        <div className='mt-4'>
                            <label htmlFor="email">Email Address</label>
                            <input placeholder='xyz@mail.com' className='block border px-2 mt-2 w-[500px] h-[38px] text-lg' type="email" name="email" />
                        </div>
                        <div className='flex gap-10 mt-4'>
                            <div >
                                <label htmlFor="email">First Name</label>
                                <input placeholder='John' className='block border px-2 mt-2 w-[230px] h-[38px] text-lg' type="email" name="email" />
                            </div>
                            <div>
                                <label htmlFor="email">Last Name</label>
                                <input placeholder='Doe' className='block border px-2 mt-2 w-[230px] h-[38px] text-lg' type="email" name="email" />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="email">Phone Number</label>
                            <input placeholder='+880 15xxxxxxxx' className='block border px-2 mt-2 w-[500px] h-[38px] text-lg' type="number" name="phone" />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="email">Present Address</label>
                            <input placeholder='207/3 New York, USA' className='block border px-2 mt-2 w-[500px] h-[38px] text-lg' type="email" name="email" />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="email">Permanent Address</label>
                            <input placeholder='Amana Colonies 1008, USA' className='block border px-2 mt-2 w-[500px] h-[38px] text-lg' type="email" name="email" />
                        </div>
                    </div>
                    {/* Upload Image */}
                    <div>
                        <div className='flex justify-center'>
                            <Image alt='' className='w-[150px] h-[150px] rounded-full' src={user_img} />
                        </div>
                        <div>
                            <input accept="image/*" className=' file-input file-input-bordered  w-[300px] border' type="file" name="upload_img" placeholder='Hello' id="upload_img" />


                        </div>
                    <div className='mt-4'>
                        <label htmlFor="email">Description</label>
                        <textarea placeholder='...' className='block border px-2 mt-2 w-[500px] h-[100px] text-lg' />
                    </div>
                    </div>


                </form>
            </div >
        </div >
    );
};

export default Account_setting;