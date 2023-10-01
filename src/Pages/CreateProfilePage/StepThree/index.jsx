import React from "react";
import CustomButton from "../../../Utility/CustomButton/CustomButton";
import style from './StepThree.module.scss'

import {
    setLanguagesKnowActionCreater
} from "../../../Redux/Profile/Languages/languagesKnow/setLanguagesKnowActionCreater.js";
import { useSelector} from "react-redux";
import {
    setLanguagesLearnActionCreater
} from "../../../Redux/Profile/Languages/languagesLearn/setLanguagesLearnActionCreater.js";
import CustomSelector from "../../../Utility/CustomSelector/CustomSelector.jsx";

const StepThree = (props) => {
    const languagesKnow = useSelector((state) => state.languagesKnow);
    const languagesLearn = useSelector((state) => state.languagesLearn);


    return (
        <div className={style.wholeContent}>
            <h2 className={style.title}>
                <b>About your language skills :</b>
            </h2>
            <div className={style.container}>
                <div className={style.selectBlock}>
                    <h3 style={{marginBottom: '15px'}}>Language/s you <span className={style.span}>speak</span> :</h3>
                    <CustomSelector selecter={languagesKnow} actionCreater={setLanguagesKnowActionCreater}/>
                </div>
                <div className={style.selectBlock}>
                    <h3 style={{marginBottom: '15px'}}>Language/s you are <span className={style.span}>learning</span> :</h3>
                    <CustomSelector selecter={languagesLearn} actionCreater={setLanguagesLearnActionCreater}/>
                </div>
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
        </div>
    );
};

export default StepThree;
