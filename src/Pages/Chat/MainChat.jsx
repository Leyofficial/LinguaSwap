import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getChatsThunkCreator} from "../../Redux/MainChats/mainChatsReducer.js";
import ChatSingleMessage from "./ChatSingleMessage/ChatSingleMessage.jsx";


const MainChat = () => {

   const currentUser = useSelector((state) => state.loginUser)
   const dispatch = useDispatch()
   const mainChats = useSelector((state) => state.mainChats)



   useEffect(() => {

      dispatch(getChatsThunkCreator(currentUser?._id))
   }, [currentUser])
   return (
      <>
         {mainChats.map(dialog => <ChatSingleMessage currentUser={currentUser} dialog={dialog}></ChatSingleMessage>)}
      </>
   );
};

export default MainChat;