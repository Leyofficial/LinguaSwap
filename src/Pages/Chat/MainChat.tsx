import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getChatsThunkCreator} from "../../Redux/MainChats/mainChatsReducer.js";
import ChatSingleMessage from "./ChatSingleMessage/ChatSingleMessage.js";
import MainChatSearch from "./MainChatSearch/MainChatSearch.js";
import style from './MainChat.module.scss'
import {Outlet} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {IDialog} from "./mainChatTypes.ts";
import CircularUnderLoad from "./ChatSingleMessage/LoaderChat/LoaderChat.jsx";

const MainChat = () => {

    const currentUser = useTypedSelector((state) => state.loginUser)
    const dispatch = useDispatch()
    const mainChats = useTypedSelector((state) => state.mainChats)
    const [load, setLoad] = useState<boolean>(false)

    useEffect(() => {
        if (currentUser)
            getChatsThunkCreator(currentUser?._id,setLoad)(dispatch)
    }, [currentUser])


    return (
        <>
            <article className={style.container}>
                <aside>
                    <section className={style.search}>
                        <MainChatSearch></MainChatSearch>
                    </section>

                    <div className={style.containerDialogs}>
                        {load ? <CircularUnderLoad/> : mainChats?.map((dialog: IDialog, index: number) => <ChatSingleMessage key={index}
                                                                                               currentUser={currentUser}
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