"use client";
import React, { useState } from "react";
import img from "../../../assets/signup.jpg";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import SocialLogin from "@/components/shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { img_hoisting_token } from "../../../../env";
import getImgUrl from "@/utils/getImgUrl";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm_password: string;
  userType: string;
  picture: string;
  phone: any;
};

const Registration = () => {
  // const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hoisting_token}`;
  // console.log(img_hosting_url);

  const { createUser, updateUserProfile }: any = useAuth();

  const [error, setError] = useState<string>();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    Swal.showLoading();
    const {
      password,
      confirm_password,
      email,
      firstName,
      lastName,
      phone,
      picture,
      userType,
    } = data;
    // verify password
    if (password !== confirm_password) {
      setError("Password not Matched");
      return;
    } else if (password.length < 6) {
      setError("Password must be contain 6 characters");
      return;
    }

    try {
      // get img url
      const imgUrl = await getImgUrl(picture[0]);
      // const imgUrl = "https://";
      const newUser = {
        name: {
          firstName,
          lastName,
        },
        email,
        password,
        profilePicture: imgUrl,
        role: userType.toLowerCase(),
        username: email.split("@")[0],
        phone,
      };

      // save new user in database
      const result = await axios.post("/api/users", newUser);

      if (result?.data?.success) {
        Swal.hideLoading();
        Swal.fire("success", "please login with email and password");
        router.push("/login");
      }
    } catch (error: any) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.data?.error || "Something went wrong!",
      });
    }
  };

  return (
    <div>
      <div className="my-40 container mx-auto flex justify-around">
        <Image className="w-[800px] h-[800px]" src={img} alt="" />

        <div className="border p-10">
          <h1 className="text-3xl font-bold my-6">Get Started</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-4">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  {...register("firstName", { required: true })}
                  type="text"
                  name="firstName"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  First Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  {...register("lastName", { required: true })}
                  type="text"
                  name="lastName"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Last Name
                </label>
              </div>
            </div>

            <span className="text-sm text-gray-500">
              Upload Profile Picture
            </span>
            <div className="flex items-center my-4 gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  {...register("picture", { required: true })}
                  type="file"
                  className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-gray-700
      hover:file:bg-violet-100
    "
                />
              </label>
            </div>
            <div className="relative z-0 w-[420px] mb-6 group">
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-0 w-[420px] mb-6 group">
              <input
                {...register("phone")}
                type="number"
                name="number"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Phone Number
              </label>
            </div>
            <div className="flex gap-4">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Password
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  {...register("confirm_password", { required: true })}
                  name="confirm_password"
                  type="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Confirm Password
                </label>
              </div>
            </div>
            <div className="flex my-4 gap-10 items-center">
              <select
                {...register("userType", { required: true })}
                className="w-full bg-gray-50 p-3"
                name="userType"
              >
                <option value="Seller">Seller</option>
                <option value="Buyer">Buyer</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn w-full">
                Continue
              </button>
            </div>
            {error ? (
              <p className="text-red-500 mt-4 flex animate-pulse">
                {error}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </p>
            ) : (
              ""
            )}
            <p className="my-4">
              Already Have an Account?{" "}
              <Link href="/login" className="text-gray-500 underline">
                Login Here
              </Link>{" "}
            </p>
            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
