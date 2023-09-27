
import CustomButton from "../../../Utility/CustomButton/CustomButton";
import style from "./StepTwo.module.scss";
const StepTwo = (props) => {
  return (
    <>
      <h2 className={style.title}>
        <b>Education</b> (option)
      </h2>
      <div className={style.container}>
        <div className={style.buttonsTwo}>
          <CustomButton
            title={"Before"}
            typeOfButton={"button"}
            callback={props.previousStep}
          />
          <CustomButton
            title={"Next"}
            typeOfButton={"button"}
            callback={props.nextStep}
          />
        </div>
      </div>
    </>
  );
};

export default StepTwo;
