import React, {useEffect, useState} from 'react';
import style from './Message.module.scss'
import {getUser} from "../../../../ApiRequests/Courses/AuthUser.js";
import {useSelector} from "react-redux";
import {getImageFromServer} from "../../../../ApiRequests/ServerFiles/getImage.js";


const Message = (props) => {
   const {messages, scroll} = props
   const [avatar,setAvatar] = useState("")

   const [authorMessage, setAuthorMessage] = useState(null)
   const currentUser = useSelector((state) => state.loginUser)

   useEffect(() => {
      getUser(messages?.author).then(res => {
         if (res.status === 200) {
            setAuthorMessage(res.data.user)
            getImageFromServer(res.data.user.user.data.photo,setAvatar)
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
            <section className={style.author}>
               <img src={avatar ? avatar : ""}
                    alt={'avatar'}/>
            </section>
            <section className={`${currentUser?._id === messages?.author ? style.myItem : style.item}`}>
               <p className={style.message}>{messages.message}</p>
               <p className={style.time}>{formattedDate}</p>
            </section>

         </article>
      </>
   );
};

export default Message;