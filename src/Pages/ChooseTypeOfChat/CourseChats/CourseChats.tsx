import React, {useEffect, useState} from 'react';
import style from './CourseChats.module.scss'
import {useSelector} from "react-redux";
import SingleCourseChat from "./SingleCourseChat/SingleCourseChat.js";
import {getCoursesHelper} from "../CourseChatsHelper.js";
import {useTypedSelector} from "../../../hooks/useTypedSelector.ts";
import {ICourse} from "../../../types/coursesTypes.ts";


const CourseChats = () => {

  const [courses, setCourses] = useState<ICourse[] | null>(null)
  const currentUser = useTypedSelector((state) => state.loginUser)

  useEffect(() => {
    getCoursesHelper(currentUser,setCourses)

  }, [currentUser])

  return (
    <>
      <div className={style.courseItems}>
        {courses && courses.map((course,index) => <SingleCourseChat key={index}  course={course}></SingleCourseChat>)}
      </div>
    </>
  );
};

export default CourseChats;