import React, {Suspense, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getChatsThunkCreator} from "../../Redux/MainChats/mainChatsReducer.js";
import style from './MainChat.module.scss'
import {Outlet} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {IDialog} from "./mainChatTypes.ts";
import CircularUnderLoad from "./ChatSingleMessage/LoaderChat/LoaderChat.jsx";

const MainChatSearch = React.lazy(() => import("./MainChatSearch/MainChatSearch.js"))
const ChatSingleMessage = React.lazy(() => import("./ChatSingleMessage/ChatSingleMessage.js"))
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
                        <Suspense fallback={<CircularUnderLoad/>}>
                            <MainChatSearch ></MainChatSearch>
                        </Suspense>

                    </section>

                    <div className={style.containerDialogs}>
                        {load ? <CircularUnderLoad/> : mainChats?.map((dialog: IDialog, index: number) =>   <Suspense fallback={<CircularUnderLoad/>}> <ChatSingleMessage key={index}
                                                                                               currentUser={currentUser}
                                                                                                                                          dialog={dialog}></ChatSingleMessage></Suspense>)}
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