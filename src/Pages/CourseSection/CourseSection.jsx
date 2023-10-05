import style from './CourseSection.module.scss'
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {Course} from "../../ApiRequests/Courses/Courses.js";
import memberImage from "../../images/member.png";
import {Stack, Step, StepLabel, Stepper} from "@mui/material";
import {ColorlibConnector, ColorlibStepIcon} from "../../Utility/ProgressCourse/ProgressCourse.tsx";
import {ImageLevelEducation} from "../../Utility/ImageLevelEducation/imageLevelEducation.js";
import {countryFlag} from "../../Utility/CoutryFlag/CountryFlag.js";
import startCourseDate from '../../images/course/startDate.png'
import finishCourseDate from '../../images/course/finishDate.png'
import duration from '../../images/course/duration.png'
import AvatarGroupSection from "../CoursesSection/CoursesBlock/AvatarGroup/AvatarGroup.jsx";
import ShowTopicCourse from "./ShowTopicCourse/ShowTopicCourse.jsx";



const CourseSection = () => {
   const {idCourse} = useParams()

   const [currentCourse, setCurrentCourse] = useState(null)
   const membersDefault = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


   const [currentTopic,setCurrentTopic] = useState(0)

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
            <div className={style.wrapperDescription}>
               <div className={style.descriptionContainer}>
                  <div className={style.description}>
                     <h2>We will learn</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti dolores excepturi
                        magni nam
                        nulla provident saepe sequi, totam. Animi aut laborum natus optio porro repellendus, repudiandae
                        totam! Dolorum, iste?</p>
                  </div>
                  <div className={style.topics}>
                     {currentCourse?.course.subjects.map((topic,index) => <ShowTopicCourse curIndex={currentTopic} topic={topic} currentTopicIndex={index} changeTopic={setCurrentTopic}></ShowTopicCourse>) }
                  </div>
               </div>
               <div className={style.wrapperSideInfo}>
                  <div className={style.language}>
                     <img src={countryFlag(currentCourse?.course.language)} alt={'course'}></img>
                     <p>{currentCourse?.course.language}</p>
                  </div>
                  <div className={style.wrapperLevel}>
                     <img src={ImageLevelEducation(currentCourse?.course.level)} alt={'course'}/>
                     <p>{currentCourse?.course.level}</p>
                  </div>
                  <div className={style.duration}>
                     <img src={duration} alt={'course'}/>
                     <p>Duration of lesson {currentCourse?.course.durationCourse}</p>
                  </div>
                  <div className={style.containerDate}>
                     <div className={style.wrapperDate}>
                        <img src={startCourseDate} alt={'course'}/>
                        <p>{currentCourse?.course.startCourse}</p>
                     </div>
                     <div className={style.wrapperDate}>
                        <img src={finishCourseDate} alt={'course'}/>
                        <p>{currentCourse?.course.finishCourse}</p>
                     </div>
                  </div>

                  <div className={style.members}>
                     <h3>Registered Students </h3>
                     <AvatarGroupSection maxCount={8} items={membersDefault} image={memberImage}></AvatarGroupSection>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CourseSection;