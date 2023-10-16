import style from './CourseSection.module.scss'
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import {getCourseThunkCreator, joinToCourseAndCreateChatThunkCreator} from "../../Redux/Course/courseReducer.js";
import CourseHeader from "./CourseHeader/CourseHeader.jsx";
import TopicsSection from "./TopicsSection/TopicsSection.jsx";
import CourseSideInfo from "./CourseSideInfo/CourseSideInfo.jsx";


const CourseSection = () => {
   const {idCourse} = useParams()
   const dispatch = useDispatch()
   const currentCourse = useSelector((state) => state.currentCourse)
   const [errorJoin, setErrorJoin] = useState(false)

   useEffect(() => {
      dispatch(getCourseThunkCreator(idCourse))

   }, [idCourse])


   const joinToCourseHandler = (userId) => {

      const isAlreadyJoin = currentCourse?.course?.members?.find((member) => member === userId)

      if (isAlreadyJoin) {
         toast.error("You've already joined the course");
         setErrorJoin(true)
      } else {
         dispatch(joinToCourseAndCreateChatThunkCreator(idCourse, currentCourse?.teacher.id, userId))
         toast.success("Succeed. You were joined to the course")
         setErrorJoin(true)
      }
   }

   return (
      <div className={style.container}>
         <CourseHeader joinHandler={joinToCourseHandler} errorJoin={errorJoin}></CourseHeader>
         <div className={style.main}>
            <div className={style.wrapperDescription}>
               <TopicsSection currentCourse={currentCourse}></TopicsSection>
               <CourseSideInfo></CourseSideInfo>
            </div>
         </div>
      </div>
   );
};

export default CourseSection;