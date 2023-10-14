import React, {useEffect, useState} from 'react';
import style from './ChooseTypeOfChat.module.scss'
import CourseChats from "./CourseChats/CourseChats.jsx";
import TeacherChats from "./TeacherChats/TeacherChats.jsx";
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ChatWithStudents from "../CourseChat/ChatWithStudents/ChatWithStudents.jsx";
import {changeChatStatus} from "../../Redux/ChatWithTeacher/chatWithTeacherReducer.js";

const ChooseTypeOfChat = () => {

   const [openSection, setOpenSection] = useState('course')
   const currentUser = useSelector((state) => state.loginUser)
   const dispatch = useDispatch()



   useEffect(() => {

      dispatch(changeChatStatus(openSection))

   },[openSection])

   const handlerClick = (status) => {
      setOpenSection(status)
   }


   return (
      <div className={style.container}>
        <aside>
         <nav>
            <ul>
               <li className={openSection === "course" ? style.open : null} onClick={() => setOpenSection("course")}>Courses</li>
               {currentUser?.user.data.status === "Teacher" ?
                  <li className={openSection === "student" ? style.open : null}
                                                                  onClick={() => handlerClick('student')}>Students</li> :
                  <li className={openSection === "teacher" ? style.open : null}
                      onClick={() => handlerClick("teacher")}>Teachers</li>
               }

            </ul>
         </nav>
         <section>
            {openSection === "course" ?
               <CourseChats /> : (openSection === "student" ?
                  <ChatWithStudents></ChatWithStudents> : <TeacherChats ></TeacherChats> )}
         </section>
        </aside>
         <main>
            <Outlet></Outlet>
         </main>
      </div>

   );
};

export default ChooseTypeOfChat;