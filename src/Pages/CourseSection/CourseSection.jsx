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
import {useSelector} from "react-redux";
import toast, {Toaster} from "react-hot-toast";


const CourseSection = () => {
   const {idCourse} = useParams()

   const [currentCourse, setCurrentCourse] = useState(null)
   const loginUser = useSelector((state) => state.loginUser)
   const [errorJoin, setErrorJoin] = useState(false)

   const [currentTopic, setCurrentTopic] = useState(0)

   useEffect(() => {
      Course.getCourse(idCourse).then(res => {
         if (res.status === 200) {
            setCurrentCourse(res.data.course)
         }
      })
   }, [idCourse])


   const steps = ['Group Recruitment', 'Start of the course', 'Finish of the  course']

   const joinToCourse = (userId) => {

      const isAlreadyJoin = currentCourse.course.members.find((member) => member === userId)

      if (isAlreadyJoin) {
         toast.error("You've already joined the course");
         setErrorJoin(true)
      } else {

         Course.addNewMember(userId, currentCourse._id).then(res => {
            if (res.status === 200) {
               Course.getCourse(idCourse).then(res => {
                  if (res.status === 200) {
                     setCurrentCourse(res.data.course)
                  }
               })
            }
         })
      }

   }


   return (
      <div className={style.container}>
         <div className={style.containerHeader}>

            <div className={style.headerTitle}>
               <div className={style.wrapperTitle}>
                  <h1>{currentCourse?.course.name}</h1>
                  <button onClick={() => joinToCourse(loginUser._id)}>Join to course</button>
                  {errorJoin ? <Toaster position="top-right" reverseOrder={false}/> : null}
               </div>


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
                     {currentCourse?.course.subjects.map((topic, index) => <ShowTopicCourse curIndex={currentTopic}
                                                                                            topic={topic}
                                                                                            currentTopicIndex={index}
                                                                                            changeTopic={setCurrentTopic}></ShowTopicCourse>)}
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
                     <AvatarGroupSection maxCount={8} items={currentCourse?.course.members}
                                         image={memberImage}></AvatarGroupSection>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CourseSection;