import React, {useEffect, useState} from 'react';
import style from './FindTeacher.module.scss'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import OnlineStatus from "./OnlineStatus/OnlineStatus.jsx";
import SingleMessage from "./SingleMessage/SingleMessage.jsx";
import {getInterlocutorThunkCreator} from "../../../../Redux/ChatWithTeacher/Interlocutor/InterlocutorReducer.js";

const FindTeacher = ({item, itemPath}) => {
   console.log(item)

   const chatStatus = useSelector((state) => state.chatStatus)
   const [isOnline, setIsOnline] = useState(false)
   const onlineUsers = useSelector((state) => state.onlineUsers)
   // const interlocutor = useSelector((state) => state.interlocutor)
   const [interlocutor,setInterlocutor] = useState(null)
   const dispatch = useDispatch()

   useEffect(() => {

      dispatch(getInterlocutorThunkCreator(chatStatus,item,setInterlocutor))

   }, [item, chatStatus])


   useEffect(() => {

      if (onlineUsers && interlocutor) {
         setIsOnline(onlineUsers.some(user => user._id === interlocutor._id))
      } else {
         setIsOnline(false)
      }
   }, [onlineUsers, interlocutor])


   return (
     <div className={style.container}>
        <NavLink to={`${itemPath}/${item.idTeacher}/${item.idStudent}`}>
           <div className={style.author}>
              <OnlineStatus teacher={interlocutor} isOnline={isOnline}></OnlineStatus>
              <SingleMessage item={item} teacher={interlocutor}></SingleMessage>
           </div>
        </NavLink>
     </div>
   );
};

export default FindTeacher;