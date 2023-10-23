import React, {useEffect, useState} from 'react';
import {getUser} from "../../../../../../../ApiRequests/Courses/AuthUser.js";
import {getImageFromServer} from "../../../../../../../ApiRequests/ServerFiles/getImage.js";
import style from './Avatar.module.scss'

const Avatar = ({idAuthor}) => {

   const [user,setUser] = useState(null)
   const [avatar,setAvatar] = useState('')

   useEffect(() => {
      if(idAuthor)
      getUser(idAuthor).then(res => {
         if(res.status === 200) {
            getImageFromServer(res.data.user.user.data.photo,setAvatar)
         }
      })
   },[idAuthor])
  return(
     <>
        <img className={style.image} src={avatar ? avatar : ""} alt={'avatar'}/>
     </>
  )
};

export default Avatar;