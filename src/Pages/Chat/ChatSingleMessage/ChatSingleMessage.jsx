import React, {useEffect, useState} from 'react';
import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";
import style from './ChatSingleMessage.module.scss'
import MainChatSearch from "../MainChatSearch/MainChatSearch.jsx";
import {NavLink} from "react-router-dom";
import OnlineStatus from "../../ChooseTypeOfChat/TeacherChats/FindTeacher/OnlineStatus/OnlineStatus.jsx";
import {getInterlocutor} from "../MainChatHelper/MainChatHelper.js";
import {useSelector} from "react-redux";
import {removeUserAC} from "../../../Redux/OnlineUsers/onlineUsersAC.js";
import {Skeleton} from "@mui/material";


const ChatSingleMessage = (props) => {
   const {dialog, currentUser} = props
   const [interlocutor, setInterlocutor] = useState(null)
   const [messages, setMessages] = useState(null)
   const newSocket = useSelector((state) => state.socket)

   const newDate = new Date(dialog.messages[dialog.messages.length - 1]?.date)
   const time = newDate.getHours()
   const minutes = newDate.getMinutes()

   const formattedDate = `${!time >= 10 ? "0" + time : time} : ${minutes < 10 ? "0" + minutes : minutes}`

   useEffect(() => {
      if (currentUser) {
         console.log(`first ${currentUser}`)
         getInterlocutor(currentUser._id, dialog, setInterlocutor)
      }


   }, [currentUser, dialog])

   useEffect(() => {
      if (currentUser) {
         console.log(`new user ${currentUser}`)
         newSocket.on("newUser", () => {

            getInterlocutor(currentUser._id, dialog, setInterlocutor)

         })


         newSocket.on("leftUser", () => {
            if (currentUser)
               getInterlocutor(currentUser._id, dialog, setInterlocutor)
         })
      }


   }, [newSocket, currentUser])


   return (
      <NavLink to={`chat/${dialog?._id}`}>
         <section className={style.container}>
            <div className={style.wrapperAuthor}>
                <OnlineStatus teacher={interlocutor} isOnline={interlocutor?.online}></OnlineStatus>
               <div className={style.wrapperItem}>
                  <div className={style.author}>
                     <p className={style.interlocutor}>{interlocutor?.user.data.name ? interlocutor?.user.data.name : <Skeleton sx={{marginBottom : '20px'}} variant="rectangular" width={200} height={20} />}</p>
                     <p
                        className={style.message}>{dialog?.messages.length >= 1 ? dialog.messages[dialog.messages.length - 1]?.message : null}</p>
                  </div>
                  <div className={style.wrapperDate}>
                     <p className={style.date}>{dialog?.messages.length >= 1 ? formattedDate : null}</p>
                  </div>

               </div>
            </div>
         </section>
      </NavLink>
   );
};

export default ChatSingleMessage;