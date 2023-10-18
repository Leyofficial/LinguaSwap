import React from 'react';
import style from './AsideInfo.module.scss'
const AsideInfo = ({asideItem,callback,item,icon}) => {
   return (
      <div className={`${style.wrapperIconsMember} ${asideItem === item ? style.activeItem : null}`}
           onClick={() => callback(item)}>
         {icon}
      </div>
   );
};

export default AsideInfo;