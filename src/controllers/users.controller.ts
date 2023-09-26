import User from "@/models/users.model";
import connectMongoDB from "@/utils/connectMongoDB";

// get all users
export const getAllUser = async () => {
  await connectMongoDB();
  return User.find({});
};

// get user by Id
export const getUserById = async (userId: string) => {
  await connectMongoDB();
  return User.findById(userId);
};

// post or save a user in MongoDB database
export const postUser = async (userData: Object) => {
  await connectMongoDB();
  const newUser = new User({
    ...userData,
  });
  return newUser.save();
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

// get user by email
export const getUserByEmail = async (email: string) => {
  await connectMongoDB();
  return User.findOne({ email });
};
