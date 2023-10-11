import style from './WholeProfile.module.scss'
import {Avatar, Skeleton, Stack} from "@mui/material";
import {CgProfile} from "react-icons/cg";
import {AiOutlineMail, AiOutlineStar} from "react-icons/ai";
import {Link} from "react-router-dom";
import React from "react";

function WholeProfile({user , isPersonal}) {
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
                        {user?.user.data.hash}
                        <div className={style.course}>
                            On course :
                        </div>
                        <p className={style.languagesTitle}>Languages know :</p>
                        <div className={style.languagesBlock}>
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
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default WholeProfile;