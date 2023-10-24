import React, {useEffect, useState} from 'react';
import style from './Message.module.scss'
import {getUser} from "../../../../ApiRequests/Courses/AuthUser.js";
import {getDateMessage} from "../../../Chat/MainChatHelper/MainChatHelper.js";


const Message = ({messageData, index, isMyMessage, author}) => {
   const [msgAuthor, setMsgAuthor] = useState(null)

   useEffect(() => {
      if (author) {
         getUser(author).then(res => {
            setMsgAuthor(res.data.user)
         })
      }
   }, [author])

   return (
      <div className={style.container}>
         <p key={index}>{messageData.message}</p>
         <div className={isMyMessage ? style.myMessage : style.message}>
            <p>{isMyMessage ? "You" : msgAuthor?.user.data.name}</p>
            <span>{getDateMessage(messageData.date)}</span>
         </div>

      </div>

   );
};

export default Message;