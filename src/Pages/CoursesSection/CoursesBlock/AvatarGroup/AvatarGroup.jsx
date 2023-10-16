import React, {useEffect, useState} from 'react';

import {Avatar} from 'antd';
import {getUserAvatar} from "../../../../Utility/GetUserAvatar/getUserAvatar.js";


const AvatarGroupSection = ({items, maxCount}) => {
   const [avatars, setAvatars] = useState([])

   useEffect(() => {

      const loadAvatars = async () => {
         const loadedAvatars = await Promise.all(items.map(item => getUserAvatar(item)))
         setAvatars(loadedAvatars)
      }
      loadAvatars()
   }, [items])

   return (
      <>
         <Avatar.Group maxCount={maxCount} maxStyle={{color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer'}}
                       size="large">
            {avatars?.length >= 1 ? avatars?.map(item => <Avatar src={`../../../../../${item}`}/>) :
               <p>You will be first</p>}
         </Avatar.Group>
      </>
   );
};

export default AvatarGroupSection;