import React from "react";
import SinglePackage from "./SinglePackage";
import {
  getServiceData,
  updateServiceData,
} from "@/redux/features/multi-step-form/multiStepFormDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Packages = () => {
  const serviceState = useSelector(getServiceData);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    // dispatch(updateServiceData(data));
    console.log(data);
    toast.success("your data has been saved", { position: "top-center" });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 lg:grid-cols-3 relative"
    >
      <SinglePackage register={register} name="basic" control={control} />
      <SinglePackage register={register} name="standard" control={control} />
      <SinglePackage register={register} name="premium" control={control} />
      <div className="absolute -bottom-16 left-[5%] w-[80%]">
        <button className="btn btn-block" type="submit">
          Save all packages
        </button>
      </div>
    </form>
  );
};

export default Packages;
