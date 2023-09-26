"use client";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import updateData from "@/utils/updateData";
import Loading from "../Loading/Loading";
import axios from "axios";

interface Faqs {
  question: string;
  answer: string;
  id?: number | string;
}

interface FormData {
  description: string;
  faqs: Faqs[];
}

const UpdateDescriptionAndFAQ = ({ id }: { id: string | null }) => {
  const [serviceData, setServiceData] = useState<any>(null);

  const { control, handleSubmit, register, setValue } = useForm<FormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "faqs",
  });

  const onSubmit = async (data: any) => {
    const ladingUpdate = toast.loading("updating your data...");
    console.log(data);

    const result = await updateData(`/api/services/${id}`, data);

    if (result?.data?.modifiedCount) {
      toast.dismiss(ladingUpdate);
      toast.success("your data has been Updated");
    } else {
      toast.dismiss(ladingUpdate);
      toast.error("Something is wrong");
    }
  };

  useEffect(() => {
    const getSingleService = async () => {
      const { data } = await axios.get(`/api/services/${id}`);
      const service = data?.data;

      if (service) {
        setValue("description", service.description);

        // Initialize the faqs field with default values
        const defaultFaqs = service.faqs.map((faq: Faqs) => {
          return {
            question: faq.question,
            answer: faq.answer,
          };
        });
        append(defaultFaqs);
      }
      setServiceData(service);
    };
    getSingleService();
  }, [id, setValue, append]);

  if (!serviceData) return <Loading />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-5xl">
      <div className="form-control">
        <h3 className="text-2xl">Description </h3>
        <div className="divider"></div>
        <label className="label">
          <span className="label-text font-bold">
            Briefly Describe Your Gig <span className="text-red-500">*</span>
          </span>
        </label>
        <textarea
          {...register("description", { required: true })}
          className="textarea textarea-bordered h-24"
          placeholder="Description"
          defaultValue=""
        ></textarea>
      </div>
      <div className="mt-16">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl">Frequently Asked Questions</h3>
          <button
            type="button"
            className=" flex items-center gap-2 text-multi-secondary font-bold"
            onClick={() => {
              // Append a new FAQ object to the faqs array
              append({ question: "", answer: "" });
            }}
          >
            <FaPlus /> Add Faqs
          </button>
        </div>
        <div className="divider"></div>
      </div>
      {/* faqs */}
      <div>
        {/* Render existing FAQs */}
        {fields.map((faq, index) => (
          <div key={faq.id} className="mt-8 space-y-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">{`Question ${
                  index + 1
                }`}</span>
              </label>
              <input
                type="text"
                placeholder={`Question ${index + 1}`}
                className="input input-bordered w-full  bg-multi-bg"
                defaultValue={faq.question}
                {...register(`faqs.${index}.question`)}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">{`Answer ${
                  index + 1
                }`}</span>
              </label>
              <input
                type="text"
                placeholder={`Answer ${index + 1}`}
                className="input input-bordered w-full  bg-multi-bg"
                defaultValue={faq.answer}
                {...register(`faqs.${index}.answer`)}
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="text-red-400 font-bold flex items-center gap-2"
                onClick={() => {
                  // Remove the FAQ at the specified index
                  remove(index);
                }}
              >
                <FaTrash size={15} /> Delete FAQ
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* ... Your form continues */}
      <div className="divider"></div>
      <button type="submit" className="btn">
        save Description & faqs
      </button>
    </form>
  );
};

export default UpdateDescriptionAndFAQ;
