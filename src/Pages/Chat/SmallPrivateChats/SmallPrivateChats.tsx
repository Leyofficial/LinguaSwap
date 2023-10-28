import React, {Suspense, useEffect, useState} from 'react';
import style from './SmallPrivateChats.module.scss'
import MainChat from "../MainChat.tsx";
import CircularUnderLoad from "../ChatSingleMessage/LoaderChat/LoaderChat.jsx";
import {IDialog} from "../mainChatTypes.ts";
import {useTypedSelector} from "../../../hooks/useTypedSelector.ts";
import {useDispatch} from "react-redux";
import {getChatsThunkCreator} from "../../../Redux/MainChats/mainChatsReducer.js";
import ChatSingleMessage from "../ChatSingleMessage/ChatSingleMessage.tsx";
import SearchInput from "../../../Utility/SearchInput/SearchInput.tsx";

const SmallPrivateChats = () => {
    const currentUser = useTypedSelector((state) => state.loginUser)
    const dispatch = useDispatch()
    const mainChats = useTypedSelector((state) => state.mainChats)
    const [load, setLoad] = useState<boolean>(false)
    const [value, searchValue] = useState<string>('')
    useEffect(() => {
        if (currentUser)
            getChatsThunkCreator(currentUser?._id, setLoad)(dispatch)
    }, [currentUser])
    return (
        <div className={style.containerDialogs}>
            <SearchInput value={value} callback={searchValue} placeholder={'Search'}></SearchInput>
            {load ? <CircularUnderLoad/> : mainChats?.map((dialog: IDialog, index: number) => <Suspense
                fallback={<CircularUnderLoad/>}> <ChatSingleMessage key={index}
                                                                    currentUser={currentUser}
                                                                    dialog={dialog}></ChatSingleMessage></Suspense>)}
        </div>
    );
};

export default SmallPrivateChats;