import React from 'react';
import style from './CourseTeachers.module.scss'

const CourseTeachers = ({currentCourseTeacher}) => {

   return (
      <div className={style.blockItems}>
         <h3>Teachers</h3>
         <div className={style.teacherWrapper}>
            <img src={`../../../${currentCourseTeacher?.user.data?.photo}`} alt={'avatar'}/>
            <p>{currentCourseTeacher?.user.data.name}</p>
         </div>
      </div>
   );
};

export default CourseTeachers;