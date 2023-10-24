import React, {useEffect, useState} from 'react';
import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";
import style from './CourseMembers.module.scss'
import OnlineStatus from "../OnlineStatus/OnlineStatus.js";
import {IUser} from "../courseChatTypes.ts";

interface ICourseMemberProps{
  member:string,
  idCourse:string | undefined
}
const CourseMember = (props:ICourseMemberProps) => {
  const {member, idCourse} = props
  const [dataMember, setDataMember] = useState<IUser | null>(null)

  useEffect(() => {
    getUser(member).then(res => {

      if (res.status === 200) {
        setDataMember(res.data.user)
      }
    })
  }, [member])

  return (
    <div className={style.container}>
      {idCourse ?
        <>
          <OnlineStatus teacher={dataMember} isOnline={dataMember?.online}></OnlineStatus>
          <p>{dataMember?.user.data.name ? dataMember?.user.data.name : "No name"}</p>
        </> : null}
    </div>
  );
};

export default CourseMember;