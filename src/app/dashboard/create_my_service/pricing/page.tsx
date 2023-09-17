/* eslint-disable @next/next/no-img-element */
"use client";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import React, { useState } from "react";
import "./style.css";

const Pricing = ({ pricing, prev, next }: any | React.ReactNode) => {
  const [toggle, setToggle] = useState(true);
  // const [pricing, setPricing] = 

  let data = {}

  const [basic, setBasic] = useState({});
  const [standard, setStandard] = useState({});
  const [premium, setPremium] = useState({});

  const [basic_title, setbasic_title] = useState("");
  const [standard_title, setstandard_title] = useState("");
  const [premium_title, setpremium_title] = useState("");

  const [basic_description, setbasic_description] = useState("");
  const [standard_description, setstandard_description] = useState("");
  const [premium_description, setpremium_description] = useState("");

  const [basic_date, set_basic_date] = useState("");
  const [standard_date, set_standard_date] = useState("");
  const [premium_date, set_premium_date] = useState("");

  const savedData = () => {
    // pricing = {basic, standard, premium};
    data = {}
    console.log(pricing);
  };

  console.log(pricing);




  return (
    <div className="mt-[750px] lg:mt-10">
      <div className="lg:flex  items-center gap-10">
        <h1 className="text-3xl font-bold">Pricing</h1>
        {toggle ? (
          <div onClick={() => setToggle(false)}>
            <img className="w-10 h-10" src="https://www.svgrepo.com/show/422282/off-on-on-off-switch.svg" alt="" />
          </div>
        ) : (
          <div onClick={() => setToggle(true)}>
            <img className="w-10 h-10" src="https://www.svgrepo.com/show/132071/on-slider.svg" alt="" />
          </div>
        )}
      </div>
      <div className="lg:flex gap-10 mt-10">
        {/* Basic service */}
        <div className="shadow-2xl p-10   w-full lg:w-96 ">
          <h1 className="text-2xl font-bold">Basic </h1>

          <div className="mt-4">
            <input
              type="text"
              className="border w-full px-2 block py-4 text-lg"
              placeholder="Your Package Name"
              onChange={(e) => setbasic_title(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              className="border w-full px-2 block py-4 text-lg"
              placeholder="Short Description of your service"
              onChange={(e) => setbasic_description(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="">Delivery Date</label>
            <select onChange={(e) => set_basic_date(e.target.value)} name="" className="border block my-3 p-4 w-full" id="">
              <option value="">Select</option>
              <option value="1">1 Day</option>
              <option value="2">2 Day</option>
              <option value="3">3 Day</option>
              <option value="4">4 Day</option>
              <option value="5">5 Day</option>
              <option value="6">6 Day</option>
              <option value="7">7 Day</option>
            </select>
          </div>

        </div>
        {toggle && (
          <div className="lg:flex gap-10">
            {/* Standard package */}
            <div className="shadow-2xl p-10   w-full lg:w-96 ">
              <h1 className="text-2xl font-bold">Standard </h1>

              <div className="mt-4">
                <input
                  type="text"
                  className="border w-full px-2 block py-4 text-lg"
                  placeholder="Your Package Name"
                  onChange={(e) => setstandard_title(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  className="border w-full px-2 block py-4 text-lg"
                  placeholder="Short Description of your service"
                  onChange={(e) => setstandard_description(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="">Delivery Date</label>
                <select onChange={(e) => set_standard_date(e.target.value)} name="" className="border block my-3 p-4 w-full" id="">
                  <option value="">Select</option>
                  <option value="1">1 Day</option>
                  <option value="2">2 Day</option>
                  <option value="3">3 Day</option>
                  <option value="4">4 Day</option>
                  <option value="5">5 Day</option>
                  <option value="6">6 Day</option>
                  <option value="7">7 Day</option>
                </select>
              </div>
            </div>
            {/* Premium service */}
            <div className="shadow-2xl p-10   w-full lg:w-96 ">
              <h1 className="text-2xl font-bold">Premium </h1>

              <div className="mt-4">
                <input
                  type="text"
                  className="border w-full px-2 block py-4 text-lg"
                  placeholder="Your Package Name"
                  onChange={(e) => setpremium_title(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  className="border w-full px-2 block py-4 text-lg"
                  placeholder="Short Description of your service"
                  onChange={(e) => setpremium_description(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="">Delivery Date</label>
                <select onChange={(e) => set_premium_date(e.target.value)} name="" className="border block my-3 p-4 w-full" id="">
                  <option value="">Select</option>
                  <option value="1">1 Day</option>
                  <option value="2">2 Day</option>
                  <option value="3">3 Day</option>
                  <option value="4">4 Day</option>
                  <option value="5">5 Day</option>
                  <option value="6">6 Day</option>
                  <option value="7">7 Day</option>
                </select>
              </div>
            </div>
          </div>
        )}

      </div>
      <div className="flex justify-between items-center mt-10">
        <div onClick={prev}>
          <SimpleBtn>
            Previous
          </SimpleBtn>
        </div>
        <div onClick={next}>
          <div onClick={savedData}>
            <SimpleBtn className="mt-10">
              {/* <Link className="m-10" href="/dashboard/create_my_service/thumbnail"> */}
              Next
              {/* </Link> */}
            </SimpleBtn>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Pricing;