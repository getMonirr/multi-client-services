"use client";
import Update_profile_sidebar from "@/components/Dashboard/Update_profile_sidebar/Update_profile_sidebar";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  title: string;
  role: string;
  startingDate: string;
  endingDate: string;
  projectURL: string;
  githubCode: string;
  description: string;
};

const Update_portfolio = () => {
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
    if (userData._id) {
      axios
        .patch(`/api/users/${userData._id}`, {
          portfolios: [
            {
              title: data.title,
              description: data.description,
              links: data.projectURL,
              startingDate: data.startingDate,
              endingDate: data.endingDate,
              role: data.role,
              githubCode: data.githubCode,
            },
          ],
        })
        .then((result) => {
          console.log(result.status);
        });
    }
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

      <div className="lg:flex gap-8 lg:gap-20">
        <div>
          <Update_profile_sidebar />
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:w-[400px]">
              {/* Personal information like name, email, contact number */}
              <h1 className="text-3xl font-bold my-8">Some Works on Project</h1>
              <div className="lg:flex  gap-8 lg:gap-20 w-full  lg:w-[1000px]">
                <div className="mb-6 w-full lg:w-[500px]">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Project Title
                  </label>
                  <input
                    {...register("title")}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Multi Client offering website"
                    required
                  />
                </div>
                <div className="mb-6 w-full lg:w-[500px]">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Role
                  </label>
                  <input
                    {...register("role")}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="As Front-end Engineer"
                    required
                  />
                </div>
              </div>
              <div className="lg:flex  gap-8 lg:gap-20 w-full  lg:w-[1000px]">
                <div className="mb-6 w-full lg:w-[500px]">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Project URL
                  </label>
                  <input
                    {...register("projectURL")}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="www.google.com"
                    required
                  />
                </div>
                <div className="mb-6 w-full lg:w-[500px]">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Github Code
                  </label>
                  <input
                    {...register("githubCode")}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="https://github.com/multi..."
                    required
                  />
                </div>
              </div>

              <div className="lg:flex  gap-8 lg:gap-20 w-full  lg:w-[1000px]">
                <div className="mb-6 w-full lg:w-[500px]">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Starting Date
                  </label>
                  <input
                    {...register("startingDate")}
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="xyz@mail.com"
                    required
                  />
                </div>
                <div className="mb-6 w-full lg:w-[500px]">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ending Date
                  </label>
                  <input
                    {...register("endingDate")}
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+880 171xxxxxxxx"
                    required
                  />
                </div>
              </div>
              <div className="w-full  lg:w-[1000px] my-6 ">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  className="bg-gray-50 border h-[200px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name=""
                  id=""
                ></textarea>
              </div>

              <SimpleBtn>
                <input
                  className="text-white"
                  type="submit"
                  value="Add Portfolio"
                />
              </SimpleBtn>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update_portfolio;
