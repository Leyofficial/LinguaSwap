import React from 'react';
import {StyledBadge, StyledBadgeOffline} from "../../../../../Utility/StyleForOnlineStatus/styleForOnlineStatus.js";
import Avatar from "@mui/material/Avatar";
import defaultAvatar from "../../../../../images/member.png";

const OnlineStatus = ({isOnline,teacher}) => {
   return (
      <div>
         {isOnline ? <StyledBadge
            overlap="circular"
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            variant="dot"
         >
            <Avatar alt="Remy Sharp"
                    src={teacher?.user.data.photo ? `../../../../../${teacher?.user.data.photo}` : defaultAvatar}/>
         </StyledBadge> : <StyledBadgeOffline
            overlap="circular"
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            variant="dot"
         >
            <Avatar alt="Remy Sharp"
                    src={teacher?.user.data.photo ? `../../../../../${teacher?.user.data.photo}` : defaultAvatar}/>
         </StyledBadgeOffline>}
      </div>
   );
};

export default OnlineStatus;