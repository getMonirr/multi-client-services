"use client";
import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import SimpleBtn from "../shared/btn/SimpleBtn";
import Swal from "sweetalert2";

const ChackOut = () => {
  const [cardError, setCardError] = useState<string>("");
  const [paymentId, setPaymentId] = useState<string>("")
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentId("")
    setCardError("")

    if (!stripe || !elements) {
      return;
    }

    // const result = await stripe.createToken(elements.getElement(CardElement));

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    // const  = await stripe.createPaymentMethod({
    //   type: "card",
    //   card
    // })

    if (error) {
      console.log("error", error);
      const err: string = error.message;
      setCardError(err);
    } else {
      if(paymentMethod.id){
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: `your Payment is successfull `,
          showConfirmButton: false,
          timer: 2500
        })
        setPaymentId(paymentMethod.id)
      }
      console.log("payment method", paymentMethod);
    }
  };
  return (
    <div className="md:w-2/3 w-full h-48 mt-6 mx-auto relative">
      <form onSubmit={handleSubmit}>
        <div className="">
          <CardElement />
        </div>
        <div className="mt-4 absolute bottom-0 right-0">
          <button className="w-full px-6 btn btn-primary" type="submit">
            Confram Pay
          </button>
        </div>
        {paymentId && <p className=" text-lg mt-6">your payment id:  <span className="text-green-500">({paymentId})</span></p>}
        {cardError && <p className="text-red-500 mt-6 ">{cardError}</p>}
      </form>
    </div>
  );
};

export default ChackOut;
