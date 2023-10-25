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
   <div style={{border : '1px solid rgba(40, 40, 42, 0.13)' , padding : '1px' , borderRadius : '50%' }}>
      <Avatar style={{width : 50 , height : 50 }} src={loadAvatar ? avatar : <Skeleton variant="circular" width={50} height={50}/>}/>
   </div>


   );
};

export default Member;