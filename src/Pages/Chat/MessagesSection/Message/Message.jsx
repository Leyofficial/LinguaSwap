import React, {useEffect, useState} from 'react';
import style from './Message.module.scss'
import {getUser} from "../../../../ApiRequests/Courses/AuthUser.js";


const Message = (props) => {
   const {messages} = props

   const [authorMessage, setAuthorMessage] = useState(null)


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
         <article className={style.container}>
            <section className={style.author}>
               <img src={authorMessage?.user.data.photo ? `../../../${authorMessage?.user.data.photo}` : null}
                    alt={'avatar'}/>
            </section>
            <section className={style.item}>
               <p className={style.message}>{messages.message}</p>
               <p className={style.time}>{formattedDate}</p>
            </section>

         </article>
      </>
   );
};

export default Message;