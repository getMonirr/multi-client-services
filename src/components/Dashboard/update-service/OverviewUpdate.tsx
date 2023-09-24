"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-tagsinput/react-tagsinput.css";
import TagsInput from "react-tagsinput";
import axios from "axios";
import Loading from "../Loading/Loading";
import updateData from "@/utils/updateData";

const OverviewUpdate = ({ id }: { id: string }) => {
  const [serviceData, setServiceData] = useState<any>(null);

  // react hook form
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  // submit the form
  const onSubmit = async (data: any) => {
    data.tags = tags;
    const ladingUpdate = toast.loading("updating your data...");

    const result = await updateData(`/api/services/${id}`, data);

    if (result?.data?.modifiedCount) {
      toast.dismiss(ladingUpdate);
      toast.success("your data has been Updated");
    } else {
      toast.dismiss(ladingUpdate);
      toast.error("Something is wrong");
    }
  };

  // for tag
  const [tags, setTags] = useState(serviceData?.tags || []);

  const handleChange = (tags: any) => {
    setTags(tags);
  };

  useEffect(() => {
    const getSingleService = async () => {
      const { data } = await axios.get(`/api/services/${id}`);
      const service = data?.data;
      // set tags
      if (service?.tags) {
        setTags(service.tags);
      }
      // Set default values for category and subCategory using setValue
      if (service) {
        setValue("category", service.category);
        setValue("subCategory", service.subCategory);
      }
      // set service data
      setServiceData(service);
    };

    getSingleService();
  }, [id, setValue]);

  // show loading
  if (!serviceData) return <Loading />;

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
            defaultValue={serviceData?.title}
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
              Add Tags <span className="text-red-500">*</span>
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
