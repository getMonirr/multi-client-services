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
      <p className="text-blue-50 my-4">
        Here you can edit public information about yourself <br /> The Changes
        will be displayed for other users within 5 minutes
      </p>

      <div className="bg-[whitesmoke] p-6">
        <div>
          <div className="lg:flex  items-center gap-6">
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
          <div className="lg:flex  gap-20">
            <div className="w-[400px]">
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
            <div className="w-[400px]">
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
            <div className="font-semibold w-[400px]">
              <h1 className="text-3xl font-bold my-4">Education</h1>
              <p>Institute: {user?.educations[0]?.institution}</p>
              <p>Degree: {user?.educations[0]?.degree}</p>
              <p>Field of study: {user?.educations[0]?.fieldOfStudy}</p>
              <p>Graduation Year: {user?.educations[0]?.graduationYear}</p>
              <p>Location: {user?.educations[0]?.location}</p>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="flex  gap-20">
          <div className="w-[400px]">
            <h1 className="text-2xl font-bold">Certification</h1>
            <p>Complete web development course at Programming Hero</p>
          </div>
          <div className="w-[400px]">
            <h1 className="text-2xl font-bold">Language</h1>
            <p className="mt-2">1. Bangla -- Native</p>
            <p className="mt-2">2. English -- Fluent</p>
            <p className="mt-2">3. Hindi -- Conversional</p>
          </div>
          <div className="w-[400px]">
            <h1 className="text-2xl font-bold">Experience</h1>
            <h1 className="mt-2">Company: XYZ</h1>
            <h1 className="mt-2">Role: Frontend developer</h1>
            <h1 className="mt-2">Start Date: 01-01-2023 (running)</h1>
          </div>
        </div>
        <div className="divider"></div>
        <h1 className="text-3xl font-bold text-center">Portfolio</h1>
        <div className="flex gap-40 mt-10">
          <div>
            <div className="font-semibold text-lg">
              <p className="bg-blue-50 p-2">1</p>
              <p className="mt-2">Title: Music hub</p>
              <p className="mt-2">Role: Frontend developer</p>
              <p className="mt-2">Start date: 01-08-2023</p>
              <p className="mt-2">Ending Date: 01-09-2023</p>
              <p className="mt-2">Github Code: https//:github.com/project</p>
              <p className="mt-2">Live site: https//:google.com</p>
            </div>
          </div>
          <div>
            <div className="font-semibold text-lg">
            <p className="bg-blue-50 p-2">2</p>
              <p className="mt-2">Title: Multi-client website</p>
              <p className="mt-2">Role: Frontend developer</p>
              <p className="mt-2">Start date: 01-08-2023</p>
              <p className="mt-2">Ending Date: 01-09-2023</p>
              <p className="mt-2">Github Code: https//:github.com/project</p>
              <p className="mt-2">Live site: https//:google.com</p>
            </div>
          </div>
          <div>
            <div className="font-semibold text-lg">
            <p className="bg-blue-50 p-2">3</p>
              <p className="mt-2">Title: Multi-client website</p>
              <p className="mt-2">Role: Frontend developer</p>
              <p className="mt-2">Start date: 01-08-2023</p>
              <p className="mt-2">Ending Date: 01-09-2023</p>
              <p className="mt-2">Github Code: https//:github.com/project</p>
              <p className="mt-2">Live site: https//:google.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account_setting;
