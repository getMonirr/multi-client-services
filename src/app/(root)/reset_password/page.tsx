"use client"
import useAuth from '@/hooks/useAuth';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


type Inputs = {
    email: string
}


const Reset_password = () => {
    const { reset_password }: any = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const { email } = data;
        console.log(email);
        reset_password(email)
        .then(() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Please Check your Email to reset password',
                showConfirmButton: false,
                timer: 1500
              })
        })
    }

    return (
        <div className='my-40'>
            <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
                <h1 className='text-3xl font-bold'>If you dont remember your  Password</h1>
                <p>Then Provide us your email here</p>
                <input {...register("email")} required placeholder='Enter Email Address' className='border  px-2 w-[500px] py-3 my-6' type="email" name="email" id="email" />
                <div className='flex justify-center items-center'>
                    <button type='submit' className='block btn w-[500px]'>Forgot</button>
                </div>
            </form>
        </div>
    );
};

export default Reset_password;