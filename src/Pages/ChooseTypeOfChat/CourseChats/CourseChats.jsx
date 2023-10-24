import React, {useEffect, useState} from 'react';
import style from './CourseChats.module.scss'
import {useSelector} from "react-redux";
import SingleCourseChat from "./SingleCourseChat/SingleCourseChat.jsx";
import {getCoursesHelper} from "../CourseChatsHelper.js";


const CourseChats = () => {

  const [courses, setCourses] = useState(null)
  const currentUser = useSelector((state) => state.loginUser)

  useEffect(() => {
    getCoursesHelper(currentUser,setCourses)

  }, [currentUser])

  return (
    <>
      <div className={style.courseItems}>
        {courses && courses.map((course) => <SingleCourseChat setCourses={setCourses}  course={course}></SingleCourseChat>)}
      </div>
    </>
  );
};

export default CourseChats;