"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import { useSession } from "next-auth/react";
import axios from "axios";
import { FaMailBulk, FaSketch, FaSkiing, FaUser } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const Account_setting = () => {
  const { data } = useSession();
  const email = data?.user?.email;
  // console.log(email);

  const [user, setUser] = useState<any>();
  console.log(user);

  useEffect(() => {
    axios.get(`/api/users?email=${email}`).then((data) => {
      // console.log(data);
      setUser(data?.data?.data);
    });
  }, [email]);

  return (
    <div className="mt-4">
      <h1 className="text-4xl font-semibold text-black">Your Profile</h1>
      <p className="text-gray-500 my-4">
        Here you can edit public information about yourself <br /> The Changes
        will be displayed for other users within 5 minutes
      </p>

      <div className="bg-[whitesmoke] p-6">
        <div className="lg:flex items-center gap-6">
          <img className="w-40 h-40" src={user?.profilePicture} alt="" />
          <div>
            <h1 className=" my-4  font-bold flex items-center gap-3">
              <FaUser />
              <p className="text-3xl">
                {user?.name?.firstName + " " + user?.name?.lastName}
              </p>
            </h1>
            <p className="flex items-center my-4 gap-3">
              <FaMailBulk />
              <p>{user?.email}</p>
            </p>
          </div>
        </div>
        <div className="divider my-10"></div>
        <div className="lg:flex gap-20">
          <div>
            <div className=""></div>
            <h1 className="flex gap-3 items-center">
              <FaMapLocation />
              <p className="text-2xl font-bold">Address</p>
            </h1>
            <p className="mt-3 font-semibold">
              Street: {user?.address?.street}
            </p>
            <p className="mt-3 font-semibold">
              City: {user?.address?.city + "-" + user?.address?.postalCode}
            </p>
            <p className="mt-3 font-semibold">
              Country: {user?.address?.country}
            </p>
          </div>
          <div>
            <div className="my-6 lg:my-0"></div>
            <h1 className="flex gap-3 items-center">
              <FaSketch />
              <p className="text-2xl font-bold">Skills</p>
            </h1>
            <div className="grid  grid-cols-1 lg:grid-cols-4 gap-4">
              {user?.skills?.map((d: string, i: number) => (
                <p key={i}>{d}</p>
              ))}
            </div>
          </div>
          <div className="font-semibold">
            <h1 className="text-3xl font-bold my-4">Education</h1>
            <p>Institute: {user?.educations[0]?.institution}</p>
            <p>Degree: {user?.educations[0]?.degree}</p>
            <p>Field of study: {user?.educations[0]?.fieldOfStudy}</p>
            <p>Graduation Year: {user?.educations[0]?.graduationYear}</p>
            <p>Location: {user?.educations[0]?.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account_setting;
