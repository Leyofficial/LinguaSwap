import React, {useEffect, useState} from 'react';
import style from './Message.module.scss'
import {getUser} from "../../../../ApiRequests/Courses/AuthUser.js";
import {useSelector} from "react-redux";

const Message = (props) => {
   const {messages, scroll} = props

   const [authorMessage, setAuthorMessage] = useState(null)
   const currentUser = useSelector((state) => state.loginUser)

   useEffect(() => {
      getUser(messages?.author).then(res => {
         if (res.status === 200) {
            setAuthorMessage(res.data.user)
         }
      })

   }, [messages])


   const newDate = new Date(messages?.date)
   const time = newDate.getHours()
   const minutes = newDate.getMinutes()

   const formattedDate = `${!time >= 10 ? "0" + time : time} : ${minutes < 10 ? "0" + minutes : minutes}`

   return (
      <>
         <article className={style.container} ref={scroll}>
            <section className={`${currentUser?._id === messages?.author ? style.myItem : style.item}`}>
               <div className={style.wrapperMessage}>
                  <p className={style.message}>{messages.message}</p>
                  <div className={style.info}>
                     <p>{currentUser?._id === messages?.author ? "You" : authorMessage?.user.data.name}</p>
                     <p className={style.time}>{formattedDate}</p>
                  </div>
               </div>


            </section>

         </article>
      </>
   );
};

export default Message;