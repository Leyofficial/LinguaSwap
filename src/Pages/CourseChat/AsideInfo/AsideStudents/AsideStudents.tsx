// import React from 'react';
// import style from './AsideStudents.module.scss'
// import CourseMember from "../../CourseMembers/CourseMember.tsx";
// import {ICourse} from "../../../../types/coursesTypes.ts";
// interface  IAsideStudentsProps{
//     currentCourse:ICourse,
//     title:string
// }
// const AsideStudents = (props:IAsideStudentsProps) => {
//     const {currentCourse,title} = props
//
//    return (
//       <div className={style.memberItems}>
//          <h3>{title}</h3>
//          <div className={style.items}>
//             {currentCourse && currentCourse?.course.members.map((member, index) => <CourseMember key={index}
//                                                                                 member={member}></CourseMember>)}
//          </div>
//       </div>
//    );
// };
//
// export default AsideStudents;