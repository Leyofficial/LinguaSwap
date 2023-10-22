import style from "./CreateProfile.module.scss";
import firework from '../../img/icons/firework.jpg'
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Points from "../../Utility/Points";
import ModalWindow from "../../Utility/ModalWindow/ModalWindow.js";
import {FC, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import Login from "../../Components/Login/Login.jsx";

const CreateProfile: FC = () => {
    const isAuth = useTypedSelector((state) => state.isAuth);
    const [currentStep, setCurrentStep] = useState<number>(1);

    const nextStep = (): void => {
        setCurrentStep(currentStep + 1);
    };

    const previousStep = () : void => {
        setCurrentStep(currentStep - 1);
    };
    const renderPoints = (step1: boolean, step2: boolean, step3: boolean) => (
        <div className={style.points}>
            {[step1, step2, step3].map((step: boolean, index: number) => (
                <Points key={index} checked={step} />
            ))}
        </div>
    );

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <>
                        {renderPoints(false, false, false)}
                        <StepOne nextStep={nextStep}/>
                    </>
                );

            case 2:
                return (
                    <>
                        {renderPoints(true, false, false)}
                        <StepTwo previousStep={previousStep} nextStep={nextStep}/>
                    </>
                );

            case 3:
                return (
                    <>
                        {renderPoints(true, true, false)}
                        <StepThree previousStep={previousStep} nextStep={nextStep}/>
                    </>
                );
            case 4 :
                return (
                    <>
                        {renderPoints(true, true, true)}
                        <img className={style.firework} width={'100%'} src={firework} alt=""/>
                        <ModalWindow children={'Congratulations on registering for our language learning platform! 🎉🥳 We are thrilled to have you join our community! 😀💪'}/>
                    </>
                )
            default:
                return null;
        }
    };

    return (
        <div>
            {isAuth ? <div className={style.container}>{renderStep()}</div> : <Login/>}
        </div>
    );
};

export default CreateProfile;