import React from 'react';
import style from './ChooseTypeOfChat.module.scss'
import CourseChats from "./CourseChats/CourseChats.jsx";
import TeacherChats from "./TeacherChats/TeacherChats.jsx";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import ChatWithStudents from "../CourseChat/ChatWithStudents/ChatWithStudents.jsx";
import TypeOfChat from "./TypeOfChat/TypeOfChat.jsx";

const ChooseTypeOfChat = () => {

   const chatStatus = useSelector((state) => state.chatStatus)
   const currentUser = useSelector((state) => state.loginUser)


   return (
      <div className={style.container}>
         <aside>
            <nav>
               <ul>
                  <TypeOfChat title={"Courses"} item={"course"}></TypeOfChat>

                  {currentUser?.user.data?.status === "Teacher" ?
                     <TypeOfChat title={"Students"} item={"student"}></TypeOfChat> :
                     <TypeOfChat title={"Teachers"} item={"teacher"}></TypeOfChat>
                  }
               </ul>
            </nav>
            <section>
               {chatStatus === "course" ?
                  <CourseChats/> : (chatStatus === "student" ?
                     <ChatWithStudents></ChatWithStudents> : <TeacherChats></TeacherChats>)}
            </section>
         </aside>
         <main>
            <Outlet></Outlet>
         </main>
      </div>

   );
};

export default ChooseTypeOfChat;