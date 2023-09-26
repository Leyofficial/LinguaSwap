import React from 'react';
import CustomButton from '../../../Utility/CustomButton/CustomButton'
import style from './StepTwo.module.scss'
const StepTwo = (props) => {
    return (
        <div className={style.container}>
            Halo
            <div className={style.buttonsTwo}>
            <CustomButton title = {'Before'} typeOfButton = {'button'} callback={props.previousStep}/>
            <CustomButton title = {'Next'} typeOfButton = {'button'} callback={props.nextStep}/>
            </div>

        </div>
    );
};

export default StepTwo;