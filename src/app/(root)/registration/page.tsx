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
import RootContainer from "@/components/shared/RootContainer";
import Lottie from "lottie-react";
import regAnimate from "@/assets/lottie/reg/animation_lmxrs525.json";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  userType: string;
  picture: string;
  phone: any;
};

const Registration = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hoisting_token}`;
  // console.log(img_hosting_url);

  const { createUser, updateUserProfile }: any = useAuth();

  const [error, setError] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { password, confirm_password, email, name, phone, picture } = data;
    if (password !== confirm_password) {
      setError("Password not Matched");
      return;
    } else if (password.length < 6) {
      setError("Password must be contain 6 characters");
      return;
    }
  };

  return (
    <div className=" bg-slate-400 dark:bg-multi-paragraph">
      <RootContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 py-8">
          <div className=" hidden lg:block">
            {/* <Image
              className="w-[800px] h-[800px]"
              src={img}
              alt="registration"
            /> */}

            <Lottie animationData={regAnimate} loop={true} />
          </div>
          <div className="border px-4 bg-multi-icon-bg rounded-lg w-full max-w-lg bg-opacity-80 backdrop-blur-md">
            <h1 className="text-3xl font-bold text-center my-6">Get Started</h1>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">
                      First name <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">
                      Last name <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">
                    Email <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">
                      Password <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Password"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">
                      Confirm Password <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Confirm Password"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">
                      Please select type <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <select className="select select-bordered">
                    <option selected>Seller</option>
                    <option>Buyer</option>
                  </select>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">
                      Pick Profile Picture{" "}
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="btn w-full border-none my-8">
                  Register
                </button>
              </div>
            </form>
            <div>
              <p className="my-4">
                Already Have an Account?
                <Link href="/login" className="text-blue-800 underline">
                  Login Here
                </Link>
              </p>
              <SocialLogin />
            </div>
          </div>
        </div>
      </RootContainer>
    </div>
  );
};

export default Registration;
