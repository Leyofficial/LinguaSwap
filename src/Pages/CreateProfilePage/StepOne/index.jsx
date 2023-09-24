import React from "react";
import CustomButton from "../../../Utility/CustomButton/CustomButton";
import style from './StepOne.module.scss'

const StepOne = (props) => {
  return (
    <div>
      Hello
      <div className={style.buttonOne}>
        <CustomButton
          title={"Next"}
          typeOfButton={"button"}
          callback={props.nextStep}
        />
      </div>
    </div>
  );
};

export default StepOne;
