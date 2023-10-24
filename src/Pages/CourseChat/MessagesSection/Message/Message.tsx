import React, {useEffect, useState} from 'react';
import style from './Message.module.scss'
import {getUser} from "../../../../ApiRequests/Courses/AuthUser.js";
import {getDateMessage} from "../../../Chat/MainChatHelper/MainChatHelper.ts";
import {IMessage} from "../MessagesSection.tsx";
import {IUser} from "../../courseChatTypes.ts";

interface IMessageProps{
   messageData:IMessage,
   index:number,
   isMyMessage:boolean,
   author:string
}
const Message = (props:IMessageProps) => {
   const {messageData, index, isMyMessage, author} = props
   const [msgAuthor, setMsgAuthor] = useState<IUser | null>(null)

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