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
    const {
      basicName,
      basicPrice,
      basicDescription,
      basicDeliveryTime,
      basicFeatureList,
      basicRevisionType,
      standardName,
      standardPrice,
      standardDescription,
      standardDeliveryTime,
      standardFeatureList,
      standardRevisionType,
      premiumName,
      premiumPrice,
      premiumDescription,
      premiumDeliveryTime,
      premiumFeatureList,
      premiumRevisionType,
    } = data;

    const newPackage = {
      packages: {
        basic: {
          name: basicName,
          price: basicPrice,
          description: basicDescription,
          deliveryTime: basicDeliveryTime,
          features: basicFeatureList,
          revisionType: basicRevisionType,
        },
        standard: {
          name: standardName,
          price: standardPrice,
          description: standardDescription,
          deliveryTime: standardDeliveryTime,
          features: standardFeatureList,
          revisionType: standardRevisionType,
        },
        premium: {
          name: premiumName,
          price: premiumPrice,
          description: premiumDescription,
          deliveryTime: premiumDeliveryTime,
          features: premiumFeatureList,
          revisionType: premiumRevisionType,
        },
      },
    };
    dispatch(updateServiceData(newPackage));
    toast.success("your data has been saved", { position: "top-center" });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 lg:grid-cols-3 relative"
    >
      <SinglePackage
        register={register}
        serviceState={serviceState}
        name="basic"
        control={control}
      />
      <SinglePackage
        register={register}
        serviceState={serviceState}
        name="standard"
        control={control}
      />
      <SinglePackage
        register={register}
        serviceState={serviceState}
        name="premium"
        control={control}
      />
      <div className="absolute -bottom-16 left-[5%] w-[80%]">
        <button className="btn btn-block" type="submit">
          Save all packages
        </button>
      </div>
    </form>
  );
};

export default Packages;
