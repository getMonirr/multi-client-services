"use client";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  role: string;
  company: string;
  startDate: string;
  endingDate: string;
  shortDescription: string;
  location: string;
};

const Work_exp = () => {
  const session = useSession();

  // const [userInfo, setUserInfo] = useState<any>({});
  // const [_id, set_Id] = useState("")
  const [userData, setUserData] = useState<any>();
  const email = session?.data?.user?.email;
  const [role, setRole] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [company, setCompany] = useState("");
  const [des, setDes] = useState("");

  useEffect(() => {
    axios.get(`/api/users?email=${email}`).then((data) => {
      console.log(data.data.data);
      setUserData(data.data.data);
      const exp = data?.data?.data?.experience;
      setRole(exp?.role);
      setStart(exp?.startDate);
      setEnd(exp?.endData);
      setCompany(exp.company);
      setDes(exp?.description);
    });
  }, [email]);
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    axios
      .patch(`/api/users/${userData._id}`, {
        experience: [
          {
            title: data.role,
            company: data.company,
            startDate: data.startDate,
            endDate: data.endingDate,
            description: data.shortDescription,
          },
        ],
      })
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Job Details</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-6 w-full lg:w-[1000px]"
      >
        <div className="lg:flex gap-10 my-6">
          <div className="w-full lg:w-[500px]">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Role
            </label>
            <input
              defaultValue={role === undefined ? "" : role}
              {...register("role")}
              type="text"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Full Stack Engineer"
            />
          </div>
          <div className="w-full lg:w-[500px]">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Company
            </label>
            <input
              defaultValue={company === undefined ? "" : company}
              {...register("company")}
              type="text"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Google"
            />
          </div>
        </div>
        <div className="lg:flex gap-10 my-6">
          <div className="w-full lg:w-[500px]">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Start Date{" "}
            </label>
            <input
              {...register("startDate")}
              type="date"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Full Stack Engineer"
            />
          </div>
          <div className="w-full lg:w-[500px]">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              End Date
            </label>
            <input
              {...register("endingDate")}
              type="date"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Google"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Short Description
          </label>
          <textarea
            defaultValue={des === undefined ? "" : des}
            {...register("shortDescription")}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-3 h-[100px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="As Full stack engineer at this company. I feel  ......"
          />
        </div>
        <SimpleBtn className="my-5">
          <input className="" type="submit" value="Update Work Experience" />
        </SimpleBtn>
      </form>
    </div>
  );
};

export default Work_exp;
