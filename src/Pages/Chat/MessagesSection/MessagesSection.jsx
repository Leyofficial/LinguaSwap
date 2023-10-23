import React, {useEffect, useRef, useState} from 'react';
import style from './MessagesSection.module.scss'
import {useParams} from "react-router";
import {mainChatRequests} from "../../../ApiRequests/MainChat/MainChat.js";
import {AiOutlinePaperClip} from "react-icons/ai";
import {LuSend} from "react-icons/lu";
import {getInterlocutor} from "../MainChatHelper/MainChatHelper.js";
import {useDispatch, useSelector} from "react-redux";
import OnlineStatus from "../../ChooseTypeOfChat/TeacherChats/FindTeacher/OnlineStatus/OnlineStatus.jsx";
import Message from "./Message/Message.jsx";
import {addChatMessage} from "../../../Redux/ChatWithTeacher/ChatMessages/chatMessagesAC.js";
import {getChatsThunkCreator} from "../../../Redux/MainChats/mainChatsReducer.js";
import {format} from "date-fns";
import {es} from "date-fns/locale";

const MessagesSection = () => {
   const {idChat} = useParams()
   const [chat, setChat] = useState(null)
   const [valueTextarea, setValueTextarea] = useState("")
   const [interlocutor, setInterlocutor] = useState(null)
   const currentUser = useSelector((state) => state.loginUser)
   const dispatch = useDispatch()
   const newSocket = useSelector((state) => state.socket)
   const scroll = useRef()
   const [waitResponse,setWaitResponse] = useState(false)
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
         setWaitResponse(true)
         mainChatRequests.addMessageItem(chat._id, itemData).then(res => {
            if (res.status === 200) {
               newSocket.emit("privateMessage", chat._id)
               dispatch(getChatsThunkCreator(currentUser?._id))
               setWaitResponse(false)
               mainChatRequests.getChatById(idChat).then(res => {
                  if (res.status === 200) {
                     setChat(res.data.foundChat)
                  }
               })
               setValueTextarea("")
            }
         }).catch(err => {
            setWaitResponse(false)
         })
      }else{
         console.log('pls,wait for response')
      }
   }

   useEffect(() => {
      if(newSocket)
      newSocket.on("privateResponse", (id) => {

         mainChatRequests.getChatById(id).then(res => {

            dispatch(getChatsThunkCreator(currentUser?._id))
            if (res.status === 200) {
               setChat(res.data.foundChat)
            }
         })

      })
   }, [newSocket])


   const groupedMessage =
      chat?.messages?.reduce((acc, message) => {
         const newDate = new Date(message.date)
         const date = format(newDate, 'd MMMM', {locale: es});
         if (!acc[date]) {
            acc[date] = []
         }
         acc[date].push(message)
         return acc
      }, {});

   useEffect(() => {
      if(newSocket){
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
            <section className={style.wrapperTextarea}>
               <AiOutlinePaperClip fontSize={40}></AiOutlinePaperClip>
               <div className={style.textarea}>
                  <textarea placeholder={'Type a message'} value={valueTextarea}
                            onChange={(e) => setValueTextarea(e.target.value)}></textarea>
               </div>
               <div className={style.icons}>
                  <LuSend  onClick={() => addMessageItemToChat()} fontSize={40} color={valueTextarea ? 'rgba(12,87,197,0.98)' : 'rgba(12,87,197,0.12)'}></LuSend>
               </div>

            </section>
         </main>
      </article>
   );
};

export default MessagesSection;