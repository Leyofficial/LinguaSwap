import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {io} from 'socket.io-client'

const ChatContext = (props) => {

   const {messageData} = props
   const dispatch = useDispatch()
   const [socket, setSocket] = useState(null)

   const currentUser = useSelector((state) => state.loginUser)
   const currentChat = useSelector((state) => state.currentChat)

   //1. Создаем socket для пользователя
   useEffect(() => {

      const newSocket = io.connect(`http://localhost:3000`)
      setSocket(newSocket)

   }, [currentUser])


   useEffect(() => {
      if (!socket) return
      socket.emit("sendMessage", messageData)

   }, [socket, messageData])
   return (
      <div>

      </div>
   );
};

export default ChatContext;