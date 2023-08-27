import SearchJobs from "./jobSearch";
import { CategoryTitle } from "@/constant/Constant";
import { useState } from "react";
import {FaTimes} from "react-icons/fa"

const JobsBody = () => {
  const [categorys, setCategorys] = useState("");
  const [postTime, setPostTime] = useState("");
  const [experience, setExperience] = useState("");
  const [price, setPrice] = useState("");

  const categoryHandle = (e: any) => {
    setCategorys(e.target.value);
  };

  const timeHandle = (e: any) => {
    setPostTime(e.target.value);
  };

  const experienceHandle = (e: any) => {
    setExperience(e.target.value);
  };

  const priceHandle = (e: any) => {
    setPrice(e.target.value);
  };

  return (
    <div className="my-20 grid grid-cols-1 md:grid-cols-4 gap-4 container mx-auto">
      <form className="col-span-1 bg-gray-300 ">
        <h2 className="font-bold text-4xl text-center capitalize bg-multi-secondary text-white py-4 ">
          filter by
        </h2>
        <div className="ml-6 ">
          <h3 className="text-lg py-4 border-b-2 border-black mb-3">
            Category
          </h3>
          <div className="form-control">
            <select
              onBlur={categoryHandle}
              name="category"
              className=" rounded-xl py-2 mr-4 pl-2"
            >
              {CategoryTitle.map((data, index) => (
                <option value={data} key={index}>
                  {data}
                </option>
              ))}
            </select>
            {/* <button className="btn">Go</button> */}
          </div>
        </div>
        <div className="ml-6 mt-4">
          <h3 className="text-lg   py-4 border-b-2 border-black mb-3">
            Post Time
          </h3>
          <div className="form-control">
            <select onBlur={timeHandle} className="  rounded-xl py-2 mr-4 pl-2">
              <option value={"a weeke ago"}>a weeke ago</option>
              <option value={"2 weeke ago"}>2 weeke ago </option>
              <option value={"a month ago"}>a month ago </option>
            </select>
            {/* <button className="btn">Go</button> */}
          </div>
        </div>
        <div className="ml-6 mt-4">
          <h3 className="text-lg   py-4 border-b-2 border-black mb-3">
            Experience level
          </h3>
          <div className="form-control">
            <select
              onBlur={experienceHandle}
              className="  rounded-xl py-2 mr-4 pl-2"
            >
              <option value={"Entry level"}>Entry level </option>
              <option value={"Intermediate"}>Intermediate </option>
              <option value={"Expert"}>Expert </option>
            </select>
            {/* <button className="btn">Go</button> */}
          </div>
        </div>
        <div className="ml-6 mt-4">
          <h3 className="text-lg   py-4 border-b-2 border-black mb-3">
            {" "}
            Fixed price
          </h3>
          <div className="form-control">
            <select
              onBlur={priceHandle}
              className="  rounded-xl py-2 mr-4 pl-2"
              name=""
              id=""
            >
              <option value={"Less then 100$"} className="label-text">
                Less then 100$
              </option>
              <option value={"100$ to 500$"} className="label-text">
                100$ to 500$
              </option>
              <option value={"500$ to 2k$"} className="label-text">
                500$ to 2k$
              </option>
              <option value={"2k$ to 5k$"} className="label-text">
                2k$ to 5k$
              </option>
              <option value={"5k$+"} className="label-text">
                5k$+
              </option>
            </select>
          </div>
        </div>
      </form>
      <div className="col-span-3">
        <div className="flex gap-4  px-4 py-2 ">
          {categorys && (
            <p onClick={()=>{setCategorys("")}} className="border flex items-center gap-2 rounded-lg px-2 bg-gray-400"><span>{categorys}</span> <FaTimes/> </p>
          )}
          {postTime && (
            <p onClick={()=>{setPostTime("")}} className="border flex items-center gap-2 rounded-lg px-2 bg-gray-400"><span>{postTime}</span> <FaTimes/></p>
          )}
          {experience && (
            <p onClick={()=>{setExperience("")}} className="border flex items-center gap-2 rounded-lg px-2 bg-gray-400"><span>{experience}</span> <FaTimes/></p>
          )}
          {price && (
            <p onClick={()=>{setPrice("")}} className="border flex items-center gap-2 rounded-lg px-2 bg-gray-400"><span>{price}</span> <FaTimes/></p>
          )}
        </div>

        <SearchJobs />
      </div>
    </div>
  );
};

export default JobsBody;
