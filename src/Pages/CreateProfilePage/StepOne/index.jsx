import React from "react";
import CustomButton from "../../../Utility/CustomButton/CustomButton";
import style from "./StepOne.module.scss";
import CustomInput from "../../../Utility/CustomInput/CustomInput";

const StepOne = (props) => {
  return (
    <div className={style.container}>
      <div className={style.inputBlock}>
        <CustomInput placeholder={"Type your name"} />
        <CustomInput placeholder={"Type your user tag  #"} heg={true} />
      </div>

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
