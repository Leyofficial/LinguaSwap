import React from 'react';
import style from "./TypeOfChat.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {changeChatStatus} from "../../../Redux/ChatWithTeacher/chatWithTeacherReducer.js";

const TypeOfChat = ({item,title}) => {
   const chatStatus = useSelector((state) => state.chatStatus)
   const dispatch = useDispatch()

   const changeStatus = () => {
      dispatch(changeChatStatus(item))
   }
   return (
     <>
        <li className={chatStatus === item ? style.open : null}
            onClick={changeStatus}>{title}
        </li>
     </>
   );
};

export default TypeOfChat;