import { useState } from "react";
import { Control, FieldValues, UseFormRegister } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

type SinglePackageProps = {
  name: string;
  register: UseFormRegister<FieldValues>;
  control: Control;
  serviceState: any;
};

const SinglePackage = ({
  register,
  name,
  control,
  serviceState,
}: SinglePackageProps) => {
  const { packages } = serviceState;
  const defaultPackage = packages[name];
  // feature control
  const [featureLists, setFeatureLists] = useState(
    defaultPackage?.features || [""]
  );

  const addFeatureList = () => {
    setFeatureLists([...featureLists, ""]);
  };

  const removeFeatureList = (index: number) => {
    const newFeatureLists = [...featureLists];
    newFeatureLists.splice(index, 1);
    setFeatureLists(newFeatureLists);
  };
  return (
    <div className="card w-full bg-multi-icon-bg shadow-xl">
      <div className="card-body">
        <h2 className="card-title font-bold capitalize text-2xl"> {name} </h2>
        <p>This is your {name} packages, Please draw your flag</p>
        <div className="space-y-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">
                Your package name? <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              {...register(`${name}Name`, { required: true })}
              type="text"
              placeholder="Custom package name"
              className="input input-bordered w-full bg-multi-bg"
              defaultValue={defaultPackage?.name}
            />
          </div>
          <div className="flex items-center gap-4 flex-col lg:flex-row ">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">
                  Price <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                {...register(`${name}Price`, {
                  required: true,
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="$60"
                className="input input-bordered w-full max-w-xs bg-multi-bg"
                defaultValue={defaultPackage?.price}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">
                  Delivery Time <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                {...register(`${name}DeliveryTime`, { required: true })}
                type="text"
                placeholder="2 days"
                className="input input-bordered w-full max-w-xs bg-multi-bg"
                defaultValue={defaultPackage?.deliveryTime}
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Package short Description{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>
            <textarea
              {...register(`${name}Description`, { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Description"
              defaultValue={defaultPackage?.description}
            ></textarea>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">
                Revision <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              {...register(`${name}RevisionType`, { required: true })}
              type="text"
              placeholder="unlimited"
              className="input input-bordered w-full bg-multi-bg"
              defaultValue={defaultPackage?.revisionType}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Feature List </span>
            </label>
            {featureLists.map((feature: string[], index: number) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center mb-2">
                  <input
                    {...register(`${name}FeatureList[${index}]`)}
                    defaultValue={feature}
                    type="text"
                    placeholder={`Feature ${index + 1}`}
                    className="input input-bordered w-full bg-multi-bg input-sm"
                  />
                  <button
                    className=" btn-sm"
                    onClick={() => removeFeatureList(index)}
                    type="button"
                  >
                    <MdOutlineCancel className="h-6 w-6" />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-end">
              <button
                className="btn btn-sm mt-2"
                type="button"
                onClick={addFeatureList}
              >
                <FaPlus />
                Add more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePackage;
