import React from 'react';
import style from "./SingleMessage.module.scss";

const SingleMessage = ({item,teacher}) => {

   const getTime = (date) => {
      const newDate = new Date(date)
      const time = newDate.getHours()
      const minutes = newDate.getMinutes()

      return `${time < 10 ? "0" + time : time}:${minutes < 10 ? "0" + minutes : minutes}`
   }
   return (
      <div className={style.wrapper}>
         <p className={style.nameAuthor}>{teacher?.user.data.name}</p>
         <div className={style.message}>
            <p className={style.text}>{item ? item?.messages[item.messages.length - 1]?.message : "default message"}</p>
            <p className={style.time}>{item && getTime(item?.messages[item.messages.length - 1]?.date)}</p>
         </div>
      </div>
   );
};

export default SingleMessage;