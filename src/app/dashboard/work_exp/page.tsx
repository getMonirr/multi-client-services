"use client";
import React, { useEffect, useState } from "react";
import Update_profile_sidebar from "@/components/Dashboard/Update_profile_sidebar/Update_profile_sidebar";
import Work_exp from "@/components/Dashboard/Work_exp/Work_exp";
import Courses from "@/components/Dashboard/Courses/Courses";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import axios from "axios";
type Inputs = {
  street: string;
  city: string;
  postal_code: string;
  country: string;
};
const WorkExperince = () => {
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
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    axios
      .patch(`/api/users/${userData._id}`, {
        experience: [
          {
            title: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ],
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

export default WorkExperince;
