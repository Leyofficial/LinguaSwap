import React, {useEffect, useState} from 'react';
import style from './CourseChat.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {LuSend} from "react-icons/lu";
import {getUser} from "../../ApiRequests/Courses/AuthUser.js";
import {AiOutlinePaperClip} from "react-icons/ai";
import {getChat, sendMessage} from "../../ApiRequests/Chat.jsx";
import {courseChatAC} from "../../Redux/Course/Chat/CourseChatAC.js";
import Message from "./Members/MemberChat/Dialog/Message/Message.jsx";
import {HiUserGroup} from "react-icons/hi";
import {FaChalkboardTeacher} from "react-icons/fa";
import {BsInfoCircle} from "react-icons/bs";
import CourseTeachers from "./CourseTeacher/CourseTeachers.jsx";
import CourseMember from "./CourseMembers/CourseMember.jsx";


const CourseChat = () => {

   const currentCourse = useSelector((state) => state.currentCourse)
   const [currentCourseTeacher, setCurrentCourseTeacher] = useState(null)
   const dispatch = useDispatch()
   const currentUser = useSelector((state) => state.loginUser)
   const [message, setMessage] = useState("")
   const chat = useSelector((state) => state.currentChat)

   const asideItems = ["teachers","students","info"]
   const [asideItem,setAsideItem] = useState("teachers")

   console.log(currentCourse)

   useEffect(() => {
      getChat(currentCourse._id).then(res => {
         if (res.status === 200) {
            dispatch(courseChatAC(res.data.chatRoom))
         }
      }).catch(err => console.log(err))

      getUser(currentCourse.teacher.id).then(res => {
         if (res.status === "Succeed") {
            setCurrentCourseTeacher(res.user)
         }
      })
   }, [currentCourse])


   const sendMessageHandler = () => {

      const messageData = {
         message: message,
         author: currentUser._id,
         date: new Date()
      }

      if (message) {
         sendMessage(messageData, chat._id).then(res => {
            if (res.status === 200) {
               setMessage("")
               getChat(currentCourse._id).then(res => {
                  if (res.status === 200) {
                     dispatch(courseChatAC(res.data.chatRoom))
                  }
               }).catch(err => console.log(err))
            }
         }).catch(err => console.log(err))
      } else {
         console.log("Write some text pls ")
      }
   }

   return (
      <div className={style.container}>
         <div className={style.wrapperChat}>
            <h2><span>{currentCourse?.course.name}</span> course chat </h2>
            <div className={style.contentMessage}>
               <div className={style.wrapperMessages}>
                  <Message messages={chat?.messages}></Message>
               </div>
            </div>
            <div className={style.wrapperTextarea}>
               <AiOutlinePaperClip fontSize={40}></AiOutlinePaperClip>
               <div className={style.textarea}>
                  <textarea placeholder={'Type a message'} value={message}
                            onChange={(e) => setMessage(e.target.value)}></textarea>
               </div>

               <div className={style.icons}>
                  <LuSend onClick={sendMessageHandler} fontSize={40} color={'rgba(12,87,197,0.98)'}></LuSend>
               </div>

            </div>
         </div>

         <div className={style.wrapperMebmers}>

            <div className={style.members}>
               <div className={style.wrapperItems}>
               <div className={`${style.wrapperIconsMember} ${asideItem === "teachers" ? style.activeItem : null}`} onClick={() => setAsideItem("teachers")}>
                  <FaChalkboardTeacher></FaChalkboardTeacher>
               </div>
               <div className={`${style.wrapperIconsMember} ${asideItem === "students" ? style.activeItem : null}`} onClick={() => setAsideItem("students")}>
                  <HiUserGroup></HiUserGroup>
               </div>
               <div className={`${style.wrapperIconsMember} ${asideItem === "info" ? style.activeItem : null}`} onClick={() => setAsideItem("info")}>
                  <BsInfoCircle></BsInfoCircle>
               </div>
               </div>
               {asideItem === 'teachers' ? <CourseTeachers currentCourseTeacher={currentCourseTeacher}></CourseTeachers> :
               asideItem === 'students' ? <div className={style.memberItems}>
                  <h3>Students</h3>
                  <div className={style.items}>
                     {currentCourse.course.members.map((member,index) => <CourseMember index={index} member={member}></CourseMember>)}
                  </div>
               </div> : <div className={style.memberItems}>
                  <h3>INFO</h3>
                  <div className={style.items}>
                    <div>Will be develop in the future</div>
                  </div>
               </div>
               }

            </div>
         </div>
      </div>
   );
};

export default CourseChat;