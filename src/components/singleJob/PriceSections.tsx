"use client";
import React from "react";
import { FaArrowRight, FaCheck, FaTimes } from "react-icons/fa";
import SimpleBtn from "../shared/btn/SimpleBtn";

const PriceSections = () => {
  return (
    <div className="border sticky top-[100px]">
      <div className="grid grid-cols-3 gap-4">
        <button className="btn btn-block rounded-none  priceActive">
          Basic
        </button>
        <button className="btn btn-block rounded-none">Standard</button>
        <button className="btn btn-block rounded-none">Premium</button>
      </div>
      <div className="p-8">
        <h3 className="flex items-center justify-between my-8 font-bold">
          Essential <span>$10</span>
        </h3>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, error.
        </p>
        <div className="flex items-center gap-8 mb-3 font-bold">
          <p className="flex items-center gap-2">
            <FaTimes /> <span>1 day delivery</span>
          </p>
          <p className="flex items-center gap-2">
            <FaTimes /> <span>1 day delivery</span>
          </p>
        </div>
        <div>
          <p className="flex items-center gap-2">
            <FaCheck /> <span>1 day delivery</span>
          </p>
          <p className="flex items-center gap-2">
            <FaCheck /> <span>1 day delivery</span>
          </p>
          <p className="flex items-center gap-2">
            <FaCheck /> <span>1 day delivery</span>
          </p>
          <p className="flex items-center gap-2">
            <FaCheck /> <span>1 day delivery</span>
          </p>
        </div>
        <div className="my-8">
          <SimpleBtn className="w-full text-white">
            <p className="flex items-center justify-center gap-2 mx-auto">
              Continue
              <span>
                <FaArrowRight />
              </span>
            </p>
          </SimpleBtn>
        </div>
      </div>
    </div>
  );
};

export default PriceSections;
