"use client";
import Update_profile_sidebar from "@/components/Dashboard/Update_profile_sidebar/Update_profile_sidebar";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduationStartYear: string;
  graduationEndYear: string;
  location: string;
};

const Education = () => {
  const session = useSession();
  const [userData, setUserData] = useState<any>();
  const email = session?.data?.user?.email;

  useEffect(() => {
    axios.get(`/api/users?email=${email}`).then((data) => {
      console.log(data.data.data);
      const main_data = data?.data?.data;
      setUserData(main_data);
    });
  }, [email]);

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    axios
      .patch(`/api/users/${userData._id}`, {
        educations: {
          institution: data.institution,
          degree: data.degree,
          fieldOfStudy: data.fieldOfStudy,
          graduationYear: data.graduationEndYear,
          location: data.location,
        },
      })
      .then((result) => {
        console.log(result);
      });
  };
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
        <div>
          <h1 className="text-2xl font-bold">Education</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:flex gap-10 my-6">
              <div className="w-full lg:w-[500px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  University / College Name
                </label>
                <input
                  {...register("institution")}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bangladesh university of engineering and technology"
                />
              </div>
              <div className="w-full lg:w-[500px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Location
                </label>
                <input
                  {...register("location")}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Gazipur, Dhaka"
                />
              </div>
            </div>
            <div className="lg:flex gap-10 my-6">
              <div className="w-full lg:w-[500px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Start Date
                </label>
                <input
                  {...register("graduationStartYear")}
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <div className="w-full lg:w-[500px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Graduate Date
                </label>
                <input
                  {...register("graduationEndYear")}
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
            </div>
            <div className="lg:flex gap-10 my-6">
              <div className="w-full lg:w-[500px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Degree
                </label>
                <input
                  {...register("degree")}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="M.A / B.A ..."
                />
              </div>
              <div className="w-full lg:w-[500px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Field of study
                </label>
                <input
                  {...register("fieldOfStudy")}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Computer science and engineering"
                />
              </div>
            </div>
            <SimpleBtn>
              <input type="submit" value="Update Education" />
            </SimpleBtn>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Education;
