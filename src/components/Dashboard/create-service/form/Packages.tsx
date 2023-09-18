import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const Packages = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Basic</h2>
        <p>This is your basic packages, Please draw your flag</p>
        <div className="space-y-3">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Your package name?</span>
            </label>
            <input
              type="text"
              placeholder="Custom package name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex items-center gap-4 flex-col lg:flex-row ">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
              <input
                type="number"
                placeholder="$60"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">Delivery Time</span>
              </label>
              <input
                type="text"
                placeholder="2 days"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Package short Description
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Revision</span>
            </label>
            <input
              type="text"
              placeholder="unlimited"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Feature List</span>
            </label>
            <input
              type="text"
              placeholder="1. Responsive design "
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button className="btn btn-sm">
            <FaPlusCircle />
            Add more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
