"use client";
import Update_profile_sidebar from "@/components/Dashboard/Update_profile_sidebar/Update_profile_sidebar";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import { useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";

const Update_profile = () => {
  const session = useSession();
  const [userInfo, setUserInfo] = useState<any>({});
  const email = session?.data?.user?.email;

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        if (email && data) {
          const filter: any = data.data.filter(
            (item: object | string | null | undefined | string[] | any) =>
              item?.email == email
          );
          // console.log(filter._id);
          setUserInfo(filter[0]);
        }
      });
  }, []);

  type Inputs = {
    firstName: string;
    lastName: string;
    phone: string;
  };
  const { register, reset, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    fetch(`/api/users?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="mt-8">
      <h1 className="text-4xl font-semibold text-black">
        Update Your Information
      </h1>
      <p className="text-gray-500 my-4">
        Here you can edit public information about yourself <br /> The Changes
        will be displayed for other users within 5 minutes
      </p>

      <div className="lg:flex gap-3 lg:gap-20">
        <div>
          <Update_profile_sidebar />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:flex gap-3 lg:gap-20"
        >
          <div className="lg:w-[400px]">
            {/* Personal information like name, email, contact number */}
            <h1 className="text-3xl font-bold my-8">Personal Information</h1>
            <div className="lg:flex  gap-3 lg:gap-20 w-full lg:w-[1000px]">
              <div className="mb-6 w-full lg:w-[500px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  {...register("firstName")}
                  required
                />
              </div>
              <div className="mb-6 w-full lg:w-[500px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last Name
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="lg:flex  gap-3 lg:gap-20 w-full lg:w-[1000px]">
              <div className="mb-6 w-full lg:w-[500px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email Address
                </label>
                <input
                  disabled
                  value={email}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="xyz@mail.com"
                  required
                />
              </div>
              <div className="mb-6 w-full lg:w-[500px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Contact Number
                </label>
                <input
                  {...register("phone")}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+880 171xxxxxxxx"
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update_profile;
