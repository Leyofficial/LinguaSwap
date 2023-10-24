import React, {useEffect, useState} from 'react';
import {Avatar} from "antd";
import {getImageFromServer} from "../../../../../../ApiRequests/ServerFiles/getImage.ts";
import {Skeleton} from "@mui/material";
interface IMemberProps {
   avatarName:string
}

const Member = (props :IMemberProps ) => {

   const {avatarName} = props
   const [avatar, setAvatar] = useState<string>("")
   const [loadAvatar,setLoadAvatar] = useState<boolean>(false)

   useEffect(() => {
      if(avatarName){
         getImageFromServer(avatarName, setAvatar,setLoadAvatar)
      }
   }, [avatarName])

   return (

      <Avatar src={loadAvatar ? avatar : <Skeleton variant="circular" width={40} height={40}/>}/>

   );
};

export default Member;