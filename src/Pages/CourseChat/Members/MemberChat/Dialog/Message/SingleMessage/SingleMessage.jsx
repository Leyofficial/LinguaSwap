import React, {useEffect, useState} from 'react';
import style from './SingleMessage.module.scss'
import {getUser} from "../../../../../../../ApiRequests/Courses/AuthUser.js";

const SingleMessage = ({messageData, index, isMyMessage, author}) => {
  const [msgAuthor, setMsgAuthor] = useState(null)

  const newDate = new Date(messageData.date)
  const time = newDate.getHours()
  const minutes = newDate.getMinutes()

  const formattedDate = `${!time >= 10 ? "0" + time : time} : ${minutes}`


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
        <span>{formattedDate}</span>
      </div>

    </div>

  );
};

export default SingleMessage;