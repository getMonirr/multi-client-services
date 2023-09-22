import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export interface multiStepFormState {
  currentStep: number;
}

const initialState: multiStepFormState = {
  currentStep: 0,
};

const multiStepFormSlice = createSlice({
  name: "multiStepForm",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep = state.currentStep + 1;
    },
    prevStep: (state) => {
      state.currentStep = state.currentStep - 1;
    },
    gotoStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});
console.log("data")
export const getStep = (state: RootState) => state.multiStepForm.currentStep;

export const { nextStep, prevStep, gotoStep } = multiStepFormSlice.actions;

export default multiStepFormSlice.reducer;
