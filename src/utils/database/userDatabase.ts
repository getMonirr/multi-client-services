import User from "@/models/usersModel";
import connectMongoDB from "@/utils/connectMongoDB";

// get user by Id
export const getUserById = async (userId: string) => {
  await connectMongoDB();
  return User.findById(userId);
};

// update user by Id
export const updateUserById = async (userId: string, updateDoc: any) => {
  await connectMongoDB();
  return User.findOneAndUpdate({ _id: userId }, updateDoc);
};

// delete user by id
export const deleteUserById = async (userId: string) => {
  await connectMongoDB();
  return User.deleteOne({ _id: userId });
};
