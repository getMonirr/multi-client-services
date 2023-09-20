import mongoose from "mongoose";

// Define the schema for the Service model
const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  sellerEmail: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "pending", "pause"],
  },
  orderQueue: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
      },
      orderDate: Date,
    },
  ],
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  tags: [String],
  faqs: [
    {
      question: String,
      answer: String,
    },
  ],
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
      },
      rating: Number,
      comment: String,
    },
  ],
  images: [String],
  packages: {
    basic: {
      name: String,
      price: Number,
      description: String,
      deliveryTime: String,
      features: [String],
      revisionType: {
        type: mongoose.Schema.Types.Mixed, // Allow either number or string
      },
    },
    standard: {
      name: String,
      price: Number,
      description: String,
      deliveryTime: String,
      features: [String],
      revisionType: {
        type: mongoose.Schema.Types.Mixed, // Allow either number or string
      },
    },
    premium: {
      name: String,
      price: Number,
      description: String,
      deliveryTime: String,
      features: [String],
      revisionType: {
        type: mongoose.Schema.Types.Mixed, // Allow either number or string
      },
    },
  },
});

// Create a Service model using the schema
const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;

const servicesDummyDataExample = [
  {
    title: "Website Design",
    description: "I will create a stunning website for your business.",
    sellerEmail: "john@example.com",
    orderQueue: [],
    category: "Web Development",
    subCategory: "Front-End Development",
    faqs: [
      {
        question: "What's included in the design?",
        answer:
          "The design includes a custom homepage, contact page, and up to 5 additional pages.",
      },
      {
        question: "Do you provide hosting?",
        answer: "No, hosting is not included.",
      },
    ],
    reviews: [
      {
        user: "611e014a5f490a5a8c623db2",
        rating: 4.8,
        comment: "Amazing work! Very responsive and creative.",
      },
      {
        user: "611e014a5f490a5a8c623db3",
        rating: 4.5,
        comment: "Great design, but a bit delayed on delivery.",
      },
    ],
    images: [
      "https://example.com/service1_1.jpg",
      "https://example.com/service1_2.jpg",
      "https://example.com/service1_3.jpg",
    ],
    packages: {
      basic: {
        name: "Basic",
        price: 250,
        description: "Essential website with basic features.",
        deliveryTime: "5 days",
        features: ["Custom homepage", "Contact page"],
        revisionType: 3,
      },
      standard: {
        name: "Standard",
        price: 400,
        description: "Standard website with more features.",
        deliveryTime: "7 days",
        features: [
          "Custom homepage",
          "Contact page",
          "Up to 5 additional pages",
        ],
        revisionType: "unlimited",
      },
      premium: {
        name: "Premium",
        price: 600,
        description: "Premium website with advanced features.",
        deliveryTime: "10 days",
        features: [
          "Custom homepage",
          "Contact page",
          "Up to 10 additional pages",
          "SEO optimization",
        ],
        revisionType: "unlimited",
      },
    },
  },
  // Add more services here...
];