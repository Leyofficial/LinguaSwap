import React, {useEffect, useState} from 'react';
import style from './Message.module.scss'
import {getUser} from "../../../../ApiRequests/Courses/AuthUser.js";

const Message = (props) => {
  const {messages} = props

  const [authorMessage,setAuthorMessage] = useState(null)
  console.log(messages)

  useEffect(() => {
    getUser(messages?.author).then(res => {
      console.log(res)
      if(res.status === 200) {
        setAuthorMessage(res.data.user)
      }
    })

  },[messages])


  /// Добавить сообщения с помощю MUI
  return (
    <div>
      <img/>
      <p>{authorMessage.user.data.name}</p>
    </div>
  );
};

export default Message;