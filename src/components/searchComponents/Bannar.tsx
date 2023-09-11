"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import JobsBody from "./JobsBody";
import { BsSearch } from "react-icons/bs";



const Bannar = () => {
  const [searchData , setSearchData] = useState('that will dynamic')

  const searchHandle = (e:any) =>{
    e.preventDefault()
    const from = e.target.searche.value
    setSearchData(from)
    
  }
  return (
    <div >
      <div className=" bg-black">
      <div className=" container mx-auto relative text-white py-10 px-4">
        <div>
          <h1 className="text-4xl font-bold mb-2 ">
            Get High Quality [ {searchData} ] solutions
          </h1>
          <p>
            We will take all your problems and provide you the best solutions
          </p>
        </div>
        <div className="form-control absolute -bottom-6 inset-x-1/3">
          
          <form onSubmit={searchHandle} className="join">
            <input 
              className="input text-black shadow-xl input-bordered py-4 input-lg join-item bg-white rounded-tr-none rounded-br-none b w-full lg:w-[500px] placeholder:text-sm"
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
      <JobsBody></JobsBody>
    </div>
  );
};

export default Bannar;
