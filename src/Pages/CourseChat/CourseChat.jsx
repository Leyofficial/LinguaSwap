import React, {useEffect, useRef, useState} from 'react';
import style from './CourseChat.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {addSocketMessage} from "../../Redux/Course/Chat/CourseChatAC.js";
import {HiUserGroup} from "react-icons/hi";
import {FaChalkboardTeacher} from "react-icons/fa";
import {BsInfoCircle} from "react-icons/bs";
import CourseTeachers from "./CourseTeacher/CourseTeachers.jsx";
import {useParams} from "react-router";
import {GiImbricatedArrows} from "react-icons/gi";
import MessagesSection from "./Members/MemberChat/Dialog/MessagesSection/MessagesSection.jsx";
import {getChatThunkCreator, sendMessageThunkCreator} from "../../Redux/Course/Chat/CourseChatReducer.js";
import {getCurrentCourseForChatThunkCreator} from "../../Redux/Course/Chat/currentCourseChatReducer.js";
import AsideInfo from "./AsideInfo/AsideInfo.jsx";
import AsideStudents from "./AsideInfo/AsideStudents/AsideStudents.jsx";


const CourseChat = () => {

   const dispatch = useDispatch()
   const currentUser = useSelector((state) => state.loginUser)
   const chat = useSelector((state) => state.currentChat)
   const [asideItem, setAsideItem] = useState("teachers")
   const {idCourse} = useParams()
   const [hideInfoBlock, setHideInfoBlock] = useState(false)
   const scroll = useRef()
   const socket = useSelector((state) => state.socket)
   const currentCourse = useSelector((state) => state.currentCourseChat)
   const currentCourseTeacher = useSelector((state) => state.currentCourseTeacher)

   useEffect(() => {

      dispatch(getCurrentCourseForChatThunkCreator(idCourse))

   }, [idCourse])

   useEffect(() => {

      dispatch(getChatThunkCreator(idCourse))
   }, [idCourse])


   const sendMessageHandler = (message) => {

      const messageData = {
         message: message,
         author: currentUser._id,
         date: new Date()
      }
      if (message && socket) {

         socket.emit("message", messageData)
         dispatch(sendMessageThunkCreator(messageData, chat._id, idCourse))

      } else {
         console.log("Write some text pls ")
      }
   }


   useEffect(() => {
      socket.on("response", (data) => {
         if (data) {
            dispatch(addSocketMessage(data))
         }

      })
   }, [socket])


   useEffect(() => {
      scroll.current?.scrollIntoView({behavior: "smooth"})
   }, [chat, scroll])


   return (

      <div className={style.container}>
         <MessagesSection messages={chat?.messages} title={"course chat"} name={currentCourse?.course.name}
                          sendMessageHandler={sendMessageHandler} scroll={scroll}
         ></MessagesSection>

         <div className={` ${hideInfoBlock ? style.hide : style.wrapperMebmers}`}>
            <div className={`${style.hideBlock} ${hideInfoBlock ? style.reverseIcons : null}`}
                 onClick={() => setHideInfoBlock(!hideInfoBlock)}>
               <GiImbricatedArrows></GiImbricatedArrows>
            </div>
            <div className={style.members}>
               <div className={style.wrapperItems}>

                  <AsideInfo icon={<FaChalkboardTeacher/>} asideItem={asideItem} callback={setAsideItem}
                             item={"teachers"}></AsideInfo>
                  <AsideInfo icon={<HiUserGroup/>} asideItem={asideItem} callback={setAsideItem}
                             item={"students"}></AsideInfo>
                  <AsideInfo icon={<BsInfoCircle/>} asideItem={asideItem} callback={setAsideItem}
                             item={"info"}></AsideInfo>

               </div>
               <article className={style.wrapper}>
                  {asideItem === 'teachers' ?
                     <CourseTeachers currentCourseTeacher={currentCourseTeacher}></CourseTeachers>
                     :
                     asideItem === 'students' ?
                        <AsideStudents currentCourse={currentCourse} title={"Students"}/>
                        :
                        <AsideStudents title={"Info"}></AsideStudents>
                  }
               </article>
            </div>
         </div>
      </div>
   );
};

export default CourseChat;