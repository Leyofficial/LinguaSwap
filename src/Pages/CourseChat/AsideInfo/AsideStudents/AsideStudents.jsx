import React from 'react';
import style from './AsideStudents.module.scss'
import CourseMember from "../../CourseMembers/CourseMember.jsx";
const AsideStudents = ({currentCourse,title}) => {
   return (
      <div className={style.memberItems}>
         <h3>{title}</h3>
         <div className={style.items}>
            {currentCourse && currentCourse?.course.members.map((member, index) => <CourseMember index={index}
                                                                                member={member}></CourseMember>)}
         </div>
      </div>
   );
};

export default AsideStudents;