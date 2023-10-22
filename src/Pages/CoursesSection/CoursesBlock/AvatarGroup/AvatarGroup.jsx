import React, {useEffect, useState} from 'react';


import {getUserAvatar} from "../../../../Utility/GetUserAvatar/getUserAvatar.js";
import MemberSection from "./MemberSection/MemberSection.jsx";


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
         <MemberSection maxCount={maxCount} avatars={avatars}></MemberSection>
      </>
   );
};

export default AvatarGroupSection;