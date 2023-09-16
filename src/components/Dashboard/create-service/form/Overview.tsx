"use client";
import {
  getServiceData,
  updateServiceData,
} from "@/redux/features/multi-step-form/multiStepFormDataSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-tagsinput/react-tagsinput.css";
import TagsInput from "react-tagsinput";

const Overview = () => {
  const serviceState = useSelector(getServiceData);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    data.tags = tags;
    dispatch(updateServiceData(data));
    toast.success("your data has been saved", { position: "top-center" });
  };

  // for tag
  const [tags, setTags] = useState(serviceState.tags || []);

  const handleChange = (tags: any) => {
    setTags(tags);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card flex-shrink-0 w-full max-w-5xl shadow-2xl bg-base-100"
    >
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Select Your Service Title <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="title"
            className="input input-bordered"
            defaultValue={serviceState.title}
          />
        </div>
        <div className="form-control w-full max-w-5xl">
          <label className="label">
            <span className="label-text">
              Select your Category <span className="text-red-500">*</span>
            </span>
          </label>
          <select
            className="select select-bordered"
            {...register("category", { required: true })}
            defaultValue={serviceState.category}
          >
            <option disabled>Select a category</option>
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>Graphic Design</option>
            <option>Writing & Translation</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="label">
            <span className="label-text">
              Select Tags <span className="text-red-500">*</span>
            </span>
          </label>
          <TagsInput value={tags} onChange={handleChange} />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </form>
  );
};

export default Overview;
