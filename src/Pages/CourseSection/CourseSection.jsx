import style from './CourseSection.module.scss'
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import ShowTopicCourse from "./ShowTopicCourse/ShowTopicCourse.jsx";
import {useDispatch, useSelector} from "react-redux";
import toast, {Toaster} from "react-hot-toast";
import {getCourseThunkCreator, joinToCourseAndCreateChatThunkCreator} from "../../Redux/Course/courseReducer.js";
import CourseSideInfo from "./CourseSideInfo/CourseSideInfo.jsx";
import CourseHeader from "./CourseHeader/CourseHeader.jsx";


const CourseSection = () => {
   const {idCourse} = useParams()
   const dispatch = useDispatch()
   const currentCourse = useSelector((state) => state.currentCourse)
   const [errorJoin, setErrorJoin] = useState(false)

   const [currentTopic, setCurrentTopic] = useState(0)

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
               <div className={style.descriptionContainer}>
                  <div className={style.description}>
                     <h2>We will learn</h2>
                     <p>{currentCourse?.course.description}</p>
                  </div>
                  <div className={style.topics}>
                     {currentCourse?.course.subjects.map((topic, index) => <ShowTopicCourse curIndex={currentTopic}
                                                                                            topic={topic}
                                                                                            currentTopicIndex={index}
                                                                                            changeTopic={setCurrentTopic}></ShowTopicCourse>)}
                  </div>
               </div>
               <CourseSideInfo currentCourse={currentCourse}></CourseSideInfo>
            </div>
         </div>
      </div>
   );
};

export default CourseSection;