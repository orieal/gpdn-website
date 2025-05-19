"use client"
import React, { useState } from "react";
import bg from "../assets/signin/registrationBg.png";
import Image from "next/image";
import Step from "@/components/registration/steps/page";
import Personalnfo from "@/components/registration/tabs/personalnfo";
import ProfessionalInfo from "@/components/registration/tabs/ProfessionalInfo";

function Registration() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <Personalnfo onContinue={handleNextStep} />;
      case 1:
        return <ProfessionalInfo onContinue={handleNextStep} />;
      default:
        return <Personalnfo onContinue={handleNextStep} />;
    }
  };

  return (
    <div className="w-full flex h-screen">
      <div className="w-1/2 h-screen">
        <Image alt="" src={bg} className="w-full h-full" />
      </div>
      <div className="w-1/2 h-screen flex flex-col items-center justify-between px-5 py-5">
        <div className="w-full">
          <Step current={currentStep} />
        </div>
        {renderStepContent()}
        <div></div>
      </div>
    </div>
  );
}

export default Registration;
