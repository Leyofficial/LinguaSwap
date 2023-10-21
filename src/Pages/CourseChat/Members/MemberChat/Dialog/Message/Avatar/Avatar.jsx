import React, {useEffect, useState} from 'react';
import {getUser} from "../../../../../../../ApiRequests/Courses/AuthUser.js";

const Avatar = ({idAuthor}) => {

   const [user,setUser] = useState(null)

   useEffect(() => {
      if(idAuthor)
      getUser(idAuthor).then(res => {
         if(res.status === 200) {
            setUser(res.data.user.user.data.photo)
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