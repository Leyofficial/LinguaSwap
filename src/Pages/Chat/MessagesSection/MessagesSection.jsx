import React, {useEffect, useRef, useState} from 'react';
import style from './MessagesSection.module.scss'
import {useParams} from "react-router";
import {mainChatRequests} from "../../../ApiRequests/MainChat/MainChat.js";
import {getInterlocutor, groupedChatMessage} from "../MainChatHelper/MainChatHelper.js";
import {useDispatch, useSelector} from "react-redux";
import Message from "./Message/Message.jsx";
import {getChatsThunkCreator} from "../../../Redux/MainChats/mainChatsReducer.js";
import {submitMessageHandlerThunkCreator} from "../../../Redux/MainChat/mainChatReducer.js";
import ChatTextarea from "./ChatTextarea/ChatTextarea.jsx";
import OnlineStatus from "../../CourseChat/OnlineStatus/OnlineStatus.jsx";

const MessagesSection = () => {
   const {idChat} = useParams()
   const [chat, setChat] = useState(null)
   const [valueTextarea, setValueTextarea] = useState("")
   const [interlocutor, setInterlocutor] = useState(null)
   const [waitResponse, setWaitResponse] = useState(false)
   const currentUser = useSelector((state) => state.loginUser)
   const newSocket = useSelector((state) => state.socket)

   const dispatch = useDispatch()
   const scroll = useRef()

   useEffect(() => {
      if (idChat) {
         mainChatRequests.getChatById(idChat).then(res => {

            if (res.status === 200) {
               setChat(res.data.foundChat)
               getInterlocutor(currentUser?._id, res.data.foundChat, setInterlocutor)
            }
         })
      }
   }, [idChat])


   const addMessageItemToChat = () => {
      const itemData = {
         message: valueTextarea,
         author: currentUser?._id,
      }
      if (valueTextarea && !waitResponse) {
         dispatch(submitMessageHandlerThunkCreator(setWaitResponse, chat, itemData, newSocket, currentUser, idChat, setChat, setValueTextarea))
      } else {
         console.log('pls,wait for response')
      }
   }

   useEffect(() => {
      if (newSocket)
         newSocket.on("privateResponse", (id) => {
            mainChatRequests.getChatById(id).then(res => {
               dispatch(getChatsThunkCreator(currentUser?._id))
               if (res.status === 200) {
                  setChat(res.data.foundChat)
               }
            })
         })
   }, [newSocket])

   const groupedMessage=  groupedChatMessage(chat?.messages)

   useEffect(() => {
      if (newSocket) {
         newSocket.on("onlineUsers", () => {
            getInterlocutor(currentUser?._id, chat, setInterlocutor)
         })
         newSocket.on("userDisconnected", () => {
            getInterlocutor(currentUser?._id, chat, setInterlocutor)
         })
      }


   }, [newSocket])

   useEffect(() => {
      scroll.current?.scrollIntoView({behavior: "smooth"})
   }, [chat, scroll])

   return (
      <article className={style.container}>
         <header className={style.header}>
            <h1>{interlocutor?.user.data.name}</h1>
            {interlocutor ? <OnlineStatus noImage={true} isOnline={interlocutor?.online}></OnlineStatus> : null}
         </header>
         <main>
            {interlocutor ? <section className={style.messages}>
               {groupedMessage && Object?.entries(groupedMessage).map(([date, message]) => <div
                  className={style.wrapperMessages}>
                  <h3>{date}</h3>
                  {message?.map((item, index) => <Message scroll={scroll} key={index} messages={item}></Message>)}
               </div>)}
            </section> : <div className={style.defaultMessage}><p>Select a chat to start messaging</p></div>}
            <ChatTextarea setValueTextarea={setValueTextarea} valueTextarea={valueTextarea} submitCallback={addMessageItemToChat}></ChatTextarea>
         </main>
      </article>
   );
};

export default MessagesSection;