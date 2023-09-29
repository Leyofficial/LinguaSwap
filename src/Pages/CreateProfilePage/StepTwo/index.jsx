import CustomButton from "../../../Utility/CustomButton/CustomButton";
import style from "./StepTwo.module.scss";
import {Avatar} from "@mui/material";
import {ImageInput} from "../../../Utility/InputImage/InputImage.jsx";

const StepTwo = (props) => {
    return (
        <div className={style.wholeContent}>
            <h2 className={style.title}>
                <b>Make your profile beautiful !</b>
            </h2>
            <div className={style.container}>
                <div className={style.containerBlock}>
                    <ImageInput/>
                </div>
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
        </div>
);
};

export default StepTwo;
