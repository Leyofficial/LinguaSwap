import style from './WholeProfile.module.scss'
import {Avatar, Skeleton} from "@mui/material";
import {CgProfile} from "react-icons/cg";
import {AiOutlineMail, AiOutlineStar} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import List from "../../../Utility/List/List.tsx";
import {mainChatRequests} from "../../../ApiRequests/MainChat/MainChat.js";
import {useDispatch} from "react-redux";
import {createChatThunkCreator, getChatThunkCreate} from "../../../Redux/MainChat/mainChatReducer.js";
import {IUserInfo, IUserOutside} from "../../../types/userTypes.ts";
import {ILanguagesTypes} from "../../../Utility/Languages/languages.ts";
import {getImageFromServer} from "../../../ApiRequests/ServerFiles/getImage.js";
import {useTypedSelector} from "../../../hooks/useTypedSelector.ts";
import {logoutAC} from "../../../Redux/isAuth/isAuthAC.ts";
import {backFromLogin} from "../../../Redux/isStartToLogin/isStartToLoginAC.ts";
import {errorToaster} from "../../../Utility/Toaster/Toaster.ts";
import {Toaster} from "react-hot-toast";
import {RootState} from "../../../Redux/rootReduce.ts";


function WholeProfile({user, isMine}: IUserOutside) {
    const currentUser: IUserInfo = useTypedSelector((state: any ) => state.loginUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [avatar, setUserAvatar] = useState("")
    const [avatarIsLoad, setLoadAvatar] = useState<boolean>(false)
    const startConversation = () => {
        if (currentUser) {
            getChatThunkCreate(currentUser._id, user._id, navigate)(dispatch)
        } else {
            errorToaster('First you have to login!')
        }
    }
    const logout = () => {
         dispatch(logoutAC());
         dispatch(backFromLogin())
        localStorage.setItem('alreadyStart' , String(false));
        navigate('/')
        localStorage.setItem("loginUser", String(false));
    }

    useEffect(() => {
        getImageFromServer(user?.user.data.photo, setUserAvatar ,setLoadAvatar ).catch((err) => console.log(err));

    }, [user])
    return (
        <>
            {isMine ? <h2 className={style.title}>Your <span className={style.span}>profile</span>:</h2> : null};
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className={style.container}>
                <div className={style.block}>
                    <div className={style.leftBlock}>
                        <div className={style.blockCenter}>
                            <div className={style.avatar}>
                                {avatarIsLoad ? <Avatar sx={{width: 105, height: 105, textAlign: 'center'}} src={avatar} /> :
                                    <Skeleton variant="circular" width={105} height={105}/>}
                            </div>
                            <h2 style={{marginBottom: '10px'}}><b>{user?.user.data?.name}</b></h2>
                            <h3 className={style.span}>@{user?.user.data?.userTag}</h3>
                            <h3 className={style.bio}>{user?.user.data?.bio}</h3>
                        </div>
                        <div className={style.avatarBlock}>
                            <CgProfile className={style.profile} size={30}/>
                            <p>{user?.user.data?.status}</p>
                        </div>
                        <div className={style.avatarBlock}>
                            <AiOutlineMail className={style.profile} size={30}/>
                            <p>{user?.email}</p>
                        </div>
                        <div className={style.avatarBlock}>
                            <AiOutlineStar className={style.profile} size={30}/>
                            <p>{user?.user.data?.experience + ' '} experience/s</p>
                        </div>
                        {isMine ?
                            <button onClick={logout} className={style.messageBtn}>Logout</button> : <Link to={''}>
                            <button onClick={startConversation} className={style.messageBtn}>Message</button>
                        </Link>}
                    </div>
                    <div className={style.rightBlock}>
                        <h2 className={style.titleRight}>Projects & Skills</h2>
                        On the site since : <b className={style.span}>{user?.date}</b>
                        <div className={style.course}>
                            On course :
                        </div>
                        <p className={style.languagesTitle}>Languages know :</p>
                        <div className={style.languagesBlock}>
                            <List items={user?.user.data?.languagesKnow}
                                  rerender={(item: ILanguagesTypes) => <div key={item.label} className={style.languages}
                                                                            style={{background: item.color}}>
                                      {item.label}
                                  </div>}></List>
                        </div>
                        <p className={style.languagesTitle}>Languages learn :</p>
                        <div className={style.languagesBlock}>
                            <List items={user?.user.data?.languagesLearn}
                                  rerender={(item: ILanguagesTypes) => <div key={item.label} className={style.languages}
                                                                            style={{background: item.color}}>
                                      {item.label}
                                  </div>}></List>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WholeProfile;