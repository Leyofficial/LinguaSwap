import React from 'react';
import style from './CourseHeader.module.scss'
import {Toaster} from "react-hot-toast";
import memberImage from "../../../images/member.png";
import {Stack, Step, StepLabel, Stepper} from "@mui/material";
import {ColorlibConnector, ColorlibStepIcon} from "../../../Utility/ProgressCourse/ProgressCourse.tsx";
import {useSelector} from "react-redux";

const CourseHeader = ({joinHandler, errorJoin}) => {

   const loginUser = useSelector((state) => state.loginUser)
   const currentCourse = useSelector((state) => state.currentCourse)
   const steps = ['Group Recruitment', 'Start of the course', 'Finish of the  course']
   return (
      <div className={style.containerHeader}>

         <div className={style.headerTitle}>
            <div className={style.wrapperTitle}>
               <h1>{currentCourse?.course.name}</h1>
               <button onClick={() => joinHandler(loginUser._id)}>Join to course</button>
               {errorJoin ? <Toaster position="top-right" reverseOrder={false}/> : null}
            </div>


            <div className={style.image}>
               <img src={memberImage} alt={'members'}/>
               <p>{currentCourse?.teacher.name}</p>
            </div>

            <div className={style.stepsWrapper}>
               <Stack sx={{width: '100%'}} spacing={4}>
                  <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector/>}>
                     {steps.map((label) => (
                        <Step key={label}>
                           <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                        </Step>
                     ))}
                  </Stepper>
               </Stack>
            </div>

         </div>
      </div>
   );
};

export default CourseHeader;