"use client"
import SearchJobs from "./jobSearch";
import { CategoryTitle } from "@/constant/Constant";
import { useEffect, useState } from "react";
import { FaTimes, FaAngleDown, FaAngleLeft } from "react-icons/fa";
import Relative from "./Relative";
import SectionStarter from "../shared/SectionStarter";
import RootContainer from "../shared/RootContainer";

const JobsBody = ({ searchWord }: { searchWord: string }) => {
  // const [searchData, setSearchData] = useState<string>(searchWord)
  const [searchData, setSearchData] = useState<string>("")
  console.log(searchData)
  const [pageData, setPageData] = useState([]);
  const [categorys, setCategorys] = useState<string>("");
  const [postTime, setPostTime] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const postTimes = ["a weeke ago", "2 weeke ago", "a month ago"];
  const experienceData = ["Entry level", "Intermediate", "Expert"];
  const priceData = [
    "Less then 100$",
    "100$ to 500$",
    "500$ to 2k$",
    "2k$ to 5k$",
    "5k$+",
  ];
  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);
  const [postOpen, setPostOpen] = useState<boolean>(false);
  const [experienceOpen, setExperienceOpen] = useState<boolean>(false);
  const [priceOpen, setPriceOpen] = useState<boolean>(false);
  const handleApi = (data: string) => {
    setSearchData(data)
  };


  useEffect(() => {
    if(searchWord){
      setCategorys("")
    setSearchData(searchWord)
    }
  }, [searchWord]);

  // console.log(searchData);

  return (
    <RootContainer>
      <div className="my-20 grid grid-cols-1 md:grid-cols-4 gap-4 ">
        <div className="col-span-1 bg-gray-300 dark:bg-gray-800 dark:text-white">
          <h2 className="font-bold text-3xl text-center capitalize bg-multi-secondary text-white py-4 ">
            filter by
          </h2>
          <div
            onClick={() => {
              setCategoryOpen(!categoryOpen);
            }}
            className="collapse "
          >
            <input type="checkbox" />
            <div className="collapse-title flex justify-between text-lg mb-3 font-medium border-b border-black border-opacity-20">
              <p>Category</p>
              {categoryOpen ? <FaAngleDown /> : <FaAngleLeft />}
            </div>
            <div className="collapse-content">
              {CategoryTitle.map((data, index) => (
                <div key={index} className="div-control mb-2">
                  <label className=" flex items-center cursor-pointer">
                    <input
                      onChange={() => {
                        setCategorys(data);
                        handleApi(data);
                      }}
                      type="radio"
                      name="categorys"
                      className="radio checked:bg-blue-500"
                      value={data}
                    />
                    <span className="ml-4">{data}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={() => {
              setPostOpen(!postOpen);
            }}
            className="collapse "
          >
            <input type="checkbox" />
            <div className="collapse-title flex justify-between text-lg mb-3 font-medium border-b border-black border-opacity-20">
              <p>Post Time</p>
              {postOpen ? <FaAngleDown /> : <FaAngleLeft />}
            </div>
            <div className="collapse-content">
              {postTimes.map((data, index) => (
                <div key={index} className="form-control mb-2">
                  <label className=" flex items-center cursor-pointer">
                    <input
                      onChange={() => {
                        setPostTime(data);
                        handleApi(data);
                      }}
                      type="radio"
                      name="Post Time"
                      className="radio checked:bg-blue-500"
                      value={data}
                    />
                    <span className="ml-4">{data}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={() => {
              setExperienceOpen(!experienceOpen);
            }}
            className="collapse "
          >
            <input type="checkbox" />
            <div className="collapse-title flex justify-between text-lg mb-3 font-medium border-b border-black border-opacity-20">
              <p>Experience level</p>
              {experienceOpen ? <FaAngleDown /> : <FaAngleLeft />}
            </div>
            <div className="collapse-content">
              {experienceData.map((data, index) => (
                <div key={index} className="form-control mb-2">
                  <label className=" flex items-center cursor-pointer">
                    <input
                      onChange={() => {
                        setExperience(data);
                        handleApi(data);
                      }}
                      type="radio"
                      name="Experience"
                      className="radio checked:bg-blue-500"
                      value={data}
                    />
                    <span className="ml-4">{data}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={() => {
              setPriceOpen(!priceOpen);
            }}
            className="collapse "
          >
            <input type="checkbox" />
            <div className="collapse-title flex justify-between text-lg mb-3 font-medium border-b border-black border-opacity-20">
              <p>Prices</p>
              {priceOpen ? <FaAngleDown /> : <FaAngleLeft />}
            </div>
            <div className="collapse-content">
              {priceData.map((data, index) => (
                <div key={index} className="form-control mb-2">
                  <label className=" flex items-center cursor-pointer">
                    <input
                      onChange={() => {
                        setPrice(data);
                        handleApi(data);
                      }}
                      type="radio"
                      name="Prices"
                      className="radio checked:bg-blue-500"
                      value={data}
                    />
                    <span className="ml-4">{data}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex gap-4  px-4 py-2 ">
            {categorys && (
              <p
                onClick={() => {
                  setCategorys("");
                }}
                className="border cursor-pointer flex items-center gap-2 rounded-lg px-2 bg-gray-400 dark:bg-gray-800"
              >
                <span>{categorys}</span> <FaTimes />
              </p>
            )}
            {postTime && (
              <p
                onClick={() => {
                  setPostTime("");
                }}
                className="border cursor-pointer flex items-center gap-2 rounded-lg px-2 bg-gray-400 dark:bg-gray-800"
              >
                <span>{postTime}</span> <FaTimes />
              </p>
            )}
            {experience && (
              <p
                onClick={() => {
                  setExperience("");
                }}
                className="border cursor-pointer flex items-center gap-2 rounded-lg px-2 bg-gray-400"
              >
                <span>{experience}</span> <FaTimes />
              </p>
            )}
            {price && (
              <p
                onClick={() => {
                  setPrice("");
                }}
                className="border cursor-pointer flex items-center gap-2 rounded-lg px-2 bg-gray-400"
              >
                <span>{price}</span> <FaTimes />
              </p>
            )}
          </div>

          <SearchJobs data={searchData}/>
        </div>
      </div>
      <div className="mb-20">
        <SectionStarter title="Relative jobs" description="" />
        <Relative />
      </div>
    </RootContainer>
  );
};

export default JobsBody;