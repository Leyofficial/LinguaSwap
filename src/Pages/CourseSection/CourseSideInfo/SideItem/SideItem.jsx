import React from 'react';
import style from "../CourseSideInfo.module.scss";
const SideItem = ({path,title}) => {
   return (
      <div className={style.item}>
         <img src={path} alt={'course'}></img>
         <p>{title}</p>
      </div>
   );
};

export default SideItem;