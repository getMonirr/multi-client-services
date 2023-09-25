import React from "react";
import UserInfo from "./UserInfo";
import SimpleBtn from "../shared/btn/SimpleBtn";

const AboutSeller = ({ seller }: { seller: any }) => {
  const { address, languages } = seller;
  return (
    <div className="my-16">
      <h2 className="text-xl font-bold">About the seller</h2>
      <UserInfo seller = {seller} />
      <SimpleBtn className="text-white mt-8">Contact me</SimpleBtn>
      <div className="border-[1px] p-4 rounded-md divide-y space-y-4 mt-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="">From</p>
            <p className="font-bold">{address?.country}</p>
          </div>
          <div>
            <p className="">Avg. response time</p>
            <p className="font-bold">1 Hour</p>
          </div>
          <div>
            <p className="">Languages</p>
            <p className="font-bold">
              {languages?.map((language: string, index: number) => (
                <span key={index}> {language}</span>
              ))}
            </p>
          </div>
          <div>
            <p className="">Member since</p>
            <p className="font-bold">Aug {new Date().getFullYear()}</p>
          </div>
          <div>
            <p className="">Last delivery</p>
            <p className="font-bold">about 2 hours</p>
          </div>
        </div>
        <div>
          <p className="pt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            reprehenderit veritatis, commodi incidunt corrupti, perferendis, at
            reiciendis consectetur eum deserunt dolor provident et! Debitis,
            officiis! Officiis tempore sunt quas nobis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSeller;
