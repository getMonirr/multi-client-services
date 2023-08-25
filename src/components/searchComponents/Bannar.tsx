"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import JobsBody from "./JobsBody";

const Bannar = () => {
  return (
    <div >
      <div className=" bg-black">
      <div className=" container mx-auto relative text-white py-10 px-4">
        <div>
          <h1 className="text-4xl font-bold mb-2 ">
            Get High Quality [that will dynamic] solutions
          </h1>
          <p>
            We will take all your problems and provide you the best solutions
          </p>
        </div>
        <div className="form-control absolute -bottom-6 inset-x-1/3">
          <div className="input-group shadow-2xl">
            <input
              type="text"
              placeholder="Search…"
              // className="input input-bordered"
              className="px-4 w-full border text-black"
            />
            <button className="btn">
              <FaSearch className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      </div>
      <JobsBody></JobsBody>
    </div>
  );
};

export default Bannar;
