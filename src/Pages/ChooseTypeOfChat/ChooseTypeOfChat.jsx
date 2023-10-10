import React, {useEffect, useState} from 'react';
import style from './ChooseTypeOfChat.module.scss'
import {useSelector} from "react-redux";
import {getCoursesForUserChat} from "../../ApiRequests/Chat.jsx";
import {teacherChats} from "../../ApiRequests/TeacherChats/TeacherChats.js";
import CourseChats from "./CourseChats/CourseChats.jsx";
import TeacherChats from "./TeacherChats/TeacherChats.jsx";

const ChooseTypeOfChat = () => {

   const [courses, setCourses] = useState(null)
   const [openSection, setOpenSection] = useState('course')
   const currentUser = useSelector((state) => state.loginUser)
   const [chatsWithTeacher,setChatsWithTeacher] = useState(null)


   useEffect(() => {
      getCoursesForUserChat(currentUser._id).then(res => {
         if (res.status === 200) {
            setCourses(res.data.courses)
         }
      })
   }, [currentUser])

   useEffect(() => {
      teacherChats.getAllChats(currentUser._id).then(res => setChatsWithTeacher(res.data.findChats))
   }, [currentUser])

   return (
      <div className={style.container}>
         <nav>
            <ul>
               <li className={openSection === "course" ? style.open : null} onClick={() => setOpenSection("course")}>Course chats</li>
               <li className={openSection === "teacher" ? style.open : null} onClick={() => setOpenSection("teacher")}>Teacher chats</li>
            </ul>
         </nav>

         <section>
            {openSection === "course" ?   <CourseChats courses={courses}/> : <TeacherChats items={chatsWithTeacher} ></TeacherChats>}
         </section>
      </div>
   );
};

export default ChooseTypeOfChat;