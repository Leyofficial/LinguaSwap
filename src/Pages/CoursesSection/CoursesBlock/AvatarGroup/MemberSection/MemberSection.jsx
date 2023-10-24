import React from 'react';
import {Avatar} from "antd";
import Member from "./Member/Member.jsx";

const MemberSection = ({avatars,maxCount}) => {


   return (

      <Avatar.Group maxCount={maxCount} maxStyle={{color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer'}}
                    size="large">
         {avatars?.length >= 1 ? avatars?.map((item ,index)=> <Member key={index} avatarName={item}></Member>) :
            <p style={{color:'black'}}>You will be first</p>}
      </Avatar.Group>

   );
};

export default MemberSection;