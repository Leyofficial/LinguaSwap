import React, {LegacyRef, useEffect, useState} from 'react';
import style from './Message.module.scss'
import {getUser} from "../../../../ApiRequests/Courses/AuthUser.js";
import {useSelector} from "react-redux";
import {getDateMessage} from "../../MainChatHelper/MainChatHelper.ts";
import {IMessage} from "../../../CourseChat/MessagesSection/MessagesSection.tsx";
import {useTypedSelector} from "../../../../hooks/useTypedSelector.ts";
import {IUser} from "../../../CourseChat/courseChatTypes.ts";

interface IMessageProps{
   messages:IMessage,
   scroll:LegacyRef<HTMLElement>
}
const Message = (props:IMessageProps) => {
   const {messages, scroll} = props

   const [authorMessage, setAuthorMessage] = useState<IUser | null>(null)
   const currentUser = useTypedSelector((state) => state.loginUser)

   useEffect(() => {
      getUser(messages?.author).then(res => {
         if (res.status === 200) {
            setAuthorMessage(res.data.user)
         }
      })

   }, [messages])


   return (
      <>
         <article className={style.container} ref={scroll}>
            <section className={`${currentUser?._id === messages?.author ? style.myItem : style.item}`}>
               <div className={style.wrapperMessage}>
                  <p className={style.message}>{messages.message}</p>
                  <div className={style.info}>
                     <p>{currentUser?._id === messages?.author ? "You" : authorMessage?.user.data.name}</p>
                     <p className={style.time}>{getDateMessage(messages?.date)}</p>
                  </div>
               </div>
            </section>
         </article>
      </>
   );
};

export default Message;