/* eslint-disable @next/next/no-img-element */
"use client";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import React, { useState } from "react";
import "./style.css";

const Pricing = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="mt-10">
      <div className="flex  items-center gap-10">
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
      <div className="flex gap-10 mt-10">
        {/* Basic service */}
        <form className="shadow-2xl p-10  w-96 ">
          <h1 className="text-2xl font-bold">Basic </h1>

          <div className="mt-4">
            <input
              type="text"
              className="border w-full px-2 block py-4 text-lg"
              placeholder="Your Package Name"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              className="border w-full px-2 block py-4 text-lg"
              placeholder="Short Description of your service"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="">Delivery Date</label>
            <input
              type="text"
              className="border w-full px-2 block py-4 text-lg"
              placeholder="Delivery in 2 days"
              defaultValue={"Delivery In"}
            />
          </div>
          <SimpleBtn className="mt-6">
            <input type="submit" value="Save" />
          </SimpleBtn>
        </form>
        {toggle && (
          <div className="flex gap-10">
            {/* Standard package */}
            <form className="shadow-2xl p-10  w-96 ">
              <h1 className="text-2xl font-bold">Standard </h1>

              <div className="mt-4">
                <input
                  type="text"
                  className="border w-full px-2 block py-4 text-lg"
                  placeholder="Your Package Name"
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  className="border w-full px-2 block py-4 text-lg"
                  placeholder="Short Description of your service"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="">Delivery Date</label>
                <input
                  type="text"
                  className="border w-full px-2 block py-4 text-lg"
                  placeholder="Delivery in 2 days"
                  defaultValue={"Delivery In"}
                />
              </div>
              <SimpleBtn className="mt-6">
                <input type="submit" value="Save" />
              </SimpleBtn>
            </form>
            {/* Premium service */}
            <form className="shadow-2xl p-10  w-96 ">
              <h1 className="text-2xl font-bold">Premium </h1>

              <div className="mt-4">
                <input
                  type="text"
                  className="border w-full px-2 block py-4 text-lg"
                  placeholder="Your Package Name"
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  className="border w-full px-2 block py-4 text-lg"
                  placeholder="Short Description of your service"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="">Delivery Date</label>
                <input
                  type="text"
                  className="border w-full px-2 block py-4 text-lg"
                  placeholder="Delivery in 2 days"
                  defaultValue={"Delivery In"}
                />
              </div>
              <SimpleBtn className="mt-6">
                <input type="submit" value="Save" />
              </SimpleBtn>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pricing;
