import React, {useEffect, useState} from 'react';
import {getUser} from "../../../../ApiRequests/Courses/AuthUser.js";
import defaultAvatar from '../../../../images/member.png'
import style from './FindTeacher.module.scss'
import {NavLink} from "react-router-dom";

const FindTeacher = ({item}) => {
console.log(item)

   const [teacher, setTeacher] = useState(null)


   useEffect(() => {
      getUser(item.idTeacher).then(res => {
         if (res.status === "Succeed") {
            setTeacher(res.user)
         }
      })
   }, [item])


   console.log(teacher)
   return (
      <div className={style.container}>
         <NavLink to={`/course/chat/teacher/${item._id}`}>
         <div className={style.author}>
            <img alt={'avatar'} src={teacher?.user.data.photo ? `../../../${teacher?.user.data.photo}` : defaultAvatar}/>
            <div className={style.wrapper}>
               <p>{teacher?.user.data.name}</p>
               <div className={style.message}>
                  <p className={style.text}>message</p>
                  <p className={style.time}>6:50</p>
               </div>
            </div>
         </div>
         </NavLink>
      </div>
   );
};

export default FindTeacher;