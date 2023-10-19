import React, {useEffect, useState} from 'react';
import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";
import style from './CourseMembers.module.scss'
import {useSelector} from "react-redux";
import OnlineStatus from "../../ChooseTypeOfChat/TeacherChats/FindTeacher/OnlineStatus/OnlineStatus.jsx";

const CourseMember = ({member, idCourse}) => {
  const [dataMember, setDataMember] = useState(null)

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