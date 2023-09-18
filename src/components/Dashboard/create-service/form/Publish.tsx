import { getServiceData } from "@/redux/features/multi-step-form/multiStepFormDataSlice";
import saveServiceInDatabase from "@/utils/saveServiceInDatabase";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Publish = () => {
  const serviceState = useSelector(getServiceData);
  const router = useRouter();
  const handlePublish = async () => {
    console.log(serviceState);
    const saveResult = await saveServiceInDatabase(serviceState);
    console.log(saveResult);
    if (saveResult.success) {
      toast.success("Published successfully", { position: "top-center" });
      Swal.fire({
        title: "What next?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Add another",
        denyButtonText: `See service`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          router.push("/dashboard/create-service");
        } else if (result.isDenied) {
          router.push(`/find-jobs/${saveResult?.data?._id}`);
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div>
      <h1 className="font-bold text-3xl">Start your Career</h1>
      <div className="divider"></div>
      <button className="btn" onClick={handlePublish}>
        Publish your Service
      </button>
    </div>
  );
};

export default Publish;
