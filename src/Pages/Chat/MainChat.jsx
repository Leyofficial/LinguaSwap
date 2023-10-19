import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getChatsThunkCreator} from "../../Redux/MainChats/mainChatsReducer.js";
import ChatSingleMessage from "./ChatSingleMessage/ChatSingleMessage.jsx";
import MainChatSearch from "./MainChatSearch/MainChatSearch.jsx";
import style from './MainChat.module.scss'
import {Outlet} from "react-router-dom";
import {mainChatRequests} from "../../ApiRequests/MainChat/MainChat.js";


const MainChat = () => {

  const currentUser = useSelector((state) => state.loginUser)
  const dispatch = useDispatch()
  const mainChats = useSelector((state) => state.mainChats)
  const [foundUsers, setFoundUsers] = useState(null)
  const [foundChats, setFoundChats] = useState([])

  useEffect(() => {

    dispatch(getChatsThunkCreator(currentUser?._id))
  }, [currentUser])


  return (
    <>
      <article className={style.container}>
        <aside>
          <section className={style.search}>
            <MainChatSearch setFoundUsers={setFoundUsers} dialogs={mainChats}></MainChatSearch>
          </section>

          <div className={style.containerDialogs}>
            {!foundChats.length >= 1 ? mainChats?.map(dialog => <ChatSingleMessage currentUser={currentUser}
                                                                                   dialog={dialog}></ChatSingleMessage>) : foundChats?.map(dialog =>
              <ChatSingleMessage currentUser={currentUser}
                                 dialog={dialog}></ChatSingleMessage>)}
          </div>
        </aside>
        <main>
          <Outlet></Outlet>
        </main>
      </article>

    </>
  );
};

export default MainChat;