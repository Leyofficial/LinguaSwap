import React, {useEffect, useState} from 'react';
import {getUser} from "../../../../../../../ApiRequests/Courses/AuthUser.js";

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
        <img src={`../../../../../../../../${user}`} alt={'avatar'}/>
     </>
  )
};

export default Avatar;