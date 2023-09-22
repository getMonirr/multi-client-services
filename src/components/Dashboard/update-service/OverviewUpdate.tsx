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
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { fetcher } from "@/utils/swr/fetcher";
// some change for new branch monir - 2

const OverviewUpdate = () => {
  console.log("data")
  // next auth session
  const { data: session } = useSession();
  const email = session?.user?.email;

  // get the user for the _id field
  const { data: result } = useSWR(`/api/users?email=${email}`, fetcher);
  const userId = result?.data?._id;

  // redux
  const serviceState = useSelector(getServiceData);
  const dispatch = useDispatch();

  // react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // submit the form
  const onSubmit = (data: any) => {
    data.tags = tags;
    data.seller = userId;
    data.sellerEmail = email;
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
      className="card flex-shrink-0 w-full max-w-5xl shadow-2xl bg-multi-bg"
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
            className="input input-bordered bg-multi-icon-bg"
            defaultValue={serviceState.title}
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Select your Category <span className="text-red-500">*</span>
              </span>
            </label>
            <select
              className="select select-bordered bg-multi-icon-bg"
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
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Select your Sub Category <span className="text-red-500">*</span>
              </span>
            </label>
            <select
              className="select select-bordered bg-multi-icon-bg"
              {...register("subCategory", { required: true })}
              defaultValue={serviceState.category}
            >
              <option disabled>Select a sub category</option>
              <option>Front-End Development</option>
              <option>Back-End Development</option>
              <option>iOS App Development</option>
              <option>Android App Development</option>
              <option>Logo Design</option>
              <option>Content Writing</option>
              <option>Other</option>
            </select>
          </div>
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

export default OverviewUpdate;
