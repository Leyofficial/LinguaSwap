import React from 'react';
import style from './SingleMessage.module.scss'
const SingleMessage = ({messageData,index,isMyMessage}) => {
   const newDate = new Date(messageData.date)
   const time = newDate.getHours()
   const minutes = newDate.getMinutes()

   const formattedDate = `${!time >= 10 ? "0" + time : time} : ${minutes}`

   return (
      <div className={style.container}>
         <p key={index}>{messageData.message}</p>
         <div className={isMyMessage ? style.myMessage : style.message}>
            <span>{formattedDate}</span>
         </div>

      </div>

   );
};

export default SingleMessage;