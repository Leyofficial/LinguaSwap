import style from './CourseSection.module.scss'
import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import ShowTopicCourse from "./ShowTopicCourse/ShowTopicCourse.js";
import {useDispatch} from "react-redux";
import toast from "react-hot-toast";
import {getCourseThunkCreator, joinToCourseAndCreateChatThunkCreator} from "../../Redux/Course/courseReducer.js";
import CourseSideInfo from "./CourseSideInfo/CourseSideInfo.js";
import CourseHeader from "./CourseHeader/CourseHeader.js";
import CoursesSectionSkeleton from "./CoursesSectionSkeleton/CoursesSectionSkeleton.js";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {ICourseSubject} from "../CoursesSection/courseType.ts";
import {ICourse} from "../../types/coursesTypes.ts";


const CourseSection = () => {
   const {idCourse} = useParams<string>()
   const dispatch = useDispatch()
   const currentCourse:ICourse = useTypedSelector((state) => state.currentCourse)
   const [errorJoin, setErrorJoin] = useState(false)
   const [leadCourse, setLeadCourse] = useState(false)
   const [currentTopic, setCurrentTopic] = useState<number | null>(0)

   useEffect(() => {
      if(idCourse){
         getCourseThunkCreator(idCourse,setLeadCourse)(dispatch)
      }
   }, [idCourse])

   const joinToCourseHandler = (userId:string) => {

      const isAlreadyJoin = currentCourse?.course?.members?.find((member:string) => member === userId)

      if (isAlreadyJoin) {
         toast.error("You've already joined the course");
         setErrorJoin(true)
      } else {
         if(idCourse){
            joinToCourseAndCreateChatThunkCreator(idCourse, currentCourse?.teacher.id, userId)(dispatch)
            toast.success("Succeed. You were joined to the course")
            setErrorJoin(true)
         }


      }
   }

   return (
      <div className={style.container}>
         {leadCourse ?  <>
         <CourseHeader joinHandler={joinToCourseHandler} errorJoin={errorJoin}></CourseHeader>
         <div className={style.main}>
            <div className={style.wrapperDescription}>
               <div className={style.descriptionContainer}>
                  <div className={style.description}>
                     <h2>We will learn</h2>
                     <p>{currentCourse?.course.description}</p>
                  </div>
                  <div className={style.topics}>
                     {currentCourse?.course.subjects.map((topic : ICourseSubject, index : number) => <ShowTopicCourse curIndex={currentTopic}
                                                                                            key={index}
                                                                                            topic={topic}
                                                                                            currentTopicIndex={index}
                                                                                            changeTopic={setCurrentTopic}></ShowTopicCourse>)}
                  </div>
               </div>
               <CourseSideInfo currentCourse={currentCourse}></CourseSideInfo>
            </div>
         </div>
         </> : <CoursesSectionSkeleton></CoursesSectionSkeleton>}
      </div>
   );
};

export default CourseSection;