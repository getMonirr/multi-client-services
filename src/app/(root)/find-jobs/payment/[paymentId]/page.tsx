"use client";
import ChackOut from "@/components/paymentComponent/ChackOut";
import RootContainer from "@/components/shared/RootContainer";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import { getPaymentData } from "@/redux/features/payment/paymentDataSlice";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
const userphoto =
  "https://img.freepik.com/premium-vector/young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_365941-687.jpg?size=626&ext=jpg&ga=GA1.1.2077699082.1681132836&semt=sph";

// TODO publicable key

// key : pk_test_51NISv5CvtirLXdOoAJfNNhTLw1xHkqjyYa4znodKsBDc5RLMgFcbFJMOSbzDh25l5ABmjOlQw7jjvAyu5ZVIZ8pN00fBZ7yaid
const key =
  "pk_test_51NISv5CvtirLXdOoAJfNNhTLw1xHkqjyYa4znodKsBDc5RLMgFcbFJMOSbzDh25l5ABmjOlQw7jjvAyu5ZVIZ8pN00fBZ7yaid";
const stripePromise = loadStripe(key);

const Payment = () => {
  // get payment data from redux store
  const paymentData = useSelector(getPaymentData);
  console.log(paymentData);

  const [information, setAddInformation] = useState<any>();
  // const router = useRouter();
  //  const {data } = router
  //  console.log(data)
  const name = "web development";
  const categoryName = "Basic";
  const price = 5;
  const delivery = 1;
  const revision = "unlimited";
  const tex = 2.5;
  const totalPrice = price + tex;
  // const myDilog = document?.getElementById("my_modal_1")
  // const myDilog = document.getElementById('my_modal_1') as HTMLFormElement).showModal()

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: object) => {
    if (data) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Add information successfull",
        showConfirmButton: false,
        timer: 1500,
      });
      setAddInformation(data);
      reset();
    }
  };

  return (
    <RootContainer>
      <div className=" flex gap-4 flex-col-reverse lg:flex-row ">
        <div className="md:col-span-2 pb-6 border md:w-2/3 text-black">
          {/* <Stepper
        activeStep={currentStepIndex}
        
        styleConfig={{
          activeBgColor: "#226CE5",
          completedBgColor: "#198754",
          activeTextColor: "#ffffff",
          completedTextColor: "#ffffff",
          inactiveBgColor: "#e0e0e0",
          inactiveTextColor: "#ffffff",
          size: "2em",
          circleFontSize: "1rem",
          labelFontSize: "0.875rem",
          borderRadius: "50%",
          fontWeight: 500,
        }}
      >
        <Step label="Overview" />
        <Step label="Packages" />
        <Step label="Confram pay" className="text-yellow-400" />
      </Stepper> */}
          <div className="flex items-center justify-center"></div>
          {/* <div className="flex items-center justify-end my-8 gap-4">

        <button className="btn btn-sm" disabled={isFirstStep} onClick={back}>
          Prev
        </button>
        <button className="btn btn-sm" disabled={isLastStep} onClick={next}>
          Next
        </button>
      </div> */}

          <h1 className="text-3xl bg-gray-100 p-4  font-bold mb-10 capitalize">
            Billing Information
          </h1>
          <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between items-center">
            <div className="lg:col-span-3">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam velit, natus atque quod nisi enim illo beatae cumque
                culpa tenetur?
              </p>

              {/* user information  */}
              <div className="mt-6 ">
                <p className="font-bold text-xl"> User name </p>
                <p className="font-bold"> User cuntry</p>
                <p>
                  {information && (
                    <>
                      <span>
                        {information?.company} {information?.state}
                        {information?.address} {information?.city}
                        {information?.postCode} {information?.country}
                      </span>{" "}
                    </>
                  )}
                </p>
              </div>
            </div>
            <p>
              <SimpleBtn>
                <button
                  // className="btn"
                  onClick={() => {
                    if (document) {
                      (
                        document.getElementById("my_modal_1") as HTMLFormElement
                      ).showModal();
                    }
                  }}
                >
                  Add details
                </button>
              </SimpleBtn>
            </p>
          </div>

          {/* payment section  */}
          <div className="mt-8">
            <p className="p-4 bg-gray-100 rounded font-bold text-xl ">
              Payment options
            </p>
            <Elements stripe={stripePromise}>
              <ChackOut></ChackOut>
            </Elements>
          </div>
        </div>

        {/* gig section  */}
        <div className="md:w-1/3">
          <div className="md:sticky top-20 px-2">
            <div className="flex items-center gap-6 mt-4 border-b border-opacity-40 pb-6 mb-8">
              <Image
                src={userphoto}
                alt=""
                width={150}
                height={100}
                className="border "
              />
              <h1 className="text-xl font-semibold">{name}</h1>
            </div>
            <div className="flex justify-between items-center ">
              <p className="text-2xl font-semibold">{categoryName}</p>
              <p className="text-2xl font-semibold">${price}</p>
            </div>
            <div className="my-6 text-xl border-b border-opacity-40 pb-4">
              <p className="flex items-center gap-2">
                <FaCheck /> <span>{delivery} delivery</span>
              </p>
              <p className="flex items-center gap-2">
                <FaCheck /> <span>{revision} revision</span>
              </p>
            </div>
            <div className="my-6 text-xl border-b border-opacity-40 pb-4 mb-20">
              <p className="flex justify-between items-center">
                Service fee <span>${tex}</span>{" "}
              </p>
              <p className="flex justify-between items-center py-4 ">
                Total <span>${totalPrice}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-2xl">
          <h3 className="font-bold text-2xl p-4 rounded mb-10 bg-gray-100">
            Billing Information{" "}
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold ">Full Name</span>
              </label>

              <input
                {...register("name")}
                type="text"
                placeholder=" Full name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold ">Company Name</span>
              </label>

              <input
                {...register("company")}
                type="text"
                placeholder=" company name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold ">
                  State/Province/Territory
                </span>
              </label>

              <input
                {...register("state")}
                type="text"
                placeholder=" "
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold ">Address</span>
              </label>

              <input
                {...register("address")}
                type="text"
                placeholder=" your name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="text-xl font-semibold ">City</span>
                </label>
                <input
                  {...register("city")}
                  type="text"
                  placeholder=" your name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl font-semibold ">Postal code</span>
                </label>
                <input
                  {...register("postCode")}
                  type="text"
                  placeholder=" your name"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold ">Country</span>
              </label>
              <select
                {...register("country")}
                className="input input-bordered w-full"
              >
                <option value="">Select Country</option>
                <option value="['Bangladesh','BD']">Bangladesh</option>
                <option value="['Nigeria','NG']">Nigeria</option>
                <option value="['Afghanistan','AF']">Afghanistan</option>
                <option value="['Ãƒâ€¦land Islands','AX']">
                  Ãƒâ€¦land Islands
                </option>
                <option value="['Albania','AL']">Albania</option>
                <option value="['Algeria','DZ']">Algeria</option>
                <option value="['American Samoa','AS']">American Samoa</option>
                <option value="['Andorra','AD']">Andorra</option>
                <option value="['Angola','AO']">Angola</option>
                <option value="['Anguilla','AI']">Anguilla</option>
                <option value="['Antarctica','AQ']">Antarctica</option>
                <option value="['Antigua and Barbuda','AG']">
                  Antigua and Barbuda
                </option>
                <option value="['Argentina','AR']">Argentina</option>
                <option value="['Armenia','AM']">Armenia</option>
                <option value="['Aruba','AW']">Aruba</option>
                <option value="['Australia','AU']">Australia</option>
                <option value="['Austria','AT']">Austria</option>
                <option value="['Azerbaijan','AZ']">Azerbaijan</option>
                <option value="['Bahamas','BS']">Bahamas</option>
                <option value="['Bahrain','BH']">Bahrain</option>
              </select>
            </div>

            <div className="modal-action">
              <SimpleBtn>
                <button type="submit">Save</button>
              </SimpleBtn>
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
    </RootContainer>
  );
};

export default Payment;
