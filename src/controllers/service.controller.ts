import Service from "@/models/service.model";
import User from "@/models/users.model";
import connectMongoDB from "@/utils/connectMongoDB";
import { ObjectId } from "mongodb";
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

  const services = await Service.aggregate([
    {
      $match: { sellerEmail },
    },
    {
      $lookup: {
        from: "users", // The name of the User collection
        localField: "seller", // The field in the Service collection
        foreignField: "_id", // The field in the User collection
        as: "seller", // The alias for the populated field
      },
    },
    {
      $unwind: "$seller", // Unwind the seller array created by $lookup
    },
  ]);

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
  const results = await Service.aggregate([
    {
      $match: {}, // Match all documents
    },
    {
      $lookup: {
        from: "users", // The name of the User collection
        localField: "seller", // The field in the Service collection
        foreignField: "_id", // The field in the User collection
        as: "seller", // The alias for the populated field
      },
    },
    {
      $unwind: "$seller", // Unwind the seller array created by $lookup
    },
  ]);
  return results;
};

// update service by id
export const updateServiceById = async (id: string, updateData: any) => {
  return Service.updateOne({ _id: id }, updateData);
};

// delete service by id
export const deleteServiceById = async (id: string) => {
  return Service.deleteOne({ _id: id });
};

// get popular services
export const getPopularServices = async () => {
  await connectMongoDB();
  const result = await Service.find({})
    .select({
      category: 1,
      _id: 1,
      title: 1,
      images: 1,
    })
    .limit(10);
  return result;
};

// get category statistics
export const getCategoriesStatistic = async () => {
  await connectMongoDB();
  const result = await Service.aggregate([
    {
      $group: {
        _id: "$category",
        count: { $sum: 1 },
        avgRating: { $avg: "$reviews.ratings" },
      },
    },
    {
      $project: {
        category: "$_id",
        count: 1,
        avgRating: 1,
        _id: 0,
      },
    },
  ]);
  return result;
};

// power full search functionality
export const powerFullSearch = async (searchQuery: string) => {
  await connectMongoDB();
  const results = await Service.aggregate([
    {
      $search: {
        index: "default",
        text: {
          query: searchQuery,
          path: {
            wildcard: "*",
          },
        },
      },
    },
    {
      $lookup: {
        from: "users", // The name of the User collection
        localField: "seller", // The field in the Service collection
        foreignField: "_id", // The field in the User collection
        as: "seller", // The alias for the populated field
      },
    },
    {
      $unwind: "$seller", // Unwind the seller array created by $lookup
    },
  ]);

  return results;
};

// get service by id
export const getServiceById = async (id: string) => {
  await connectMongoDB();

  const objectId = new ObjectId(id);

  const result = await Service.aggregate([
    {
      $match: { _id: objectId },
    },
    {
      $lookup: {
        from: "users",
        localField: "seller",
        foreignField: "_id",
        as: "seller",
      },
    },
    {
      $unwind: "$seller",
    },
  ]);
  return result;
};
