import React from "react";
import CustomButton from "../../../Utility/CustomButton/CustomButton";
import style from './StepThree.module.scss'
import makeAnimated from 'react-select/animated';
import Select  from 'react-select';
import  { languageOptions } from  '../../../Utility/Languages/languages.js'
import  {languageStyles} from '../../../Utility/Languages/languagesStyle.tsx'
import {
    setLanguagesKnowActionCreater
} from "../../../Redux/Profile/Languages/languagesKnow/setLanguagesKnowActionCreater.js";
import {useDispatch, useSelector} from "react-redux";
import {
    setLanguagesLearnActionCreater
} from "../../../Redux/Profile/Languages/languagesLearn/setLanguagesLearnActionCreater.js";
const StepThree = (props) => {
    const animatedComponents = makeAnimated();
    const dispatch = useDispatch()
    const languagesKnow = useSelector((state) => state.languagesKnow);
    const languagesLearn = useSelector((state) => state.languagesLearn);


    return (
        <div className={style.wholeContent}>
            <h2 className={style.title}>
                <b>About your language skills :</b>
            </h2>
            <div className={style.container}>

                <div className={style.selectBlock}>
                    <h3 style={{marginBottom : '15px'}}>Language/s you <span>speak</span> :</h3>
                    <Select
                        onChange={(choice) =>
                            dispatch(setLanguagesKnowActionCreater(choice))
                        }

                        closeMenuOnSelect={true}
                        defaultValue={[...languagesKnow]}
                        components={animatedComponents}
                        isMulti
                        name="languages"
                        options={languageOptions}
                        className={style.multiSelectLanguages}
                        classNamePrefix="select"
                        styles={languageStyles}
                    />
                </div>
                <div className={style.selectBlock}>
                    <h3 style={{marginBottom : '15px'}}>Language/s you are <span>learning</span>  :</h3>
                    <Select
                        onChange={(choice) =>
                            dispatch(setLanguagesLearnActionCreater(choice))
                        }

                        closeMenuOnSelect={true}
                        defaultValue={[...languagesLearn]}
                        components={animatedComponents}
                        isMulti
                        name="languages"
                        options={languageOptions}
                        className={style.multiSelectLanguages}
                        classNamePrefix="select"
                        styles={languageStyles}
                    />
                </div>
                <div className={style.buttonsThree}>
                    <CustomButton
                        title={"Before"}
                        typeOfButton={"button"}
                        callback={props.previousStep}
                    />
                    <CustomButton
                        callback={() => console.log(userChoice)}
                        title={"Save"}
                        typeOfButton={"button"}
                    />
                </div>
            </div>
        </div>
    );
};

export default StepThree;
