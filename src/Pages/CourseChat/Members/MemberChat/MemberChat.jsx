import React, {useEffect, useState} from 'react';
import {getMembersOfChat} from "../../../../ApiRequests/Chat.jsx";


const MemberChat = ({member}) => {

  const [currentMember, setCurrentMember] = useState(null)

  useEffect(() => {

    getMembersOfChat(member).then(res => {
      console.log(res)
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

  console.log(currentMember)
  return (
    <>
      <li>{currentMember?.name}</li>
    </>
  );
};

export default MemberChat;