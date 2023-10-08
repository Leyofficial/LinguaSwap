import React, {useEffect, useState} from 'react';
import style from './Message.module.scss'
import {getUser} from "../../../../../../ApiRequests/Courses/AuthUser.js";
import {chatHelper} from "../../../../ChatHelper.js";
import avatar from "../../../../../../images/HomePage/second.png";
import {useDispatch, useSelector} from "react-redux";
import {currentMessageTimeAC} from "../../../../../../Redux/Course/Chat/currentMessageTimeAC.js";
import ShowDate from "./ShowDate/ShowDate.jsx";

const Message = ({message}) => {

   const [author, setAuthor] = useState(null)
   const currentUser = useSelector((state) => state.loginUser)
   const [lastDate, setLastDate] = useState(null)
   const [showDate, setShowDate] = useState(false)

   useEffect(() => {
      getUser(message.author).then(res => setAuthor(res.user))
   }, [message])

   const messageDate = new Date(message.date).toDateString()
   useEffect(() => {
      if (messageDate !== lastDate) {
         setLastDate(messageDate)
         setShowDate(true)
      }
   }, [messageDate])

   // times 10:50
   let date = new Date(message.date)
   const hours = date.getHours()
   const minutes = date.getMinutes()
   let time = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`
   const dispatch = useDispatch()
   const currentDayMessage = useSelector((state) => state.currentTimeMessage)
   // date 20 October
   const day = date.getDate()
   const month = date.toLocaleString("en-US", {month: "long"})
   let formattedDate = `${day} ${month}`;

   useEffect(() => {
      if (day !== currentDayMessage) {
         dispatch(currentMessageTimeAC(day))
      }
   }, [day])
   return (
      <>
         {/*{showDate ? <div>asdsd</div> : null}*/}
         <div className={style.date}>
            <p>{showDate ? formattedDate : null}</p>
            {/*<ShowDate date={day} formattedDate={formattedDate}></ShowDate>*/}
         </div>
         <div className={chatHelper.isMyMessage(message.author, currentUser._id) ? style.myMessage : style.message}>
            <img src={author?.user?.data?.photo ? `../../../${author?.user?.data?.photo}` : avatar} alt={'avatar'}/>
            <div className={style.messageItems}>
               <p>{message.message}</p>
               <span>{time}</span>
            </div>

         </div>
      </>
   );
};

export default Message;
