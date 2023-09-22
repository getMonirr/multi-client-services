import {
  getServiceData,
  updateServiceData,
} from "@/redux/features/multi-step-form/multiStepFormDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import getImgUrl from "@/utils/getImgUrl";
import Image from "next/image";

const Gallery = () => {
  console.log("data")
  const serviceState = useSelector(getServiceData);
  const dispatch = useDispatch();
  const { control, handleSubmit, register, setValue } = useForm();

  const onSubmit = async (data: any) => {
    if (data?.image01[0] && data?.image02[0] && data?.image03[0]) {
      const img01 = await getImgUrl(data?.image01[0]);
      const img02 = await getImgUrl(data?.image02[0]);
      const img03 = await getImgUrl(data?.image03[0]);
      const newImages = { images: [img01, img02, img03] };
      dispatch(updateServiceData(newImages));
      toast.success("your data has been saved", { position: "top-center" });
    }
  };
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
        {serviceState.images.length > 0 ? (
          serviceState.images.map((image, index) => (
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

export default Gallery;
