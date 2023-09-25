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
import getImgUrl from "@/utils/getImgUrl";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm_password: string;
  userType: string;
  picture: string;
};

const Registration = () => {
  const [error, setError] = useState<string>();

  // router
  const router = useRouter();

  // handleGoogleSignIn
  const handleGoogleSignIn: () => void = () => {
    const result = signIn("google", { redirect: true, callbackUrl: "/" });
    console.log({ result });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const {
      password,
      confirm_password,
      email,
      picture,
      firstName,
      lastName,
      userType,
    } = data;
    if (password !== confirm_password) {
      setError("Password not Matched, Password must be 6 char long");
      return;
    } else if (password.length < 6) {
      setError("Password must be contain 6 characters");
      return;
    }

    // get image url from imgBB
    const imgUrl = await getImgUrl(picture[0]);

    // create new user
    const newUser = {
      name: {
        firstName,
        lastName,
      },
      email,
      username: email.split("@")[0],
      password,
      profilePicture: imgUrl,
      role: userType.toLocaleLowerCase(),
    };

    // post uer in database
    const { data: result } = await axios.post(`/api/users`, newUser);

    if (result.success) {
      Swal.fire("Registration successful", "Please login now", "success");
      router.push(`/login`);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className=" bg-slate-400 dark:bg-multi-paragraph">
      <RootContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 py-8">
          <div className=" hidden lg:block">
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
                    {...register("firstName", { required: true })}
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
                    {...register("lastName", { required: true })}
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
                  {...register("email", { required: true })}
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
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="Enter your Password"
                    className="input input-bordered w-full"
                  />
                  <span className="text-xs">
                    {error ? error : "Password must be 6 char long"}
                  </span>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">
                      Confirm Password <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    {...register("confirm_password", { required: true })}
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered w-full"
                  />
                  {watch("confirm_password") !== watch("password") ? (
                    <span className="text-xs text-red-600">
                      Password does not match
                    </span>
                  ) : (
                    <span className="text-xs text-green-800">
                      Password Matched
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">
                      Please select type <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <select
                    className="select select-bordered"
                    {...register("userType", { required: true })}
                  >
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
                    {...register("picture", { required: true })}
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
              <SocialLogin handleGoogleLogin={handleGoogleSignIn} />
            </div>
          </div>
        </div>
      </RootContainer>
    </div>
  );
};

export default Registration;
