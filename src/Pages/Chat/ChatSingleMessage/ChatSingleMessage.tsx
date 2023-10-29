import React, {Suspense, useEffect, useState} from 'react';
import style from './ChatSingleMessage.module.scss'
import {NavLink} from "react-router-dom";
import {getDateMessage, getInterlocutor} from "../MainChatHelper/MainChatHelper.ts";
import {Skeleton} from "@mui/material";
import OnlineStatus from "../../CourseChat/OnlineStatus/OnlineStatus.tsx";
import {IDialog} from "../mainChatTypes.ts";
import {IUser} from "../../CourseChat/courseChatTypes.ts";
import {useTypedSelector} from "../../../hooks/useTypedSelector.ts";

interface IChatSingleMessageProps{
   dialog:IDialog,
   currentUser:IUser
}


const ChatSingleMessage = (props:IChatSingleMessageProps) => {
   const {dialog, currentUser} = props
   const [interlocutor, setInterlocutor] = useState<IUser | null>(null)
   const newSocket = useTypedSelector((state) => state.socket)

   useEffect(() => {
      if (currentUser) {

         getInterlocutor(currentUser._id, dialog, setInterlocutor)
      }
   }, [currentUser, dialog])

   useEffect(() => {
      if (currentUser) {

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
      <NavLink to={`/chat/${dialog?._id}`}>
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
                     <p className={style.date}>{dialog?.messages.length >= 1 ? getDateMessage(dialog.messages[dialog.messages.length - 1]?.date) : null}</p>
                  </div>

               </div>
            </div>
         </section>
      </NavLink>
   );
};

export default ChatSingleMessage;