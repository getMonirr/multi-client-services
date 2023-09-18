"use client";
import {
  getServiceData,
  updateServiceData,
} from "@/redux/features/multi-step-form/multiStepFormDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";

const DescriptionAndFAQ = () => {
  const serviceState = useSelector(getServiceData);
  const dispatch = useDispatch();
  // faq list control
  const [faqsList, setFaqsList] = useState(serviceState.faqs || [""]);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(updateServiceData(data));
    toast.success("your data has been saved", { position: "top-center" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">
              Package short Description
            </span>
          </label>
          <textarea
            {...register(`description`, { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Description"
            defaultValue=""
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold">Question</span>
          </label>
          <input
            type="text"
            placeholder="2 days"
            className="input input-bordered w-full max-w-xs bg-multi-bg"
          />
        </div>
      </form>
    </div>
  );
};

export default DescriptionAndFAQ;
