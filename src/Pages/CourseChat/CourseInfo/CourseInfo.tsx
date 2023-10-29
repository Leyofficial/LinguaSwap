import React from 'react';
import style from './CourseInfo.module.scss'
import CustomButton from "../../../Utility/CustomButton/CustomButton.jsx";
import {useNavigate} from "react-router-dom";
const CourseInfo = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

   return (
      <div className={style.container}>
         <h3>INFO</h3>
         <div className={style.info}>
             <div className={style.back}>
                 <CustomButton callback={goBack}  title={"Go Back"}></CustomButton>
             </div>
            <div>Will be develop in the future</div>
         </div>
      </div>
   );
};

export default CourseInfo;