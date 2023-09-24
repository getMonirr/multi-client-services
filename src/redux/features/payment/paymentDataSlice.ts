import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export interface paymentType {
  totalPrice: number;
  quantity: number;
  buyer: {
    name: string;
    email: string;
  };
  seller: {
    email: string;
    name: string;
    serviceId: string;
  };
}

const initialState: paymentType = {
  totalPrice: 0,
  quantity: 0,
  buyer: {
    name: "",
    email: "",
  },
  seller: {
    email: "",
    name: "",
    serviceId: "",
  },
};

const paymentDataSlice = createSlice({
  name: "paymentData",
  initialState,
  reducers: {
    updatePaymentData: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});
// console.log("data")
export const getPaymentData = (state: RootState) => state.paymentData;

export const { updatePaymentData } = paymentDataSlice.actions;

export default paymentDataSlice.reducer;
