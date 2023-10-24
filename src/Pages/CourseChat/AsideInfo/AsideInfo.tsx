import React from 'react';
import style from './AsideInfo.module.scss'
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";

interface IAsideInfoProps{
   asideItem:string,
   callback:(arg:string) => void,
   item:string,
   icon:ReactJSXElement,
}
const AsideInfo = (props:IAsideInfoProps) => {
   const {asideItem,item,callback,icon} = props
   return (
      <div className={`${style.wrapperIconsMember} ${asideItem === item ? style.activeItem : null}`}
           onClick={() => callback(item)}>
         {icon}
      </div>
   );
};

export default AsideInfo;