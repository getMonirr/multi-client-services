"use client";
import Update_profile_sidebar from "@/components/Dashboard/Update_profile_sidebar/Update_profile_sidebar";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  description: string;
};

const DescriptionEXP = () => {
  const session = useSession();
  // const [userInfo, setUserInfo] = useState<any>({});
  // const [_id, set_Id] = useState("")
  const [userData, setUserData] = useState<any>();
  const email = session?.data?.user?.email;

  useEffect(() => {
    axios.get(`/api/users?email=${email}`).then((data) => {
      console.log(data.data.data);
      setUserData(data.data.data);
    });
  }, [email]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    axios
      .patch(`/api/users/${userData._id}`, {
        description: data.description,
      })
      .then((result) => {
        console.log(result);
      });
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
      <div className="lg:flex lg:gap-20">
        <div>
          <Update_profile_sidebar />
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-6 w-full lg:w-[1000px]"
          >
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description / Bio
            </label>
            <textarea
              defaultValue={
                userData?.description === undefined ? "" : userData.description
              }
              {...register("description")}
              maxLength={1200}
              className="bg-gray-50 border h-[220px] lg:h-[250px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Hey, this is my rahim, so I have to say something about myself. Sometimes it is hard to introduce yourself because you know yourself so well that you do not know where to start with. Let me give a try to see what kind of image you have about me through my self-description. I hope that my impression about myself and your impression about me are not so different. Here it goes."
              required
            />
            <SimpleBtn className="my-5">
              <input
                className=""
                type="submit"
                value="Update Bio / Description"
              />
            </SimpleBtn>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DescriptionEXP;
