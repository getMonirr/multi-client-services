import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export interface paymentType {
  totalPrice: number;
  quantity: number;
  seller: {
    email: string;
    name: string;
  };
}

const initialState: paymentType = {
  totalPrice: 0,
  quantity: 0,
  seller: {
    email: "",
    name: "",
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
