import React, {useEffect, useRef, useState} from 'react';
import style from './MessagesSection.module.scss'
import {useParams} from "react-router";
import {mainChatRequests} from "../../../ApiRequests/MainChat/MainChat.js";
import {getInterlocutor, groupedChatMessage} from "../MainChatHelper/MainChatHelper.ts";
import {useDispatch} from "react-redux";
import Message from "./Message/Message.js";
import {getChatsThunkCreator} from "../../../Redux/MainChats/mainChatsReducer.js";
import {submitMessageHandlerThunkCreator} from "../../../Redux/MainChat/mainChatReducer.js";
import ChatTextarea from "./ChatTextarea/ChatTextarea.js";
import OnlineStatus from "../../CourseChat/OnlineStatus/OnlineStatus.tsx";
import {useTypedSelector} from "../../../hooks/useTypedSelector.ts";
import {IDialog} from "../mainChatTypes.ts";
import {IUser} from "../../CourseChat/courseChatTypes.ts";
import {IMessage} from "../../CourseChat/MessagesSection/MessagesSection.tsx";
import CircularUnderLoad from "../ChatSingleMessage/LoaderChat/LoaderChat.jsx";

const MessagesSection = () => {
   const {idChat} = useParams<string>()
   const [chat, setChat] = useState<IDialog | null>(null)
   const [valueTextarea, setValueTextarea] = useState<string>("")
   const [interlocutor, setInterlocutor] = useState<IUser | null>(null)
   const [waitResponse, setWaitResponse] = useState<boolean>(false)
   const currentUser = useTypedSelector((state) => state.loginUser)
   const newSocket = useTypedSelector((state) => state.socket)

   const dispatch = useDispatch()
   const scroll = useRef<HTMLElement | null>(null)
   const [load,setLoad] = useState<boolean>(false)

   useEffect(() => {
      if (idChat) {
         setLoad(true)
         mainChatRequests.getChatById(idChat).then(res => {

            if (res.status === 200) {
               setChat(res.data.foundChat)
               getInterlocutor(currentUser?._id, res.data.foundChat, setInterlocutor)
               setLoad(false)
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
         submitMessageHandlerThunkCreator(setWaitResponse, chat, itemData, newSocket, currentUser, idChat, setChat, setValueTextarea)(dispatch)
      } else {
         console.log('pls,wait for response')
      }
   }

   useEffect(() => {
      if (newSocket)
         newSocket.on("privateResponse", (id:string) => {
            mainChatRequests.getChatById(id).then(res => {
               getChatsThunkCreator(currentUser?._id)(dispatch)
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
            { load ? <CircularUnderLoad/> : (interlocutor ? <section className={style.messages}>
               {groupedMessage && Object?.entries<IMessage[]>(groupedMessage).map(([date, message],index) => <div key={index}
                  className={style.wrapperMessages}>
                  <h3>{date}</h3>
                  {message?.map((item:IMessage, index : number) => <Message scroll={scroll} key={index} messages={item}></Message>)}
               </div>)}
            </section> : <div className={style.defaultMessage}><p>Select a chat to start messaging</p></div>)}
            <ChatTextarea waitResponse={waitResponse} setValueTextarea={setValueTextarea} valueTextarea={valueTextarea} submitCallback={addMessageItemToChat}></ChatTextarea>
         </main>
      </article>
   );
};

export default MessagesSection;