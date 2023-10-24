import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getChatsThunkCreator} from "../../Redux/MainChats/mainChatsReducer.js";
import ChatSingleMessage from "./ChatSingleMessage/ChatSingleMessage.jsx";
import MainChatSearch from "./MainChatSearch/MainChatSearch.jsx";
import style from './MainChat.module.scss'
import {Outlet} from "react-router-dom";


const MainChat = () => {

  const currentUser = useSelector((state) => state.loginUser)
  const dispatch = useDispatch()
  const mainChats = useSelector((state) => state.mainChats)
  const [foundUsers, setFoundUsers] = useState(null)


  useEffect(() => {
    if (currentUser)
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
            {mainChats?.map(dialog => <ChatSingleMessage currentUser={currentUser}
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