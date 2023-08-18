import User from "@/models/usersModel";
import connectMongoDB from "@/utils/connectMongoDB";

export const getUserById = async (userId: string) => {
  await connectMongoDB();
  return User.findById(userId);
};

export const updateUserById = async (userId: string, updateDoc: any) => {
  await connectMongoDB();
  return User.findOneAndUpdate({ _id: userId }, updateDoc);
};
