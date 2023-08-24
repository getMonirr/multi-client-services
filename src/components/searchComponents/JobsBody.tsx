import SearchJobs from "./jobSearch";

const JobsBody = () => {
  return (
    <div className="my-20 grid grid-cols-4 gap-4 ">
      <div className="col-span-1 bg-gray-300 ">
        <h2 className="font-bold text-4xl text-center capitalize bg-multi-secondary text-white py-4 ">filter by</h2>
        <div className="form-control">
          <label className=" flex items-center gap-4 cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-red-500"
              checked
            />
            <span className="label-text">Red pill</span>
          </label>
        </div>
        <div className="form-control">
          <label className="flex items-center gap-4 cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
              checked
            />
            <span className="label-text">Blue pill</span>
          </label>
        </div>
      </div>
      <div className="col-span-3">
        <SearchJobs />
      </div>
    </div>
  );
};

export default JobsBody;
