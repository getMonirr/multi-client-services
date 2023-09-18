"use client";
/* eslint-disable react/jsx-key */
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import React from "react";
import Packages from "@/components/Dashboard/create-service/form/Packages";
import Overview from "@/components/Dashboard/create-service/form/Overview";
import DescriptionAndFAQ from "@/components/Dashboard/create-service/form/DescriptionAndFAQ";
import Gallery from "@/components/Dashboard/create-service/form/Gallery";
import Publish from "@/components/Dashboard/create-service/form/Publish";
import { Stepper, Step } from "react-form-stepper";
import SectionStarter from "@/components/shared/SectionStarter";

const CreateService = () => {
  const { step, next, back, currentStepIndex, isFirstStep, isLastStep } =
    useMultiStepForm([
      <Overview />,
      <Packages />,
      <DescriptionAndFAQ />,
      <Gallery />,
      <Publish />,
    ]);

  return (
    <div className="lg:px-28">
      <div className="text-start space-y-4 w-full px-4 my-16 flex flex-col items-center justify-center lg:mb-16 ">
        <p className="text-[#226CE5] uppercase">Start Your career</p>
        <h1 className="text-3xl lg:text-5xl font-bold capitalize">
          Create your Services
        </h1>
      </div>
      <Stepper
        activeStep={currentStepIndex}
        // connectorStateColors
        // connectorStyleConfig={{
        //   activeColor: "#226CE5",
        //   disabledColor: "#4267B2",
        //   completedColor: "fff",
        //   size: 2,
        //   style: "font-size",
        // }}
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
        <Step label="Publish" className="text-yellow-400" />
      </Stepper>
      <div className="flex items-center justify-center">{step}</div>
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

export default CreateService;
