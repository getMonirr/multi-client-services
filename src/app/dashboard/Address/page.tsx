"use client";
import Update_profile_sidebar from "@/components/Dashboard/Update_profile_sidebar/Update_profile_sidebar";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import React from "react";
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
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="mt-8">
      <h1 className="text-4xl font-semibold text-black">
        Update Your Information
      </h1>
      <p className="text-gray-500 my-4">
        Here you can edit public information about yourself <br /> The Changes
        will be displayed for other users within 5 minutes
      </p>
      <div className="lg:flex gap-20">
        <div>
          <Update_profile_sidebar />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          {/* Addresses : village, city, country , postal code */}
          <h1 className="text-3xl font-bold my-8">Address</h1>
          <div className="lg:flex gap-8 lg:gap-20 w-full lg:w-[1000px]">
            <div className="mb-6 w-full lg:w-[500px]">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Street
              </label>
              <input
                {...register("street")}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Kachukhet"
                required
              />
            </div>
            <div className="mb-6 w-full lg:w-[500px]">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                City
              </label>
              <input
                {...register("city")}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Dhaka"
                required
              />
            </div>
          </div>
          <div className="lg:flex gap-8 lg:gap-20 w-full lg:w-[1000px]">
            <div className="mb-6 w-full lg:w-[500px]">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Postal Code
              </label>
              <input
                {...register("postal_code")}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="1206.."
                required
              />
            </div>
            <div className="mb-6 w-full lg:w-[500px]">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Country
              </label>
              <input
                {...register("country")}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Bangladesh"
                required
              />
            </div>
          </div>
          <SimpleBtn>
            <input
              className="text-white"
              type="submit"
              value="Update Personal Information"
            />
          </SimpleBtn>
        </form>
      </div>
    </div>
  );
};

export default Page;
