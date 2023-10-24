import React, {useEffect, useState} from 'react';
import style from './CourseTeachers.module.scss'
import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";
import OnlineStatus from "../OnlineStatus/OnlineStatus.tsx";
import {IUser} from "../courseChatTypes.ts";

interface ICourseTeachersProps{
    teacherId:string,
    idCourse:string | undefined
}
const CourseTeachers = (props:ICourseTeachersProps) => {
    const {idCourse,teacherId} = props
  const [teacher, setTeacher] = useState<IUser | null>(null)

  useEffect(() => {
    if (teacherId)
      getUser(teacherId).then(res => {
        if (res.status === 200) {
          setTeacher(res.data.user)
        }
      })
  }, [teacherId])


  return (
    <div className={style.blockItems}>
      <h3>Teachers</h3>
      <div className={style.teacherWrapper}>
        {idCourse ?
          <>
          <OnlineStatus teacher={teacher} isOnline={teacher?.online}></OnlineStatus>
          <p>{teacher?.user.data.name}</p>
          </> :null}
      </div>
    </div>
  );
};

export default CourseTeachers;