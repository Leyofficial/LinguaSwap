import React, {useEffect} from 'react';
import {Avatar} from "antd";
import Member from "./Member/Member.jsx";

const MemberSection = ({avatars,maxCount}) => {


   return (

      <Avatar.Group maxCount={maxCount} maxStyle={{color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer'}}
                    size="large">
         {avatars?.length >= 1 ? avatars?.map(item => <Member avatarName={item}></Member>) :
            <p>You will be first</p>}
      </Avatar.Group>

   );
};

export default MemberSection;