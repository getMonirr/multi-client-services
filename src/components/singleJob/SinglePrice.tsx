"use client";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import {
  RiLoopRightFill,
  RiTimeLine,
  RiWallet3Fill,
  RiRefreshLine,
} from "react-icons/ri";
import SimpleBtn from "../shared/btn/SimpleBtn";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { useDispatch, useSelector } from "react-redux";
import {
  getPaymentData,
  updatePaymentData,
} from "@/redux/features/payment/paymentDataSlice";
declare global {
  interface document {
    my_modal_3: HTMLFormElement;
  }
}

const SinglePrice = ({ data, seller }: { data: any; seller: any }) => {
  const { name, price, description, deliveryTime, features, revisionType } =
    data;

  // const price: number = 10;
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(price);
  const paymentPage = { totalPrice, quantity, seller };
  console.log(paymentPage);

  useEffect(() => {
    const priceCalculat = price * quantity;
    setTotalPrice(priceCalculat);
  }, [price, quantity]);

  // const passData = () =>{
  //   router.push(`/find-jobs/payment?data=${paymentPage}`)

  // }

  // router
  const router = useRouter();

  // redux
  const paymentData = useSelector(getPaymentData);
  const dispatch = useDispatch();

  // handle payment continue
  const handlePaymentContinue = () => {
    const newPaymentData = {
      totalPrice,
      quantity,
      data,
      packageDetails:{
        name,
        description, 
        deliveryTime,
        revisionType
      },
      seller: {
        name: seller?.seller?.name,
        email: seller?.seller?.email,
      },
    };

    // dispatch the request
    dispatch(updatePaymentData(newPaymentData));
    console.log(paymentData);

    // got to the payment page
    router.push(`/find-jobs/payment/${seller?.jobId}`);
  };

  return (
    <div className="px-2">
      <h3 className="flex items-center justify-between my-8 font-bold">
        {name} <span>${price}</span>
      </h3>
      <p className="mb-8">{description}</p>
      <div className="flex items-center gap-4 lg:gap-8 mb-3 font-bold flex-wrap">
        <p className="flex items-center gap-2">
          <BiTime /> <span>{deliveryTime} delivery</span>
        </p>
        <p className="flex items-center gap-2">
          <RiLoopRightFill /> <span>{revisionType} revision</span>
        </p>
      </div>
      <div>
        {features.map((feature: string, i: number) => (
          <p key={i} className="flex items-center gap-2">
            <FaCheck /> <span>{feature} </span>
          </p>
        ))}
      </div>
      <div className="my-8">
        <SimpleBtn className="w-full text-white">
          <p
            onClick={() => {
              if (document) {
                (
                  document.getElementById("my_modal_3") as HTMLFormElement
                ).showModal();
              }
            }}
            className="flex items-center justify-center gap-2 mx-auto"
          >
            Continue
            <span>
              <FaArrowRight />
            </span>
          </p>
        </SimpleBtn>
      </div>
      <dialog id="my_modal_3" className="modal w-full ">
        <div className="modal-box max-w-4xl relative ">
          <form
            method="dialog "
            className="sticky -top-6 rounded-md bg-gray-100 p-4 "
          >
            <span className="font-bold text-xl ">Order Options </span>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <hr className="border-b border-black mt-3" />

          <div className="border rounded-2xl border-black border-opacity-40 p-3 mt-10">
            <div className="flex justify-between mx-4 mb-4">
              <p className="text-2xl font-bold capitalize">{name}</p>
              <p className="text-2xl font-semibold">${totalPrice}</p>
            </div>
            <p className="mb-8 border-b pb-3 border-sky-200 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              error.
            </p>
            <div className="flex justify-between items-center">
              <h3 className=" md:text-2xl ">Gig Quantity</h3>

              <p className="text-xl md:text-3xl font-semibold">
                {
                  <button
                    disabled={quantity <= 1 && true}
                    className=" text-xl md:text-3xl btn mr-4"
                    onClick={() => setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                }
                {quantity}
                <button
                  className=" text-xl md:text-3xl btn ml-4"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </p>
            </div>
          </div>
          <div className="bg-gray-200 p-3 text-xl  mt-10 rounded-xl">
            <div className="md:flex justify-between items-center">
              <p>
                Gig Orders :
                <span className="text-xl font-bold text-red-700">
                  {" "}
                  X{quantity}
                </span>
              </p>
              <p className="mb-3">
                Total Cost :
                <span className="text-xl font-bold text-red-700">
                  {" "}
                  ${totalPrice}
                </span>
              </p>
            </div>

            <hr className="border-b border-black border-opacity-40 mt-3" />
            <div className="my-10 ">
              <p className=" mb-3 flex items-center gap-2">
                {" "}
                <RiWallet3Fill /> {name} Pakage
              </p>
              <p className="mb-3 flex items-center gap-2">
                <RiTimeLine /> <span>{deliveryTime}delivery</span>{" "}
              </p>
              <p className=" flex items-center gap-2">
                <RiRefreshLine /> <span> {revisionType}</span>
              </p>
            </div>
          </div>
          <div className="my-8 sticky bottom-0">
            <p>please payment confram</p>

            <SimpleBtn className="w-full text-white">
              <button
                // onClick={passData}
                onClick={() => handlePaymentContinue()}
                className="flex items-center md:py-4 md:text-xl justify-center gap-2 mx-auto"
              >
                Continue
                <span>
                  <FaArrowRight />
                </span>
                $({totalPrice})
              </button>
            </SimpleBtn>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SinglePrice;
