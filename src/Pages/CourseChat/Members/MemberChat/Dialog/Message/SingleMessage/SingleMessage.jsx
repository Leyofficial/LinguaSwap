import React from 'react';
import style from './SingleMessage.module.scss'
const SingleMessage = ({messageData,index}) => {
   const newDate = new Date(messageData.date)
   const time = newDate.getHours()
   const minutes = newDate.getMinutes()
   console.log(time)
   const formattedDate = `${!time >= 10 ? "0" + time : time} : ${minutes}`

   return (
      <div className={style.container}>
         <p key={index}>{messageData.message}</p>
         <div>
            <span>{formattedDate}</span>
         </div>

      </div>

   );
};

export default SingleMessage;