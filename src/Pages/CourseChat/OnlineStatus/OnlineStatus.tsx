import React, {useEffect, useState} from 'react';
import Avatar from "@mui/material/Avatar";
import style from './OnlineStatus.module.scss'
import {getImageFromServer} from "../../../ApiRequests/ServerFiles/getImage.ts";
import {StyledBadge, StyledBadgeOffline} from "../../../Utility/StyleForOnlineStatus/styleForOnlineStatus.js";
import {IUser} from "../courseChatTypes.ts";

interface IOnlineStatusProps{
   isOnline:boolean | undefined,
   teacher?:IUser | null,
   noImage?:boolean
}
const OnlineStatus = (props:IOnlineStatusProps) => {
   const {isOnline,teacher,noImage} = props

   const [avatar,setAvatar] = useState('')

   useEffect(() => {
      if(teacher)
         getImageFromServer(teacher?.user.data.photo,setAvatar)
   },[teacher])



   return (
      <div className={style.container}>
         {isOnline ? <StyledBadge
            overlap="circular"
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            variant="dot"
         >
            {!noImage ?  <Avatar alt="Remy Sharp"
                                 src={avatar ? avatar : ""}/> : null}
         </StyledBadge> : <StyledBadgeOffline
            overlap="circular"
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            variant="dot"
         >
            {!noImage ? <Avatar alt="Remy Sharp"
                                src={avatar ? avatar : ""}/> : null}
         </StyledBadgeOffline>}
      </div>
   );
};

export default OnlineStatus;