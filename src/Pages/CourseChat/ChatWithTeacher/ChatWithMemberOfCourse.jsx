import React, {useEffect, useRef} from 'react';
import MessagesSection from "../Members/MemberChat/Dialog/MessagesSection/MessagesSection.jsx";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {addChatMessage} from "../../../Redux/ChatWithTeacher/ChatMessages/chatMessagesAC.js";
import {
   getChatWithMemberThunkCreator,
   sendSocketMessageThunkCreator
} from "../../../Redux/ChatWithMemberOfCourse/chatWithMemberOfCourseReducer.js";


const ChatWithMemberOfCourse = () => {

   const {idTeacher, idStudent} = useParams()
   const currentUser = useSelector((state) => state.loginUser) // текущий юзер
   const socket = useSelector((state) => state.socket)
   const scroll = useRef()
   const dispatch = useDispatch()
   const chat = useSelector((state) => state.chatWithStudent) // текущий чат с юзером
   const chatStatus = useSelector((state) => state.chatStatus) // show students - show teachers
   const interlocutor = useSelector((state) => state.chatMemberOfCourse) // собеседник


   useEffect(() => {

      dispatch(getChatWithMemberThunkCreator(idTeacher,idStudent,chatStatus))
   }, [idTeacher, idStudent,chatStatus])

   const sendMessageHandler = (message) => {

      const messageData = {
         message: message,
         author: currentUser._id,
         date: new Date()
      }

      if (message && socket) {

         dispatch(sendSocketMessageThunkCreator(messageData,chat._id,socket,idTeacher,idStudent,scroll))

      } else {
         console.log("Write some text pls ")
      }
   }

   useEffect(() => {
      if (socket)
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

      <MessagesSection name={interlocutor?.user.data.name}
                       sendMessageHandler={sendMessageHandler}
                       scroll={scroll}
                       messages={chat?.messages}
      ></MessagesSection>

   );
};

export default ChatWithMemberOfCourse;
