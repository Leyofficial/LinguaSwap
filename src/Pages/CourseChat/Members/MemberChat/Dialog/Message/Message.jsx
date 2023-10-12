import React from 'react';
import style from './Message.module.scss'
import { useSelector} from "react-redux";
import {format, parseISO} from "date-fns";
import Avatar from "./Avatar/Avatar.jsx";
import { es, ru } from 'date-fns/locale'
import SingleMessage from "./SingleMessage/SingleMessage.jsx";


const Message = ({messages,scroll}) => {

   const currentUser = useSelector((state) => state.loginUser)

   const groupedMessage =
      messages?.reduce((acc, message) => {
         const newDate = new Date(message.date)
         const date = format(newDate, 'd MMMM', {locale:es});
         if (!acc[date]) {
            acc[date] = []
         }
         acc[date].push(message)
         return acc
      }, {});
   return (
      <>
         {groupedMessage && Object?.entries(groupedMessage).map(([date, messages]) => (

            <div key={date} className={style.container}>
               <h3>{date}</h3>
               {messages.map((message, index) => {
                  return (
                     <div ref={scroll} className={currentUser._id === message.author ? style.myMessage : style.message}>
                        <Avatar idAuthor={message.author}></Avatar>
                        <div className={style.messageItems}>
                           <SingleMessage isMyMessage={currentUser._id === message.author} messageData={message} index={index}></SingleMessage>
                        </div>

                     </div>
                  );
               })}
            </div>
         ))}
      </>
   );
};

export default Message;
