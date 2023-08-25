import SearchJobs from "./jobSearch";
import { CategoryTitle } from "@/constant/Constant";

const JobsBody = () => {
  return (
    <div className="my-20 grid grid-cols-1 md:grid-cols-4 gap-4 container mx-auto">
      <div className="col-span-1 bg-gray-300 ">
        <h2 className="font-bold text-4xl text-center capitalize bg-multi-secondary text-white py-4 ">
          filter by
        </h2>
        <div className="ml-6 ">
          <h3 className="text-lg py-4 border-b-2 border-black mb-3">
            Category{" "}
          </h3>
          <div className="form-control">
            <select className=" rounded-xl py-2 mr-4 pl-2">
              {CategoryTitle.map((data, index) => (
                <option key={index}>{data}</option>
              ))}
            </select>
            {/* <button className="btn">Go</button> */}
          </div>
        </div>
        <div className="ml-6 mt-4">
          <h3 className="text-lg   py-4 border-b-2 border-black mb-3">
            Experience level
          </h3>
          <div className="form-control">
            <select className="  rounded-xl py-2 mr-4 pl-2">
              <option>Entry level </option>
              <option>Intermediate </option>
              <option>Expert </option>
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
            <label className="flex gap-4 items-center cursor-pointer">
              <input type="checkbox"  className="checkbox" />
              <span className="label-text">Less then 100$</span>
            </label>
            <label className="flex gap-4 items-center cursor-pointer">
              <input type="checkbox"  className="checkbox" />
              <span className="label-text">100$ to 500$</span>
            </label>
            <label className="flex gap-4 items-center cursor-pointer">
              <input type="checkbox"  className="checkbox" />
              <span className="label-text">500$ to 2k$</span>
            </label>
            <label className="flex gap-4 items-center cursor-pointer">
              <input type="checkbox"  className="checkbox" />
              <span className="label-text">2k$ to 5k$</span>
            </label>
            <label className="flex gap-4 items-center cursor-pointer">
              <input type="checkbox"  className="checkbox" />
              <span className="label-text">5k$+</span>
            </label>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <SearchJobs />
      </div>
    </div>
  );
};

export default JobsBody;
