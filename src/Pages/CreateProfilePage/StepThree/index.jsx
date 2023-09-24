import React from "react";
import CustomButton from "../../../Utility/CustomButton/CustomButton";
import style from './StepThree.module.scss'


const StepThree = (props) => {
  return (
    <div>
      Bonjour
      <div className={style.buttonsThree}>
        <CustomButton
          title={"Before"}
          typeOfButton={"button"}
          callback={props.previousStep}
        />
         <CustomButton
          title={"Save"}
          typeOfButton={"button"}
          callback={props.nextStep}
        />
      </div>
    </div>
  );
};

export default StepThree;
