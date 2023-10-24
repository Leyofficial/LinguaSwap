import React, {useState} from 'react';
import style from './Create.module.scss'
import Points from "../../../Utility/Points/index.jsx";
import CreateStepOne from "./CreateStepOne/CreateStepOne.js";
import CreateStepTwo from "./CreateStepTwo/CreateStepTwo.js";
import CreateStepThird from "./CreateStepThird/CreateStepThird.js";

const Create = () => {
   const [currentStep, setCurrentStep] = useState(1)
   const [photoCourse, setPhotoCourse] = useState("")

   const moveStep = (currentStep : number) => {
      if (currentStep < 3) {
         setCurrentStep(currentStep + 1)
      }
   }

   const moveStepBack = (currentStep : number) => {
      if (currentStep > 1) {
         setCurrentStep(currentStep - 1)
      }
   }
   return (
      <div className={style.container}>
         <section className={style.stepItems}>
            <Points checked={currentStep > 1}></Points>
            <Points checked={currentStep > 2}></Points>
            <Points checked={false}></Points>
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