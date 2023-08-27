"use client";
import React, { useState } from "react";
import { Jobs } from "@/constant/Constant";
import { FaEye } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Image from "next/image";

const SearchJobs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab className="tab tab-lifted ">Search</Tab>
            <Tab className="tab tab-lifted">Save Job</Tab>
          </TabList>
        </Tabs>
        <p className="p-4"> {Jobs.length} jobs found</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
        {Jobs.map((job, i) => (
          <div
            key={i}
            className="bg-white rounded overflow-hidden group shadow-md"
          >
            <div className="relative">
              <img src={job.cover_photo} className="w-full h-52" alt="" />

              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a className="text-white text-lg w-9 h-9 rounded-full bg-multi-secondary flex items-center justify-center hover:bg-gray-800 transition">
                  <FaEye />
                </a>
              </div>
            </div>

            <div className="pt-4 pb-3 px-4">
              <a href="">
                <h2 className="text-lg text-gray-800 font-bold hover:text-red-600">
                  {job.name}
                </h2>
              </a>

              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-lg text-gray-500 font-semibold">
                  {job.work_category}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-800 font-bold"> Price: ${job.price} </p>
                <p className="text-gray-500"> Ratings: {job.reviews.length} </p>
              </div>
            </div>
            <button className="btn block w-full py-1 text-center text-white bg-multi-secondary hover:bg-multi-secondary border-red-600 rounded-none rounded-b transitio hover:border-red-600">
              Collaborate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchJobs;
