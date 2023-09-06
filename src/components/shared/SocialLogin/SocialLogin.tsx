"use client";
import useAuth from "@/hooks/useAuth";
import React from "react";
import google from "../../../assets/google.png";
import Image from "next/image";
import github from "../../../assets/github.png";

const SocialLogin = ({
  handleGoogleLogin,
  handleGithubLogin,
}: {
  handleGoogleLogin?: () => void;
  handleGithubLogin?: () => void;
}) => {
  // const { googleSignIn, githubSignIn }: any = useAuth()
  // const handleGoogleLogin = () => {
  //     googleSignIn()
  //         .then((result: any) => {
  //             const user = result.user;
  //             console.log(user);
  //         })
  // }

  // const handleGithubLogin = () => {
  //     githubSignIn()
  //         .then((result: any) => {
  //             const user = result.user;
  //             console.log(user);
  //         })
  // }

  return (
    <div>
      <div className="divider">OR</div>
      <div className="">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center border border-gray-400 px-8 my-4 w-full rounded-md py-1 gap-4"
        >
          {/* sign in with goole */}
          <Image className="w-[32px]" src={google} alt="" />
          <p>Continue With Google</p>
        </button>
        <button
          onClick={handleGithubLogin}
          className="flex items-center border justify-center border-gray-400 px-8 my-4 w-full rounded-md py-1 gap-4 "
        >
          {/* sign in with github */}
          <Image className="w-[40px]" src={github} alt="" />
          <p>Continue With GitHub</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
