import React from 'react';
import {StyledBadge, StyledBadgeOffline} from "../../../../../Utility/StyleForOnlineStatus/styleForOnlineStatus.js";
import Avatar from "@mui/material/Avatar";
import defaultAvatar from "../../../../../images/member.png";
import style from './OnlineStatus.module.scss'

const OnlineStatus = ({isOnline,teacher,noImage}) => {

   return (
      <div className={style.container}>
         {isOnline ? <StyledBadge
            overlap="circular"
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            variant="dot"
         >
            {!noImage ?  <Avatar alt="Remy Sharp"
                    src={teacher?.user?.data.photo ? `../../../../../${teacher?.user.data.photo}` : defaultAvatar}/> : null}
         </StyledBadge> : <StyledBadgeOffline
            overlap="circular"
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            variant="dot"
         >
            {!noImage ? <Avatar alt="Remy Sharp"
                    src={teacher?.user?.data.photo ? `../../../../../${teacher?.user.data.photo}` : defaultAvatar}/> : null}
         </StyledBadgeOffline>}
      </div>
   );
};

export default OnlineStatus;