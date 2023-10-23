import React, {useEffect, useState} from 'react';
import {Avatar} from "antd";
import {getImageFromServer} from "../../../../../../ApiRequests/ServerFiles/getImage.js";
import {Skeleton} from "@mui/material";

const Member = ({avatarName}) => {
   const [avatar, setAvatar] = useState("")
   const [loadAvatar,setLoadAvatar] = useState(false)

   useEffect(() => {
      getImageFromServer(avatarName, setAvatar,setLoadAvatar)
   }, [avatar])
   return (

      <Avatar src={loadAvatar ? avatar : <Skeleton variant="circular" width={40} height={40}/>}/>

   );
};

export default Member;