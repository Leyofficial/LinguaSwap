import React, {useState} from 'react';
import style from './Create.module.scss'
import Points from "../../../Utility/Points/index.jsx";
import CreateStepOne from "./CreateStepOne/CreateStepOne.jsx";
import CreateStepTwo from "./CreateStepTwo/CreateStepTwo.jsx";
import CreateStepThird from "./CreateStepThird/CreateStepThird.jsx";

const Create = () => {
   const [currentStep, setCurrentStep] = useState(1)
   const [photoCourse, setPhotoCourse] = useState(null)

   const moveStep = (currentStep) => {
      if (currentStep < 3) {
         setCurrentStep(currentStep + 1)
      }
   }

   const moveStepBack = (currentStep) => {
      if (currentStep > 1) {
         setCurrentStep(currentStep - 1)
      }
   }
   return (
      <div className={style.container}>
         <section className={style.stepItems}>
            <Points checked={currentStep > 1}></Points>
            <Points checked={currentStep > 2}></Points>
            <Points></Points>
         </section>

         <article>
            {currentStep === 1 ? <CreateStepOne currentStep={currentStep} setPhoto={setPhotoCourse}
                                                moveStepCallback={moveStep}></CreateStepOne>
               : (currentStep === 2 ? <CreateStepTwo currentStep={currentStep} moveStepCallback={moveStep}
                                                     moveStepBackCallback={moveStepBack}></CreateStepTwo> :
                  <CreateStepThird photoCourse={photoCourse} currentStep={currentStep}
                                   moveStepBackCallback={moveStepBack}></CreateStepThird>)
            }
         </article>
      </div>
   );
};

export default Create;