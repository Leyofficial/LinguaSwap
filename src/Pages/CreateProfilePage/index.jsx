
import style from "./CreateProfile.module.scss";
import firework from '../../img/icons/firework.jpg'
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree/index.jsx";
import Points from "../../Utility/Points";
import ModalWindow from "../../Utility/ModalWindow/ModalWindow.jsx";
import {useState} from "react";

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
            <StepThree previousStep={previousStep} nextStep={nextStep} />
          </>
        );
      case 4 :
        return (
            <>
                {renderPoints(true, true, true)}
                <img className={style.firework} width={'100%'} src={firework} alt=""/>
                <ModalWindow children={ 'Congratulations on registering for our language learning platform! 🎉🥳 We are thrilled to have you join our community! 😀💪'} />

            </>
        )
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