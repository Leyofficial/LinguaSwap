import React, {useEffect, useState} from 'react';


import {getUserAvatar} from "../../../../Utility/GetUserAvatar/getUserAvatar.js";
import MemberSection from "./MemberSection/MemberSection.js";

 interface IAvatarProps {
   items:string[],
   maxCount:number
}
const AvatarGroupSection = (props:IAvatarProps) => {
   const {items, maxCount} = props
   const [avatars, setAvatars] = useState<string[]>([])

   useEffect(() => {
      const loadAvatars = async () => {

         const loadedAvatars = await Promise.all(items.map((item : string) => getUserAvatar(item)))
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