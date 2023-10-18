import React, {useEffect, useState} from 'react';
import style from './MessagesSection.module.scss'
import {useParams} from "react-router";
import {mainChatRequests} from "../../../ApiRequests/MainChat/MainChat.js";
import {AiOutlinePaperClip} from "react-icons/ai";
import {LuSend} from "react-icons/lu";
import {getInterlocutor} from "../MainChatHelper/MainChatHelper.js";
import {useSelector} from "react-redux";
import OnlineStatus from "../../ChooseTypeOfChat/TeacherChats/FindTeacher/OnlineStatus/OnlineStatus.jsx";
import Message from "./Message/Message.jsx";

const MessagesSection = () => {
  const {idChat} = useParams()
  const [chat, setChat] = useState(null)
  const [valueTextarea,setValueTextarea] = useState("")
  const [interlocutor,setInterlocutor] = useState(null)
  const currentUser = useSelector((state) => state.loginUser)

  useEffect(() => {
    if (idChat) {
      mainChatRequests.getChatById(idChat).then(res => {
        if(res.status === 200) {
          setChat(res.data.foundChat)
          console.log(res)
          getInterlocutor(currentUser._id,res.data.foundChat,setInterlocutor)
        }
      })

    }

  }, [idChat])
console.log(chat)
  return (
    <article className={style.container}>
      <header className={style.header}>

        <h1>{interlocutor?.user.data.name}</h1>
        <OnlineStatus noImage={true} isOnline={interlocutor?.online}></OnlineStatus>
      </header>
      <main>
        <section>
          {chat?.messages?.map((message,index) => <Message key={index} messages={message}></Message>)}
        </section>
        <section className={style.wrapperTextarea}>
            <AiOutlinePaperClip fontSize={40}></AiOutlinePaperClip>
            <div className={style.textarea}>
              <textarea placeholder={'Type a message'} value={valueTextarea} onKeyPress={(e) => console.log(e)} onChange={(e) => setValueTextarea(e.target.value)}></textarea>
            </div>
            <div className={style.icons}>
              <LuSend onClick={() => console.log('2')} fontSize={40} color={'rgba(12,87,197,0.98)'}></LuSend>
            </div>

        </section>
      </main>
    </article>
  );
};

export default MessagesSection;