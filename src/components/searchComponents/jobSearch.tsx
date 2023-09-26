"use client";
import React, { useState, useEffect } from "react";
import { findJobs } from "@/constant/Constant";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaStar, FaUserCircle } from "react-icons/fa";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/utils/swr/fetcher";
import axios from "axios";

const SearchJobs = ({ data}: { data: string}) => {
  const [pageData, setPageData] = useState<string[]>([]);
  const [currentPageData, setCurrentPageData] = useState<string[]>([])
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false)
  
  // const {data: result} = useSWR(`/api/services?searchQuery=${data}`, fetcher)
  // const searchData = result?.data
  
 

  // pagination function 
  const perPage: number = 6;
  const totalPage: number = Math.ceil(pageData?.length / perPage);
  const pageNumber: any = [...Array(totalPage)?.keys()];

  // userPhoto use 
  const userphoto =
    "https://img.freepik.com/premium-vector/young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_365941-687.jpg?size=626&ext=jpg&ga=GA1.1.2077699082.1681132836&semt=sph";
  const pageHandle = (page: number) => {
    setLoading(true)
    setCurrentPage(page);
      const backData = page * perPage;
      const currentData = pageData.slice(backData, perPage+backData);
      setCurrentPageData(currentData);
      setLoading(false)
      console.log("page number ", currentData, page)
    
  };
  console.log(data)
  
  useEffect(() => {
    if(data){
      axios.get(`/api/services?searchQuery=${data}`)
      .then(result => {
       const allData = result.data.data
       setPageData(allData)
       const fastData = allData?.slice(0, perPage)
      setCurrentPageData(fastData);
       console.log(allData)
      })
  
    }
    else{
      axios.get("/api/services")
      .then(result => {
       const allData = result.data.data
       setPageData(allData)
       const fastData = allData?.slice(0, perPage)
      setCurrentPageData(fastData);
       console.log(allData)
      })
     }
    }
  , [data]);

  return (
    <div>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab className="tab tab-lifted ">Search</Tab>
            <Tab className="tab tab-lifted">Save Job</Tab>
          </TabList>
        </Tabs>
        <p className="p-4 dark:text-white"> {pageData?.length} jobs found</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4   mx-auto ">
        {currentPageData?.map((job: any, i: number) => (
          <div
            key={job._id}
            className="bg-white dark:bg-gray-800 dark:text-white rounded overflow-hidden group shadow-2xl "
          >
            <Link href={`/find-jobs/${job._id}`}>

            <Swiper
              navigation={true}
              modules={[Navigation]}
              spaceBetween={20}
              className=" custom-swiper-button"
            >
              {job?.images?.map((image: any, i: number) => (
                <SwiperSlide key={i}>
                  <div className="w-full h-52 border-b">
                    <Image
                      src={image}
                      alt="Vercel Logo"
                      className="h-52 "
                      width={500}
                      height={200}
                      priority
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="pt-4 pb-3 px-4 h-96">
              <div className="flex items-center gap-4 mb-10">
                <div>
                  {
                    
                    <FaUserCircle className="w-14 h-14 rounded-full"/>
                  }
                 
                </div>

                <div className="flex justify-between flex-grow ">
                  <div>
                    <h2 className="text-lg text-gray-800 dark:text-white font-bold hover:text-red-600">
                      {`${job?.seller?.name?.firstName} ${job?.seller?.name?.lastName}`}
                    </h2>
                    <p className="flex items-center">
                      <FaStar className="text-yellow-500" />
                      <span>
                        {job.ratings} ({job.reviews.length})
                      </span>
                    </p>
                  </div>
                  <div>
                    <p>Level {job.level}</p>
                  </div>
                </div>
              </div>
              <div className="mb-6 h-32">
                <h2 className=" px-2 pb-2 font-semibold text-xl ">{job.title}</h2>
                <small className="text-xs h-14">{job.description}</small>
              </div>
              <div className="flex items-center justify-between gap-4  py-3 ">
                <small className="text-xs ">${job?.seller?.hourlyRate}/hr</small>
                <small className="text-xs">${job?.packages?.premium.price} Earned</small>
              </div>

              <div className="flex justify-between items-center">
                <div className="">
                  <small className="text-xs block">
                    {job?.seller?.jobSuccess}% job success
                  </small>
                </div>
                <p className=" font-bold bg-multi-primary py-2 px-4 text-white rounded-2xl">
                  {" "}
                  Price: ${job.packages.basic.price}
                </p>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-10 text-right">
        { totalPage > 0 && pageData?.length >5 &&
          <div className="">
          {currentPage <= 0 ? "" : <button onClick={() => {setCurrentPage(currentPage - 1)
          pageHandle(currentPage-1)
          }} className="join-item btn">&#10094; prev</button>}
          <button className="join-item btn">
          {pageNumber.map((page: number) => (
          <button
            className={
              currentPage === page
                ? "bg-white text-black rounded-full p-2"
                : "rounded-full p-2 bg-blue-400 ml-2"
            }
            key={page}  
            onClick={() => pageHandle(page)}         
          >
            {page}
          </button>
        ))}
          </button>
          {
              currentPage === pageNumber.length -1 ? "" : <button onClick={() =>{ setCurrentPage(currentPage + 1) 
              pageHandle(currentPage+1)
              }} className="join-item btn">next &#10095;</button>

            }
        </div>
        }

      </div>
      {/* <Relative/> */}
    </div>
  );
};

export default SearchJobs;