import style from './ModalProfile.module.scss'
import React from "react";
import {Avatar} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import closeBtn from './../../img/icons/close.png'
import {ILanguages, IModalProfile} from "./types.ts";
import List from '../List/List.tsx';
import {mainChatRequests} from "../../ApiRequests/MainChat/MainChat.js";
import {useDispatch, useSelector} from "react-redux";
import {createChatThunkCreator, getChatThunkCreate} from "../../Redux/MainChat/mainChatReducer.js";

function ModalProfile({modalActive, user, callback}: IModalProfile) {
    const currentUser = useSelector((state: any) => state.loginUser)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const startConversation = () => {
        getChatThunkCreate(currentUser._id, user.id,navigate)(dispatch)

    }
    return (
        <>
            <div style={modalActive ? {display: 'block'} : {display: 'none'}} className={style.overlay}></div>
            <div className={style.modal + ` ${modalActive ? style.modalHere : style.modalGone}`}>
                <img onClick={callback} className={style.closeBtn} src={closeBtn} alt="X"/>
                <div className={style.topContent}>
                    <Avatar sx={{width: 84, height: 84}} alt={user?.hash} src={user?.photo}/>
                    <div>
                        <h2>{user?.name}</h2>
                        <h2 className={style.span}>{user?.hash}</h2>
                    </div>
                </div>
                <div className={style.mainContent}>
                    <div>
                        <h2 className={style.bio}>
                            {user?.bio.length > 0 ? user?.bio : ''}
                        </h2>
                        <div className={style.languagesBlock}>
                            <h3>Language/s<span className={style.span}> know  </span>:</h3>
                            <div className={style.languages}>
                                <div className={style.languagesKnow}>
                                    <List items={user?.languages}
                                          rerender={(item: ILanguages) => <div className={style.language}
                                                                               style={{background: item.color}}>
                                              {item.label}
                                          </div>}/>
                                </div>
                                <h3 style={{color: 'black'}}>Language/s <span className={style.span}> learn  </span>:
                                </h3>
                                <div className={style.languagesLearn}>
                                    <List items={user?.languagesLearn}
                                          rerender={(item: ILanguages) => <div className={style.language}
                                                                               style={{background: item.color}}>
                                              {item.label}
                                          </div>}/>
                                </div>
                            </div>
                        </div>
                        <div className={style.buttons}>
                            <Link to={''}>
                                <button onClick={startConversation} className={style.messageBtn}>Message</button>
                            </Link>
                            <Link to={'find/' + user?.id}>
                                <button className={style.button}>Profile</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalProfile