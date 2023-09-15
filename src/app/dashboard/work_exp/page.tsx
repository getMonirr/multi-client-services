"use client";
import React from "react";
import Update_profile_sidebar from "@/components/Dashboard/Update_profile_sidebar/Update_profile_sidebar";
import Work_exp from "@/components/Dashboard/Work_exp/Work_exp";
import Courses from "@/components/Dashboard/Courses/Courses";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
  street: string;
  city: string;
  postal_code: string;
  country: string;
};
const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-semibold text-black">
        Update Your Information
      </h1>
      <p className="text-gray-500 my-4">
        Here you can edit public information about yourself <br /> The Changes
        will be displayed for other users within 5 minutes
      </p>
      <div className="lg:flex gap-8 lg:gap-20">
        <div>
          <Update_profile_sidebar />
        </div>
        <div>
          <Work_exp />
          <Courses />
        </div>
      </div>
    </div>
  );
};

export default Page;
