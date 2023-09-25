import { configureStore } from "@reduxjs/toolkit";
import multiStepFormReducer from "@/redux/features/multi-step-form/multiStepFormSlice";
import multiStepFormDataReducer from "@/redux/features/multi-step-form/multiStepFormDataSlice";
import paymentDataReducer from "@/redux/features/payment/paymentDataSlice";

export const store = configureStore({
  reducer: {
    multiStepForm: multiStepFormReducer,
    multiStepFormData: multiStepFormDataReducer,
    paymentData: paymentDataReducer,
  },
});
// console.log("data")
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
