import React, {useEffect, useState} from 'react';
import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";
import style from './CourseMembers.module.scss'
import {useSelector} from "react-redux";
import OnlineStatus from "../../ChooseTypeOfChat/TeacherChats/FindTeacher/OnlineStatus/OnlineStatus.jsx";

const CourseMember = ({member}) => {
   const [dataMember,setDataMember] = useState(null)

   const [isOnline, setIsOnline] = useState(false)
   const onlineUsers = useSelector((state) => state.onlineUsers)
   useEffect(() => {

      if (onlineUsers && member) {

         setIsOnline(onlineUsers.some(user => user._id === member._id))
      } else {
         setIsOnline(false)
      }
   }, [onlineUsers, member])


   useEffect(() => {
      getUser(member).then(res => {

         if(res.status === 200) {

            setDataMember(res.data.user)
         }
      })
   },[member])

   return (
      <div className={style.container}>
         {/*<img src={ dataMember?.photo ? `../../../${dataMember?.photo}` : defaultAvatar} alt={'avatar'}/>*/}
         <OnlineStatus teacher={dataMember} isOnline={isOnline}></OnlineStatus>
         <p>{dataMember?.user.data.name ? dataMember?.user.data.name : "No name"}</p>
      </div>
   );
};

export default CourseMember;