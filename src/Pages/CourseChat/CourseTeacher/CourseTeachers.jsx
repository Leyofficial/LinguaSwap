import React, {useEffect, useState} from 'react';
import style from './CourseTeachers.module.scss'
import OnlineStatus from "../../ChooseTypeOfChat/TeacherChats/FindTeacher/OnlineStatus/OnlineStatus.jsx";
import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";

const CourseTeachers = ({teacherId,idCourse}) => {
   const [teacher,setTeacher] = useState(null)

   useEffect(() => {
     if(teacherId)
      getUser(teacherId).then(res => {
         if(res.status === 200) {
            setTeacher(res.data.user)
         }
      })
   },[teacherId])


   return (
      <div className={style.blockItems}>
         <h3>Teachers</h3>
         <div className={style.teacherWrapper}>
            {idCourse ?  <OnlineStatus teacher={teacher} isOnline={teacher?.online}></OnlineStatus> :null}
            <p>{teacher?.user.data.name}</p>
         </div>
      </div>
   );
};

export default CourseTeachers;