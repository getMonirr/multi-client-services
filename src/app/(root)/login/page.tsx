"use client"
import useAuth from '@/hooks/useAuth';
import img from '../../../assets/login.png'
import Image from 'next/image';
import Link from 'next/link';

import { useForm, SubmitHandler } from "react-hook-form"
import Swal from 'sweetalert2';

type Inputs = {
    email: string
    password: string
}


const Login = () => {

    const { signIn }: any = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const { email, password } = data;
        signIn(email, password)
        .then((result: any) => {
            if(result.user){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }

        })
    }



    return (
        <div className='my-40 container mx-auto flex justify-around'>
            <Image src={img} alt='' />

            <div className='border p-10'>
                <h1 className='text-3xl font-bold my-6'>Login Now</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative z-0 w-[420px] mb-6 group">
                        <input {...register("email")} type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-orange-900 bg-transparent border-0 border-b-2 border-orange-300 appearance-none dark:text-white dark:border-orange-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-orange-500 dark:text-orange-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-[420px] mb-6 group">
                        <input {...register("password")} type="password" name="password" className="block py-2.5 px-0 w-full text-sm text-orange-900 bg-transparent border-0 border-b-2 border-orange-300 appearance-none dark:text-white dark:border-orange-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-orange-500 dark:text-orange-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className='btn w-full'>Continue</button>
                    </div>
                    <Link href={'/reset_password'} className=' text-orange-500 underline mt-4'>Reset Password</Link>
                    <p className='my-4'>Dont Have an Account? <Link href="/registration" className='text-orange-500 underline'>Get Started</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;