import style from './CourseSection.module.scss'
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {Course} from "../../ApiRequests/Courses/Courses.js";
import AvatarGroupSection from "../CoursesSection/CoursesBlock/AvatarGroup/AvatarGroup.jsx";
import memberImage from "../../images/member.png";
import {Stack, Step, StepLabel, Stepper} from "@mui/material";
import {AiFillCrown} from "react-icons/ai";
import {ColorlibConnector, ColorlibStepIcon} from "../../Utility/ProgressCourse/ProgressCourse.tsx";


const CourseSection = () => {
   const {idCourse} = useParams()

   const [currentCourse, setCurrentCourse] = useState(null)
   const membersDefault = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

   useEffect(() => {
      Course.getCourse(idCourse).then(res => {
         if (res.status === 200) {
            setCurrentCourse(res.data.course)
         }
      })
   }, [idCourse])

   const steps = ['Group Recruitment', 'Start of the course', 'Finish of the  course']
   return (
      <div className={style.container}>
         <div className={style.containerHeader}>
            {/*<div className={style.wrapperImage}>*/}
            {/*   <img src={`../../../${currentCourse?.course.image}`}/>*/}
            {/*</div>*/}

            <div className={style.headerTitle}>
               <h1>{currentCourse?.course.name}</h1>
               <div className={style.image}>
                  <img src={memberImage}/>
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
         <div className={style.main}>
            <div className={style.description}>
               <h2>We will learn</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti dolores excepturi magni nam
                  nulla provident saepe sequi, totam. Animi aut laborum natus optio porro repellendus, repudiandae
                  totam! Dolorum, iste?</p>
            </div>
            <div>
               <ul>
               {currentCourse.course.subjects.map((item,index) => <li key={index}>{item}</li>)}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default CourseSection;