/* eslint-disable @next/next/no-img-element */
"use client";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import React, { useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Pricing = ({setPricing}: object | any) => {
  const [toggle, setToggle] = useState(true);

  let data : string[] | any = [];

  useEffect(() => {
    setPricing(data)
  },[])


  // console.log(data);

  // basic packages state 
  const [basicPackage,setBasicPackage] = useState({})
  const [standardPackage,setStandardPackage] = useState({})
  const [premiumPackage,setPremiumPackage] = useState({})


  const { register, handleSubmit } = useForm()

  const basic_package_submit = (data: object) => {
    // console.log(data);
    setBasicPackage(data);
  }

  const standard_package_submit = (data: object) => {
    // console.log(data);
    setStandardPackage(data);
  }

  const premium_package_submit = (data: object) => {
    // console.log(data);
    setPremiumPackage(data);
  }

  const handleData = () => {
    data = [basicPackage, standardPackage, premiumPackage]

    console.log(data);
  }



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
        <form onSubmit={handleSubmit(basic_package_submit)} className="shadow-2xl p-10  w-96 ">
          <h1 className="text-2xl font-bold">Basic </h1>

          <div className="mt-4">
            <input
              type="text"
              className="border w-full px-2 block py-4 text-lg"
              placeholder="Your Package Name"
              {...register("name")}
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              className="border w-full px-2 block py-4 text-lg"
              placeholder="Short Description of your service"
              {...register("description")}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="">Delivery Date</label>
            <input
              type="text"
              className="border w-full px-2 block py-4 text-lg"
              placeholder="Delivery in 2 days"
              defaultValue={"Delivery In "}
              {...register("time")}
            />
          </div>
          <SimpleBtn className="mt-6">
            <input type="submit" value="Save" />
          </SimpleBtn>
        </form>
        {toggle && (
          <div className="flex gap-10">
            {/* Standard package */}
            <form onSubmit={handleSubmit(standard_package_submit)} className="shadow-2xl p-10  w-96 ">
              <h1 className="text-2xl font-bold">Standard </h1>

              <div className="mt-4">
                <input
                  type="text"
                  className="border w-full px-2 block py-4 text-lg"
                  placeholder="Your Package Name"
                  {...register("name")}
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  className="border w-full px-2 block py-4 text-lg"
                  placeholder="Short Description of your service"
                  {...register("description")}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="">Delivery Date</label>
                <input
                  type="text"
                  className="border w-full px-2 block py-4 text-lg"
                  placeholder="Delivery in 2 days"
                  defaultValue={"Delivery In "}
                  {...register("time")}
                />
              </div>
              <SimpleBtn className="mt-6">
                <input type="submit" value="Save" />
              </SimpleBtn>
            </form>
            {/* Premium service */}
            <form onSubmit={handleSubmit(premium_package_submit)} className="shadow-2xl p-10  w-96 ">
              <h1 className="text-2xl font-bold">Premium </h1>

              <div className="mt-4">
                <input
                  type="text"
                  className="border w-full px-2 block py-4 text-lg"
                  placeholder="Your Package Name"
                  {...register("name")}
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  className="border w-full px-2 block py-4 text-lg"
                  placeholder="Short Description of your service"
                  {...register("description")}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="">Delivery Date</label>
                <input
                  type="text"
                  className="border w-full px-2 block py-4 text-lg"
                  placeholder="Delivery in 2 days"
                  defaultValue={"Delivery In "}
                  {...register("time")}
                />
              </div>
              <SimpleBtn className="mt-6">
                <input type="submit" value="Save" />
              </SimpleBtn>
            </form>
          </div>
        )}

      </div>
      <div onClick={handleData}>
        <SimpleBtn className="mt-10">
          {/* <Link className="m-10" href="/dashboard/create_my_service/thumbnail"> */}
          Save & Continue
          {/* </Link> */}
        </SimpleBtn>
      </div>
    </div>
  );
};

export default Pricing;