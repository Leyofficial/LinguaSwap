import React, {useState} from 'react';
import style from './Create.module.scss'
import Points from "../../../Utility/Points/index.jsx";
import CreateStepOne from "./CreateStepOne/CreateStepOne.jsx";
import CreateStepTwo from "./CreateStepTwo/CreateStepTwo.jsx";
import CreateStepThird from "./CreateStepThird/CreateStepThird.jsx";

const Create = () => {
   const [currentStep, setCurrentStep] = useState(1)

   const moveStep = (currentStep) => {
      if (currentStep < 3) {
         setCurrentStep(currentStep + 1)
      }
   }

   const moveStepBack = (currentStep) => {
      if(currentStep > 1) {
         setCurrentStep(currentStep -1)
      }
   }
   return (
      <div className={style.container}>
         <section className={style.stepItems}>
            <Points></Points>
            <Points></Points>
            <Points></Points>
         </section>

         <article>
            {currentStep === 1 ? <CreateStepOne currentStep={currentStep}
                                                moveStepCallback={moveStep}></CreateStepOne>
               : (currentStep === 2 ? <CreateStepTwo currentStep={currentStep} moveStepCallback={moveStep} moveStepBackCallback={moveStepBack}></CreateStepTwo> :
                  <CreateStepThird currentStep={currentStep} moveStepBackCallback={moveStepBack}></CreateStepThird>)
            }
         </article>
      </div>
   );
};

export default Create;