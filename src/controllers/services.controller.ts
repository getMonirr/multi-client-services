import Service from "@/models/services.model";
import User from "@/models/users.model";
import connectMongoDB from "@/utils/connectMongoDB";
import { NextResponse } from "next/server";

// post a service
export const postService = async (serviceData: Object) => {
  await connectMongoDB();
  const newServices = new Service({
    ...serviceData,
  });

  return newServices.save();
};

// get all services from database by user email
export const getServicesByEmail = async (sellerEmail: string) => {
  await connectMongoDB();

  // find seller
  const seller = await User.findOne({ email: sellerEmail });

  if (!seller) {
    return NextResponse.json({
      error: true,
      message: "Seller not found for this email",
    });
  }

  // get all services for the seller
  const services = await Service.find({ seller: seller._id }).populate(
    "seller"
  );

  if (!services || services.length === 0) {
    return NextResponse.json({
      error: true,
      message: "No services found for this seller email",
    });
  }

  return services;
};

// get all services
export const getServices = async () => {
  await connectMongoDB();
  return Service.find({}).populate("seller");
};

// update service by id
export const updateServiceById = async (id: string, updateData: any) => {
  return Service.updateOne({ _id: id }, updateData);
};

// delete service by id
export const deleteServiceById = async (id: string) => {
  return Service.deleteOne({ _id: id });
};
