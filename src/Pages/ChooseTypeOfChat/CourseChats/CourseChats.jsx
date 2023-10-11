import React, {useEffect, useState} from 'react';
import style from './CourseChats.module.scss'
import Pagination from "../../../Utility/Pagination/Pagination.jsx";
import {NavLink} from "react-router-dom";
import {getCoursesForUserChat} from "../../../ApiRequests/Chat.jsx";
import {useSelector} from "react-redux";

const CourseChats = () => {

   const [currentPage, setCurrentPage] = useState(1)
   const [chatsForOnePage, setChatsForOnePage] = useState(5)
   const [courses, setCourses] = useState(null)
   const currentUser = useSelector((state) => state.loginUser)
   const indexOfLastCourse = currentPage * chatsForOnePage
   const indexOfFirstCourse = indexOfLastCourse - chatsForOnePage


   const currentCourses = courses?.slice(indexOfFirstCourse, indexOfLastCourse)

   const paginate = (numberPage) => setCurrentPage(numberPage)

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
            {currentCourses && currentCourses.map((course) => <NavLink to={`/course/chat/${course._id}`}>
               <div className={style.item}>
                  <img src={`../../../../${course.course.image}`} alt={'course'}/>
                  <p>{course.course.name}</p>
               </div>
            </NavLink>)}
            <div className={style.pagination}>
            <Pagination paginate={paginate} coursesForOnePage={chatsForOnePage}
                        totalCourses={courses?.length}></Pagination>
            </div>
         </div>
      </>
   );
};

export default CourseChats;