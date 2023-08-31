"use client";
import React, { useState, useEffect } from "react";
import { findJobs } from "@/constant/Constant";
import { Tab, Tabs, TabList, } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import Image from "next/image";


const SearchJobs = () => {

  const [pageData, setPageData] = useState<any>([])
  // if(findJobs.length >= 10){
  //   setPageData(findJobs)
  // }
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0)
  const totalItems: number = findJobs.length 
  const perPage : number = 10 
  const totalPage : number = Math.ceil(totalItems/ perPage)
  const pageNumber : any = [...Array(totalPage).keys()]
  
  const pageHandle = (pages:number) =>{
    setCurrentPage(pages)
    const backData = (currentPage * perPage)
    const currentData = findJobs.splice(backData, perPage)
    setPageData(currentData)


  }

  useEffect(()=>{
    const fastData = findJobs.splice(0 , perPage)
    setPageData(fastData)
  },[])
  console.log(findJobs)


  return (
    <div>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab className="tab tab-lifted ">Search</Tab>
            <Tab className="tab tab-lifted">Save Job</Tab>
          </TabList>
        </Tabs>
        <p className="p-4"> {findJobs.length} jobs found</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
        {pageData.map((job: any, i:number) => (
          <div
            key={i}
            className="bg-white rounded overflow-hidden group shadow-md"
          >
            <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={20}
            className=" "
             >
              {
                job.picture.map((image:any , index:number ) =>
                <SwiperSlide
                key={i}
                >
                  <div className="w-full h-52 border-b">
                  <Image
                  src={image}
                  alt="Vercel Logo"
                  className=""
                  width={300}
                  height={208}
                  priority
                />
                  </div>
                </SwiperSlide>)
              }
              
            </Swiper>

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
              Apply
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p>Current Page {currentPage} </p>
      {
        pageNumber.map((page:number) => <button
         className={currentPage === page ? "bg-white rounded-full p-2" : "rounded-full p-2 bg-blue-400 ml-2"}
         key={page}
         onChange={()=>pageHandle(page)}
         >
           {page} 
         </button>)
      }
      </div>
    </div>
  );
};

export default SearchJobs;
