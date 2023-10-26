import React, {useEffect, useState} from 'react';
import style from './CourseHeader.module.scss'
import {Toaster} from "react-hot-toast";
import memberImage from "../../../images/member.png";
import {Stack, Step, StepLabel, Stepper} from "@mui/material";
import {ColorlibConnector, ColorlibStepIcon} from "../../../Utility/ProgressCourse/ProgressCourse.tsx";
import {getStateOfCourse} from "./stateOfCourse.js";
import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";
import {getImageFromServer} from "../../../ApiRequests/ServerFiles/getImage.ts";
import {useTypedSelector} from "../../../hooks/useTypedSelector.ts";
import {ICourse} from "../../../types/coursesTypes.ts";
import CustomButton from "../../../Utility/CustomButton/CustomButton.jsx";
import toga from '../../../images/crown.png'
interface ICourseHeaderProps{
   joinHandler:(arg:string) => void,
   errorJoin:boolean
}
const CourseHeader = (props:ICourseHeaderProps) => {
   const {joinHandler, errorJoin} = props

   const loginUser = useTypedSelector((state) => state.loginUser)
   const currentCourse : ICourse = useTypedSelector((state) => state.currentCourse)
   const steps = ['Group Recruitment', 'Start of the course', 'Finish of the  course']
   const [teacherAvatar,setTeacherAvatar] = useState("")

   useEffect(() => {
      getUser(currentCourse.teacher.id).then(res => {
         if(res.status === 200) {
            getImageFromServer(res.data.user.user.data.photo,setTeacherAvatar)
         }
      })
   },[currentCourse])

   const joinCourseHandler = () => {
      joinHandler(loginUser._id)
   }

   return (
      <div className={style.containerHeader}>

         <div className={style.headerTitle}>
            <div className={style.wrapperTitle}>
               <h1>{currentCourse?.course.name}</h1>
               {loginUser?.user.data?.status !== "Teacher" ?
                  <CustomButton callback={joinCourseHandler} title={"Join to course"}></CustomButton> : null}
               {errorJoin ? <Toaster position="top-right" reverseOrder={false}/> : null}
            </div>
            <div className={style.image}>
               <div className={style.teacherToga}>
                  <img src={toga} alt={'author'}/>
               </div>
               <img src={teacherAvatar ? teacherAvatar : memberImage} alt={'author'}/>
               <p>{currentCourse?.teacher.name}</p>
            </div>

            <div className={style.stepsWrapper}>
               <Stack sx={{width: '100%'}} spacing={4}>
                  <Stepper alternativeLabel
                           activeStep={getStateOfCourse(currentCourse?.course.startCourse, currentCourse?.course.finishCourse)}
                           connector={<ColorlibConnector/>}>
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