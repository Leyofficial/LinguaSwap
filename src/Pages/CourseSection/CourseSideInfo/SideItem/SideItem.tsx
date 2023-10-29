import React from 'react';
import style from "../CourseSideInfo.module.scss";
interface  ISideItemProps{
    path:string | undefined,
    title:string
}
const SideItem = (props:ISideItemProps) => {
    const {path,title} = props
   return (
      <div className={style.item}>
         <img src={path} alt={'course'}></img>
         <p>{title}</p>
      </div>
   );
};

export default SideItem;