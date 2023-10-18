import React, {useEffect, useState} from 'react';
import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";
import style from './ChatSingleMessage.module.scss'

const ChatSingleMessage = (props) => {
   const {dialog, currentUser} = props
   const [interlocutor, setInterlocutor] = useState(null)
   const [messages, setMessages] = useState(null)

   useEffect(() => {

      if (currentUser._id !== dialog.members.first) {
         getUser(dialog.members.first).then(res => {
            if (res.status === 200) {
               setInterlocutor(res.data.user)
            }
         })
      } else {
         getUser(dialog.members.second).then(res => {
            if (res.status === 200) {
               setInterlocutor(res.data.user)
            }
         })
      }

   }, [currentUser, dialog])
console.log(dialog)
   return (
      <div className={style.container}>
         <p>{interlocutor?.user.data.name}</p>
         <p>{ dialog.messages ? dialog.messages[dialog.messages.length -1]?.message : null}</p>
         <p>{ dialog.messages ? dialog.messages[dialog.messages.length -1]?.date : null}</p>
      </div>
   );
};

export default ChatSingleMessage;