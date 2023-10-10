import React, {useEffect, useState} from 'react';
import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";
import style from './CourseMembers.module.scss'
import defaultAvatar from '../../../images/member.png'

const CourseMember = ({member}) => {
   const [dataMember,setDataMember] = useState(null)


   useEffect(() => {
      getUser(member).then(res => {

         if(res && res.status === 'Succeed') {
            setDataMember(res.user.user.data)
         }
      })
   },[member])
   return (
      <div className={style.container}>
         <img src={ dataMember?.photo ? `../../../${dataMember?.photo}` : defaultAvatar} alt={'avatar'}/>
         <p>{dataMember?.name ? dataMember.name : "No name"}</p>
      </div>
   );
};

export default CourseMember;