import React, {useEffect, useState} from 'react';
import style from './CourseChats.module.scss'
import {NavLink} from "react-router-dom";
import {getCoursesForUserChat} from "../../../ApiRequests/Chat.jsx";
import {useSelector} from "react-redux";

const CourseChats = () => {

   const [courses, setCourses] = useState(null)
   const currentUser = useSelector((state) => state.loginUser)


   useEffect(() => {
      getCoursesForUserChat(currentUser._id).then(res => {
         if (res.status === 200) {
            setCourses(res.data.courses)
         }
      })
   }, [currentUser])

   return (
      <>
         <div className={style.courseItems}>
            <h3>Your current courses</h3>
            {courses && courses.map((course) => <NavLink to={`/course/chat/${course._id}`}>
               <div className={style.item}>
                  <img src={`../../../../${course.course.image}`} alt={'course'}/>
                  <p>{course.course.name}</p>
               </div>
            </NavLink>)}
            <div className={style.pagination}>
            </div>
         </div>
      </>
   );
};

export default CourseChats;