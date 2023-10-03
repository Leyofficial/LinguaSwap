import style from './CourseSection.module.sass'
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {Course} from "../../ApiRequests/Courses/Courses.js";

const CourseSection = () => {
   const {idCourse} = useParams()

   const [currentCourse, setCurrentCourse] = useState(null)

   useEffect(() => {
      Course.getCourse(idCourse).then(res => {
         if (res.status === 200) {
            setCurrentCourse(res.data.course)
         }
      })
   }, [idCourse])


   console.log(currentCourse)
   return (
      <div className={style.container}>
         <h1>{currentCourse?.course.name}</h1>
      </div>
   );
};

export default CourseSection;