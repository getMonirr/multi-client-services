import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface ServicePackage {
  name: string;
  price: number;
  description: string;
  deliveryTime: string;
  features: string[];
  revisionType: number | string;
}

export interface ServiceState {
  title: string;
  description: string;
  sellerEmail: string;
  orderQueue: {
    user: string;
    orderDate: Date;
  }[];
  tags: string[];
  category:
    | "Web Development"
    | "Mobile App Development"
    | "Graphic Design"
    | "Writing & Translation"
    | "Other";
  subCategory:
    | "Front-End Development"
    | "Back-End Development"
    | "iOS App Development"
    | "Android App Development"
    | "Logo Design"
    | "Content Writing"
    | "Other";
  faqs: {
    question: string;
    answer: string;
  }[];
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
  images: string[];
  packages: {
    basic: ServicePackage;
    standard: ServicePackage;
    premium: ServicePackage;
  };
}

const initialState: ServiceState = {
  title: "",
  description: "",
  sellerEmail: "",
  orderQueue: [],
  category: "Web Development",
  subCategory: "Front-End Development",
  tags: [],
  faqs: [],
  reviews: [],
  images: [],
  packages: {
    basic: {
      name: "",
      price: 0,
      description: "",
      deliveryTime: "",
      features: [],
      revisionType: 0,
    },
    standard: {
      name: "",
      price: 0,
      description: "",
      deliveryTime: "",
      features: [],
      revisionType: 0,
    },
    premium: {
      name: "",
      price: 0,
      description: "",
      deliveryTime: "",
      features: [],
      revisionType: 0,
    },
  },
};
// console.log("data")
const multiStepFormDataSlice = createSlice({
  name: "multiStepFormData",
  initialState,
  reducers: {
    updateServiceData: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const getServiceData = (state: RootState) => state.multiStepFormData;

export const { updateServiceData } = multiStepFormDataSlice.actions;

export default multiStepFormDataSlice.reducer;
