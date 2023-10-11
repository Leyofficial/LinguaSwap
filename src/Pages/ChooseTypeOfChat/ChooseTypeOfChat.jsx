import React, {useEffect, useState} from 'react';
import style from './ChooseTypeOfChat.module.scss'
import {useSelector} from "react-redux";
import {getCoursesForUserChat} from "../../ApiRequests/Chat.jsx";
import {teacherChats} from "../../ApiRequests/TeacherChats/TeacherChats.js";
import CourseChats from "./CourseChats/CourseChats.jsx";
import TeacherChats from "./TeacherChats/TeacherChats.jsx";
import {Outlet} from "react-router-dom";

const ChooseTypeOfChat = () => {

   const [openSection, setOpenSection] = useState('course')

   return (
      <div className={style.container}>
        <aside>
         <nav>
            <ul>
               <li className={openSection === "course" ? style.open : null} onClick={() => setOpenSection("course")}>Courses</li>
               <li className={openSection === "teacher" ? style.open : null} onClick={() => setOpenSection("teacher")}>Teachers</li>
            </ul>
         </nav>
         <section>
            {openSection === "course" ?   <CourseChats /> : <TeacherChats ></TeacherChats>}
         </section>
        </aside>
         <main>
            <Outlet></Outlet>
         </main>
      </div>

   );
};

export default ChooseTypeOfChat;