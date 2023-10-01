import React, { useState } from "react";
import style from "./CreateProfile.module.scss";

import Header from "../../Components/Header";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree/index.jsx";
import Points from "../../Utility/Points";

const CreateProfile = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderPoints = (step1, step2, step3) => {
    return (
      <div className={style.points}>
        <Points checked={step1} />
        <Points checked={step2} />
        <Points checked={step3} />
      </div>
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            {renderPoints(false, false, false)}
            <StepOne nextStep={nextStep} />
          </>
        );

      case 2:
        return (
          <>
            {renderPoints(true, false, false)}
            <StepTwo previousStep={previousStep} nextStep={nextStep} />
          </>
        );

      case 3:
        return (
          <>
            {renderPoints(true, true, false)}
            <StepThree previousStep={previousStep} />
          </>
        );
      default:
        return null;
    }
  };
  
  return (
    <div>
      <div className={style.container}>{renderStep()}</div>
    </div>
  );
};

export default CreateProfile;