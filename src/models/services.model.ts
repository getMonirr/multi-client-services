import mongoose, { Schema, model, models } from "mongoose";

// Define the schema for a Gig / services
const servicesSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  deliveryTime: {
    type: Number,
    required: true,
  },
  revisions: {
    type: Number,
    required: true,
  },
  tags: [
    {
      type: String,
      trim: true,
    },
  ],
  isActive: {
    type: Boolean,
    default: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

// Create the Gig model
const Service = models.Services || model("Services", servicesSchema);

export default Service;
