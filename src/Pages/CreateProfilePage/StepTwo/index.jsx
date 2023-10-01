import CustomButton from "../../../Utility/CustomButton/CustomButton";
import style from "./StepTwo.module.scss";
import {Avatar} from "@mui/material";
import {ImageInput} from "../../../Utility/InputImage/InputImage.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setPhotoAC} from "../../../Redux/Profile/Photo/setPhotoAC.js";

const StepTwo = (props) => {
    const name = useSelector((state) => state.name)
    const photo = useSelector((state) => state.photo)

    return (
        <div className={style.wholeContent}>
            <h2 className={style.title}>
                <b>Make your profile beautiful !</b>
            </h2>
            <div className={style.container}>
                <div className={style.containerBlock}>
                    <ImageInput selector={photo} actionCreater={setPhotoAC}  avatarText={name}/>
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
