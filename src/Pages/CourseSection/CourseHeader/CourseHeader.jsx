import React, {useEffect, useState} from 'react';
import style from './CourseHeader.module.scss'
import {Toaster} from "react-hot-toast";
import memberImage from "../../../images/member.png";
import {Stack, Step, StepLabel, Stepper} from "@mui/material";
import {ColorlibConnector, ColorlibStepIcon} from "../../../Utility/ProgressCourse/ProgressCourse.tsx";
import {useSelector} from "react-redux";
import {getStateOfCourse} from "./stateOfCourse.js";
import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";
import {getImageFromServer} from "../../../ApiRequests/ServerFiles/getImage.js";

const CourseHeader = ({joinHandler, errorJoin}) => {

   const loginUser = useSelector((state) => state.loginUser)
   const currentCourse = useSelector((state) => state.currentCourse)
   const steps = ['Group Recruitment', 'Start of the course', 'Finish of the  course']
   const [teacher, setTeacher] = useState(null)
   const [teacherAvatar,setTeacherAvatar] = useState("")
   console.log(currentCourse)
   useEffect(() => {
      getUser(currentCourse.teacher.id).then(res => {
         if(res.status === 200) {
            setTeacher(res.data.user)
            getImageFromServer(res.data.user.user.data.photo,setTeacherAvatar)
         }
      })
   },[currentCourse])
   return (
      <div className={style.containerHeader}>

         <div className={style.headerTitle}>
            <div className={style.wrapperTitle}>
               <h1>{currentCourse?.course.name}</h1>
               {loginUser?.user.data?.status !== "Teacher" ?
                  <button onClick={() => joinHandler(loginUser._id)}>Join to course</button> : null}
               {errorJoin ? <Toaster position="top-right" reverseOrder={false}/> : null}
            </div>


            <div className={style.image}>
               <img src={teacherAvatar ? teacherAvatar : memberImage} alt={'members'}/>
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