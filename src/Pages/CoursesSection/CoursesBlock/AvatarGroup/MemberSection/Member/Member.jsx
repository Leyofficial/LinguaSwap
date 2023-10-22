import React, {useEffect, useState} from 'react';
import {Avatar} from "antd";
import {getImageFromServer} from "../../../../../../ApiRequests/ServerFiles/getImage.js";

const Member = ({avatarName}) => {
   const [avatar, setAvatar] = useState("")

   useEffect(() => {
      getImageFromServer(avatarName, setAvatar)
   }, [avatar])
   return (

      <Avatar src={avatar}/>

   );
};

export default Member;