import React, {useEffect, useRef, useState} from 'react';
import style from './ChatWithTeacher.module.scss'
import MessagesSection from "../Members/MemberChat/Dialog/MessagesSection/MessagesSection.jsx";
import {useParams} from "react-router";
import {teacherChats} from "../../../ApiRequests/TeacherChats/TeacherChats.js";
import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";
import {useDispatch, useSelector} from "react-redux";
import {addChatMessage, chatMessagesAC} from "../../../Redux/ChatWithTeacher/ChatMessages/chatMessagesAC.js";


const ChatWithTeacher = () => {

   const {idTeacher, idStudent} = useParams()
   const [teacher, setTeacher] = useState(null)
   const currentUser = useSelector((state) => state.loginUser)
   const socket = useSelector((state) => state.socket)
   const scroll = useRef()
   const dispatch = useDispatch()
   const chat = useSelector((state) => state.chatWithStudent)
   const chatStatus = useSelector((state) => state.chatStatus)

   useEffect(() => {
      teacherChats.getChatWithTeacher(idTeacher, idStudent).then(res => {
         if (res.status === 200) {

            dispatch(chatMessagesAC(res.data.findChatTeacher))
            getUser(chatStatus === 'student' ? res.data.findChatTeacher.idStudent : res.data.findChatTeacher.idTeacher).then(res => {
               if (res.status === "Succeed") {
                  setTeacher(res.user)
               }
            })
         }
      })
   }, [idTeacher, idStudent])

   const sendMessageHandler = (message) => {


      const messageData = {
         message: message,
         author: currentUser._id,
         date: new Date()
      }

      if (message && socket) {


         teacherChats.sendMessage(messageData, chat._id).then(res => {
            if (res.status === 200) {

               socket.emit("privateMessage", messageData)
               scroll.current?.scrollIntoView({behavior: "smooth"})
               teacherChats.getChatWithTeacher(idTeacher, idStudent).then(res => {
                  if (res.status === 200) {
                     dispatch(chatMessagesAC(res.data.findChatTeacher))
                  }
               })
            }
         }).catch(err => console.log(err))
      } else {
         console.log("Write some text pls ")
      }
   }

   useEffect(() => {
      socket.on("privateResponse", (data) => {

         if (data) {
            dispatch(addChatMessage(data))
         }
      })
   }, [socket])

   useEffect(() => {
      scroll.current?.scrollIntoView({behavior: "smooth"})
   }, [chat, scroll])


   return (

      <MessagesSection name={teacher?.user.data.name}
                       messages={chat?.messages} sendMessageHandler={sendMessageHandler}
                       scroll={scroll}
      ></MessagesSection>

   );
};

export default ChatWithTeacher;
