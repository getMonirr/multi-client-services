import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import getImgUrl from "@/utils/getImgUrl";
import Image from "next/image";
import { useEffect, useState } from "react";
import updateData from "@/utils/updateData";
import axios from "axios";
import Loading from "../Loading/Loading";

const UpdateGallery = ({ id }: { id: string }) => {
  const [serviceData, setServiceData] = useState<any>(null);
  const { control, handleSubmit, register, setValue } = useForm();

  const onSubmit = async (data: any) => {
    if (data?.image01[0] && data?.image02[0] && data?.image03[0]) {
      const img01 = await getImgUrl(data?.image01[0]);
      const img02 = await getImgUrl(data?.image02[0]);
      const img03 = await getImgUrl(data?.image03[0]);
      const newImages = { images: [img01, img02, img03] };

      const ladingUpdate = toast.loading("updating your data...");

      const result = await updateData(`/api/services/${id}`, newImages);

      if (result?.data?.modifiedCount) {
        toast.dismiss(ladingUpdate);
        toast.success("your data has been Updated");
      } else {
        toast.dismiss(ladingUpdate);
        toast.error("Something is wrong");
      }
    } else {
      toast.error("Please select 3 images");
    }
  };

  useEffect(() => {
    const getSingleService = async () => {
      const { data } = await axios.get(`/api/services/${id}`);
      const service = data?.data;
      setServiceData(service);
    };
    getSingleService();
  }, [id]);

  if (!serviceData) return <Loading />;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-2xl">Showcase Your Services with Gallery</h3>
      <div className="divider"></div>
      <div className="space-y-4">
        <div>
          <h5>
            Picture One: <span className="text-red-500">*</span>
          </h5>
          <input
            {...register("image01", { required: true })}
            type="file"
            className="file-input file-input-bordered file-input-info w-full max-w-xs"
          />
        </div>
        <div>
          <h5>
            Picture two: <span className="text-red-500">*</span>
          </h5>
          <input
            {...register("image02", { required: true })}
            type="file"
            className="file-input file-input-bordered file-input-info w-full max-w-xs"
          />
        </div>
        <div>
          <h5>
            Picture three: <span className="text-red-500">*</span>
          </h5>
          <input
            {...register("image03", { required: true })}
            type="file"
            className="file-input file-input-bordered file-input-info w-full max-w-xs"
          />
        </div>
      </div>
      <div className="divider"></div>
      <h3>Your Gallery</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
        {serviceData.images.length > 0 ? (
          serviceData.images.map((image: any, index: number) => (
            <Image
              width={100}
              height={100}
              className="h-full w-full object-cover object-center border"
              key={index}
              src={image}
              alt={image}
            />
          ))
        ) : (
          <p className="font-bold">Gallery not set yet</p>
        )}
      </div>
      <div className="divider"></div>
      <div>
        <button className="btn" type="submit">
          Save your Gallery
        </button>
      </div>
    </form>
  );
};

export default UpdateGallery;
