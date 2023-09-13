import Service from "@/models/service.model";
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

  // get all services for the seller
  const services = await Service.find({ sellerEmail })
    .populate("reviews.user") // Populate reviews.user field within the array
    .populate("orderQueue.user"); // Populate orderQueue.user field within the array;

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
  return Service.find({})
    .populate("reviews.user") // Populate reviews.user field within the array
    .populate("orderQueue.user"); // Populate orderQueue.user field within the array;;
};

// update service by id
export const updateServiceById = async (id: string, updateData: any) => {
  return Service.updateOne({ _id: id }, updateData);
};

// delete service by id
export const deleteServiceById = async (id: string) => {
  return Service.deleteOne({ _id: id });
};
