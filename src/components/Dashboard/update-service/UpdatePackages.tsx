import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import UpdateSinglePackage from "./UpdateSinglePackage";
import useSWR from "swr";
import { fetcher } from "@/utils/swr/fetcher";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import updateData from "@/utils/updateData";

const UpdatePackages = ({ id }: { id: string | null }) => {
  // fetch the package
  const [serviceData, setServiceData] = useState<any>(null);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
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

    const ladingUpdate = toast.loading("updating your data...");

    const result = await updateData(`/api/services/${id}`, newPackage);

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
      setServiceData(service);
    };
    getSingleService();
  }, [id]);

  if (!serviceData) return <Loading />;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 lg:grid-cols-3 relative"
    >
      <UpdateSinglePackage
        register={register}
        serviceState={serviceData}
        name="basic"
        control={control}
      />
      <UpdateSinglePackage
        register={register}
        serviceState={serviceData}
        name="standard"
        control={control}
      />
      <UpdateSinglePackage
        register={register}
        serviceState={serviceData}
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

export default UpdatePackages;
