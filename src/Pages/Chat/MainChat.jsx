import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router";

const MainChat = () => {

   const currentUser = useSelector((state) => state.loginUser)
   const {idUser} = useParams()
   console.log(idUser)


   // useEffect(() => {
   //
   // }, [currentUser])
   return (
      <>

      </>
   );
};

export default MainChat;