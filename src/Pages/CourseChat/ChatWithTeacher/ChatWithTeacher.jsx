import React, {useEffect, useRef, useState} from 'react';
import style from './ChatWithTeacher.module.scss'
import MessagesSection from "../Members/MemberChat/Dialog/MessagesSection/MessagesSection.jsx";
import {useParams} from "react-router";
import {teacherChats} from "../../../ApiRequests/TeacherChats/TeacherChats.js";
import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";
import {useSelector} from "react-redux";


const ChatWithTeacher = () => {

   const {idTeacher, idStudent} = useParams()
   const [teacher, setTeacher] = useState(null)
   const [chat, setChat] = useState(null)
   const currentUser = useSelector((state) => state.loginUser)

   const scroll = useRef()

   useEffect(() => {
      teacherChats.getChatWithTeacher(idTeacher, idStudent).then(res => {
         if (res.status === 200) {
            setChat(res.data.findChatTeacher)
            getUser(res.data.findChatTeacher.idTeacher).then(res => {
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

      if (message) {
         teacherChats.sendMessage(messageData, chat._id).then(res => {
            if (res.status === 200) {
               scroll.current?.scrollIntoView({behavior: "smooth"})
               teacherChats.getChatWithTeacher(idTeacher, idStudent).then(res => {
                  if (res.status === 200) {
                     setChat(res.data.findChatTeacher)
                  }
               })
            }
         }).catch(err => console.log(err))
      } else {
         console.log("Write some text pls ")
      }
   }

   useEffect(() => {
      scroll.current?.scrollIntoView({behavior: "smooth"})
   }, [chat,scroll])


   return (

         <MessagesSection  name={teacher?.user.data.name}
                          messages={chat?.messages} sendMessageHandler={sendMessageHandler}
                           scroll={scroll}
         ></MessagesSection>

   );
};

export default ChatWithTeacher;
