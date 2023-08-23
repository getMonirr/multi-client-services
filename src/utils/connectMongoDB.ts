import mongoose from "mongoose";

const connectMongoDB = async () => {
  await mongoose.connect(`${process.env.MONGODB_URI}`);
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
};

export default connectMongoDB;
