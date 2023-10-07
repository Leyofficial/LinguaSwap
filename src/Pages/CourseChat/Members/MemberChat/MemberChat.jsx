import React, {useEffect, useState} from 'react';
import {getMembersOfChat} from "../../../../ApiRequests/Chat.jsx";
import style from './MemberChat.module.scss'


const MemberChat = ({member}) => {

  const [currentMember, setCurrentMember] = useState(null)


  useEffect(() => {

    getMembersOfChat(member).then(res => {

      if (res.status === "Succeed") {
        const dataMember = {
          name: res.user.user.data.name,
          photo: res.user.user.data.photo,
          status: res.user.user.data.status
        }
        setCurrentMember(dataMember)
      }
    })


  }, [member])


  return (
    <>
      <div className={style.container}>
        <img src={`../../../${currentMember?.photo}`} alt={'avatar'}/>
        <p>{currentMember?.name}</p>
      </div>

    </>
  );
};

export default MemberChat;