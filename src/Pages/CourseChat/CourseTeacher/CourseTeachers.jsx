import React, {useEffect, useState} from 'react';
import style from './CourseTeachers.module.scss'
import OnlineStatus from "../../ChooseTypeOfChat/TeacherChats/FindTeacher/OnlineStatus/OnlineStatus.jsx";
import {useSelector} from "react-redux";

const CourseTeachers = ({currentCourseTeacher}) => {
   const [isOnline, setIsOnline] = useState(false)
   const onlineUsers = useSelector((state) => state.onlineUsers)

   useEffect(() => {

      if (onlineUsers && currentCourseTeacher) {
         setIsOnline(onlineUsers.some(user => user._id === currentCourseTeacher._id))
      } else {
         setIsOnline(false)
      }
   }, [onlineUsers, currentCourseTeacher])

   return (
      <div className={style.blockItems}>
         <h3>Teachers</h3>
         <div className={style.teacherWrapper}>
            {/*<img src={`../../../${currentCourseTeacher?.user.data?.photo}`} alt={'avatar'}/>*/}
            <OnlineStatus teacher={currentCourseTeacher} isOnline={isOnline}></OnlineStatus>
            <p>{currentCourseTeacher?.user.data.name}</p>
         </div>
      </div>
   );
};

export default CourseTeachers;