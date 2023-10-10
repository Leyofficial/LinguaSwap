import React, {useEffect, useState} from 'react';
import {getUser} from "../../../../../../../ApiRequests/Courses/AuthUser.js";
import style from './Avatar.module.scss'
const Avatar = ({idAuthor}) => {

   const [user,setUser] = useState(null)

   useEffect(() => {
      getUser(idAuthor).then(res => {
         if(res.status === 'Succeed') {
            setUser(res.user.user.data.photo)
         }
      })
   },[idAuthor])
  return(
     <>
        {/*<div className={style.container}>*/}
        <img src={`../../../${user}`} alt={'avatar'}/>
        {/*</div>*/}
     </>
  )
};

export default Avatar;