import React from "react";
import getDataFromDB from "@/utils/getDataFromDB";
import { headers } from "next/headers";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import SellerSingleServices from "@/components/Dashboard/seller/SellerSingleServices";

const Dashboard = async () => {
  const session = await getServerSession(options);
  const host = headers().get("host");
  const sellerServices = await getDataFromDB(
    `http://${host}/api/services?email=${session?.user?.email}`
  );
  return (
    <div>
      <div className="text-start space-y-4 w-full px-4 my-16 flex flex-col items-center justify-center lg:mb-16 ">
        <p className="text-[#226CE5] uppercase">Here is your all services</p>
        <h1 className="text-3xl lg:text-5xl font-bold capitalize">
          My services
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        {(sellerServices.data &&
          Array.isArray(sellerServices.data) &&
          sellerServices?.data.map((service: any) => (
            <SellerSingleServices key={service._id} service={service} />
          ))) || (
          <h1 className="text-xl font-bold text-center">
            Currently you do not have any service
          </h1>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
