"use client";
/* eslint-disable react/jsx-key */
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { Stepper, Step } from "react-form-stepper";
import OverviewUpdate from "@/components/Dashboard/update-service/OverviewUpdate";
import UpdatePackages from "@/components/Dashboard/update-service/UpdatePackages";
import UpdateDescriptionAndFAQ from "@/components/Dashboard/update-service/UpdateDescriptionAndFAQ";
import UpdateGallery from "@/components/Dashboard/update-service/UpdateGallery";
import { useSearchParams } from "next/navigation";

const UpdateService = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // use multiStep form
  const { FormStep, next, back, currentStepIndex, isFirstStep, isLastStep } =
    useMultiStepForm([
      <OverviewUpdate id={id} />,
      <UpdatePackages id={id} />,
      <UpdateDescriptionAndFAQ id={id} />,
      <UpdateGallery id={id} />,
    ]);

  return (
    <div className="lg:px-28">
      <div className="text-start space-y-4 w-full px-4 my-16 flex flex-col items-center justify-center lg:mb-16 ">
        <p className="text-[#226CE5] uppercase">Your service</p>
        <h1 className="text-3xl lg:text-5xl font-bold capitalize">
          update your Services
        </h1>
      </div>
      <Stepper
        activeStep={currentStepIndex}
        styleConfig={{
          activeBgColor: "#226CE5",
          completedBgColor: "#198754",
          activeTextColor: "#ffffff",
          completedTextColor: "#ffffff",
          inactiveBgColor: "#e0e0e0",
          inactiveTextColor: "#ffffff",
          size: "2em",
          circleFontSize: "1rem",
          labelFontSize: "0.875rem",
          borderRadius: "50%",
          fontWeight: 500,
        }}
      >
        <Step label="Overview" />
        <Step label="Packages" />
        <Step label="Description & FAQ" />
        <Step label="Gallery" />
      </Stepper>
      <div className="flex items-center justify-center">{FormStep}</div>
      <div className="flex items-center justify-end my-8 gap-4">
        <button className="btn btn-sm" disabled={isFirstStep} onClick={back}>
          Prev
        </button>
        <button className="btn btn-sm" disabled={isLastStep} onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UpdateService;
