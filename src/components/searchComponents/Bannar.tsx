"use client";
import React, { useEffect, useState } from "react";
// import { FaSearch } from "react-icons/fa";
import JobsBody from "./JobsBody";
import { BsSearch } from "react-icons/bs";
import RootContainer from "../shared/RootContainer";

const Bannar = ({ queryData }: { queryData: string }) => {
  const [searchData, setSearchData] = useState("");

  const searchHandle = (e: any) => {
    e.preventDefault();
    const from = e.target.searche.value;
    setSearchData(from);
  };
  useEffect(() => {
    if (queryData) {
      setSearchData(queryData);
      console.log("ami ace");
    }
  }, [queryData]);
  return (
    <RootContainer>
      <div className=" bg-black">
        <div className=" relative text-white py-10 px-4">
          <div>
            <h1 className="text-4xl font-bold mb-2 ">
              Get High Quality {searchData && <span>{searchData}</span>}{" "}
              solutions
            </h1>
            <p>
              We will take all your problems and provide you the best solutions
            </p>
          </div>
          <div className="form-control absolute -bottom-8 md:inset-x-1/3">
            <form onSubmit={searchHandle} className="join">
              <input
                className="input text-black shadow-xl input-bordered py-2 md:py-4 input-lg join-item bg-white rounded-tr-none rounded-br-none b w-full lg:w-[500px] placeholder:text-sm"
                placeholder="Try 'web development'"
                name="searche"
                type="text"
              />
              <button
                type="submit"
                className="btn join-item bg-multi-secondary btn-lg shadow-xl"
              >
                <BsSearch className="h-6 w-6 text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <JobsBody searchWord={searchData}></JobsBody>
    </RootContainer>
  );
};

export default Bannar;
