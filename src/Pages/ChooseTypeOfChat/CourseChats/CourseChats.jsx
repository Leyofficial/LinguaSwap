import React, {useEffect, useState} from 'react';
import style from './CourseChats.module.scss'
import {NavLink} from "react-router-dom";
import {getCoursesForTeacher, getCoursesForUserChat} from "../../../ApiRequests/Chat.jsx";
import {useSelector} from "react-redux";
import SingleCourseChat from "./SingleCourseChat/SingleCourseChat.jsx";

const CourseChats = () => {

  const [courses, setCourses] = useState(null)
  const currentUser = useSelector((state) => state.loginUser)

  useEffect(() => {

    if (currentUser?.user.data.status === "Student") {
      getCoursesForUserChat(currentUser?._id).then(res => {
        if (res.status === 200) {
          setCourses(res.data.courses)
        }
      })
    } else if (currentUser?.user.data.status === 'Teacher') {
      getCoursesForTeacher(currentUser?._id).then(res => {

        if (res.status === 200) {
          setCourses(res.data.courses)
        }
      })
    }


  }, [currentUser])

  return (
    <>
      <div className={style.courseItems}>
        {courses && courses.map((course) => <SingleCourseChat setCourses={setCourses}  course={course}></SingleCourseChat>)}
        <div className={style.pagination}>
        </div>
      </div>
    </>
  );
};

export default CourseChats;