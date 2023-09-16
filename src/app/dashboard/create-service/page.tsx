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
    <div>
      <SectionStarter
        title="Create Your service"
        description="Input all need description"
      />
      <Stepper activeStep={currentStepIndex}>
        <Step label="Overview" />
        <Step label="Packages" />
        <Step label="Description & FAQ" />
        <Step label="Gallery" />
        <Step label="Publish" />
      </Stepper>
      <div className="flex items-center justify-center">{step}</div>
      <div className="flex items-center justify-end gap-4">
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
