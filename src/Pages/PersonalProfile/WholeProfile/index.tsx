import style from './WholeProfile.module.scss'
import {Avatar, Skeleton, Stack} from "@mui/material";
import {CgProfile} from "react-icons/cg";
import {AiOutlineMail, AiOutlineStar} from "react-icons/ai";
import {Link} from "react-router-dom";
import React from "react";
<<<<<<< HEAD:src/Pages/PersonalProfile/WholeProfile/index.jsx

function WholeProfile({user , isPersonal}) {
=======
import {ILanguages} from "../../../Utility/ModalProfile/types.ts";
import List from "../../../Utility/List/List.tsx";
import {IUserProfile} from "./types.ts";
function WholeProfile({user} : IUserProfile) {
>>>>>>> 643f76ace336b8c32896b2a86575a8afab9e9e53:src/Pages/PersonalProfile/WholeProfile/index.tsx
    return (
        <>
            <div className={style.container}>
                <div className={style.block}>
                    <div className={style.leftBlock}>
                        <div className={style.blockCenter}>
                            <div className={style.avatar}>
                                    <Avatar src={'/' + user?.user.data.photo}
                                            sx={{width: 104, height: 104, textAlign: 'center'}}/>

                            </div>
                            <h2 style={{marginBottom: '10px'}}><b>{user?.user.data.name}</b></h2>
                            <h3 className={style.span}>@{user?.user.data.userTag}</h3>
                            <h3 className={style.bio}>{user?.user.data.bio}</h3>
                        </div>
                        <div className={style.avatarBlock}>
                        <CgProfile className={style.profile} size={30}/>
                        <p>{user?.user.data.status}</p>
                        </div>
                        <div className={style.avatarBlock}>
                            <AiOutlineMail className={style.profile} size={30}/>
                            <p>{user?.email}</p>
                        </div>
                        <div className={style.avatarBlock}>
                            <AiOutlineStar className={style.profile} size={30}/>
                            <p>{user?.user.data.experience + ' '} experience/s</p>
                        </div>
                        <Link to={''}>
                            <button className={style.messageBtn}>Message</button>
                        </Link>
                    </div>
                    <div className={style.rightBlock}>
                        <h2  className={style.titleRight}>Projects & Skills</h2>
                        On the site since  :  <b className={style.span}>{user?.date}</b>
<<<<<<< HEAD:src/Pages/PersonalProfile/WholeProfile/index.jsx
                        {user?.user.data.hash}
=======
>>>>>>> 643f76ace336b8c32896b2a86575a8afab9e9e53:src/Pages/PersonalProfile/WholeProfile/index.tsx
                        <div className={style.course}>
                            On course :
                        </div>
                        <p className={style.languagesTitle}>Languages know :</p>
                        <div className={style.languagesBlock}>
<<<<<<< HEAD:src/Pages/PersonalProfile/WholeProfile/index.jsx
                            {user?.user.data.languagesKnow.map((item) => {
                                    return <div key={item.label} className={style.languages} style={{background: item.color}}>
                                        {item.label}
                                    </div>
                            })}
                        </div>
                        <p className={style.languagesTitle}>Languages learn :</p>
                        <div className={style.languagesBlock}>
                            {user?.user.data.languagesLearn.map((item) => {
                                return <div key={item.label} className={style.languages} style={{background: item.color}}>
                                    {item.label}
                                </div>
                            })}
=======
                            <List items={user?.user.data?.languagesKnow} rerender={(item : ILanguages) =>  <div key={item.label} className={style.languages} style={{background: item.color}}>
                                {item.label}
                            </div>}></List>
                        </div>
                        <p className={style.languagesTitle}>Languages learn :</p>
                        <div className={style.languagesBlock}>
                            <List items={user?.user.data?.languagesLearn} rerender={(item : ILanguages) => <div key={item.label} className={style.languages} style={{background: item.color}}>
                                {item.label}
                            </div>}></List>
>>>>>>> 643f76ace336b8c32896b2a86575a8afab9e9e53:src/Pages/PersonalProfile/WholeProfile/index.tsx
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WholeProfile;