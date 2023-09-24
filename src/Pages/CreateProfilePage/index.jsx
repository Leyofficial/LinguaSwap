import React from "react";
import { useState } from "react";
import style from "./CreateProfile.module.scss";

import Header from "../../Components/Header";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Points from "../../Utility/Points";

const CreateProfile = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className={style.points}>
              <Points checked={false} />
              <Points checked={false} />
              <Points checked={false} />
            </div>
            <StepOne nextStep={nextStep} />
          </>
        );

      case 2:
        return (
          <>
            <div className={style.points}>
              <Points checked={true} />
              <Points checked={false} />
              <Points checked={false} />
            </div>
            <StepTwo  previousStep={previousStep} nextStep={nextStep} />
          </>
        );

      case 3:
        return (
          <>
            <div className={style.points}>
              <Points checked={true} />
              <Points checked={true} />
              <Points checked={false} />
            </div>
            <StepThree previousStep={previousStep} />
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <Header navItems={[]} />
      <div className={style.container}>{renderStep()}</div>
    </div>
  );
};

export default CreateProfile;
