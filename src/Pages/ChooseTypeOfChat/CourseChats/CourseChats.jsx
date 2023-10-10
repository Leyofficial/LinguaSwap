import React, {useState} from 'react';
import style from './CourseChats.module.scss'
import Pagination from "../../../Utility/Pagination/Pagination.jsx";
import {NavLink} from "react-router-dom";

const CourseChats = ({courses}) => {

   const [currentPage, setCurrentPage] = useState(1)
   const [chatsForOnePage, setChatsForOnePage] = useState(5)
   const paginate = (numberPage) => setCurrentPage(numberPage)

   const indexOfLastCourse = currentPage * chatsForOnePage
   const indexOfFirstCourse = indexOfLastCourse - chatsForOnePage

   const currentCourses = courses?.slice(indexOfFirstCourse, indexOfLastCourse)

   return (
      <>
         <div className={style.courseItems}>
            <h3>Your current courses</h3>
            {currentCourses && currentCourses.map((course) => <NavLink to={`/course/chat/${course._id}`}>
               <div className={style.item}>
                  <img src={`../../../${course.course.image}`} alt={'course'}/>
                  <p>{course.course.name}</p>
               </div>
            </NavLink>)}
            <Pagination paginate={paginate} coursesForOnePage={chatsForOnePage}
                        totalCourses={courses?.length}></Pagination>
         </div>
      </>
   );
};

export default CourseChats;