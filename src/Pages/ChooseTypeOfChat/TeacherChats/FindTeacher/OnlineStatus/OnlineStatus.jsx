import React, {useEffect, useState} from 'react';
import {StyledBadge, StyledBadgeOffline} from "../../../../../Utility/StyleForOnlineStatus/styleForOnlineStatus.js";
import Avatar from "@mui/material/Avatar";
import defaultAvatar from "../../../../../images/member.png";
import style from './OnlineStatus.module.scss'
import {getImageFromServer} from "../../../../../ApiRequests/ServerFiles/getImage.js";

const OnlineStatus = ({isOnline,teacher,noImage}) => {

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