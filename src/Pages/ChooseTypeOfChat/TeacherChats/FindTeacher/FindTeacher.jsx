import React, {useEffect, useState} from 'react';
import {getUser} from "../../../../ApiRequests/Courses/AuthUser.js";
import defaultAvatar from '../../../../images/member.png'
import style from './FindTeacher.module.scss'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const FindTeacher = ({item,itemPath}) => {
console.log(item)
   const [teacher, setTeacher] = useState(null)
   const chatStatus = useSelector((state) => state.chatStatus)
console.log(chatStatus)
   useEffect(() => {

         getUser(chatStatus === "teacher" ? item.idTeacher : item.idStudent).then(res => {
            if (res.status === "Succeed") {
               setTeacher(res.user)
            }
         })

   }, [item,chatStatus])


   const getTime = (date) => {
      const newDate = new Date(date)
      const time = newDate.getHours()
      const minutes = newDate.getMinutes()

      return `${time < 10 ? "0" + time : time}:${minutes < 10 ? "0" + minutes : minutes}`

   }
   return (
      <div className={style.container}>
         <NavLink to={`${itemPath}/${item.idTeacher}/${item.idStudent}`}>
            <div className={style.author}>
               <img alt={'avatar'}
                    src={teacher?.user.data.photo ? `../../../../../${teacher?.user.data.photo}` : defaultAvatar}/>
               <div className={style.wrapper}>
                  <p>{teacher?.user.data.name}</p>
                  <div className={style.message}>
                     <p className={style.text}>{item ? item?.messages[item.messages.length - 1]?.message : "default message"}</p>
                     <p className={style.time}>{item && getTime(item?.messages[item.messages.length - 1]?.date) }</p>
                  </div>
               </div>
            </div>
         </NavLink>
      </div>
   );
};

export default FindTeacher;