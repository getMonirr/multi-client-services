import {
  getStep,
  gotoStep,
  nextStep,
  prevStep,
} from "@/redux/features/multi-step-form/multiStepFormSlice";
import { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useMultiStepForm = (steps: ReactElement[]) => {
  const currentStepIndex = useSelector(getStep);
  const dispatch = useDispatch();

  const next = () => {
    if (!(currentStepIndex >= steps.length - 1)) dispatch(nextStep());
  };

  const back = () => {
    if (!(currentStepIndex <= 0)) dispatch(prevStep());
  };

  const goTo = (index: number) => {
    dispatch(gotoStep(index));
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
};
