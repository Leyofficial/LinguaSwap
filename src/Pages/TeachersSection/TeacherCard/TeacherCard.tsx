import style from './TeacherCard.module.scss'
import React, {useEffect, useState} from 'react';
import {Avatar, Skeleton} from "@mui/material";
import ModalProfile from "../../../Utility/ModalProfile/ModalProfile.tsx";
import {IUserWrapperInfo} from "../../../types/userTypes.ts";
import {ILanguagesTypes} from "../../../Utility/Languages/languages.ts";
import {getImageFromServer} from "../../../ApiRequests/ServerFiles/getImage.js";


const TeacherCard = ({name, photo, userTag, languagesKnow, bio, languagesLearn, _id}: IUserWrapperInfo) => {
    const [avatar, setAvatar] = useState("")
    const [avatarIsLoad, setIsLoad] = useState<boolean>(false)
    const user: IUserWrapperInfo = {
        _id: _id,
        name: name,
        photo: photo,
        userTag: userTag,
        languagesKnow: languagesKnow,
        bio: bio,
        languagesLearn: languagesLearn,
    }
    const [modalProfile, setModalProfile] = useState<IUserWrapperInfo>(user);
    const [modalActive, setModalActive] = useState<boolean>(false)

    function closeModal() {
        setModalActive(false)
    }

    useEffect(() => {
        getImageFromServer(photo,setAvatar).catch((error) => console.log(error))
        setTimeout(() => {
            setIsLoad(true)
        }, 600)

    },[photo])
    return (
        <>
            <ModalProfile callback={closeModal} modalActive={modalActive} user={modalProfile}></ModalProfile>
            <li onClick={() => {
                setModalProfile(user)
                setModalActive((prev) => !prev)
            }
            } className={style.card}>

                <div className={style.avatar}>
                    {avatarIsLoad ? <Avatar sx={{width: 74, height: 74, textAlign: 'center'}} src={avatar}/> :
                        <Skeleton variant="circular" width={70} height={70}/>}
                </div>
                <h2 style={{height: '60px', lineHeight: '30px'}}>{name} <br/> <span
                    className={style.span}>@{userTag}</span></h2>
                <div className={style.languagesBlock}>
                    {languagesKnow.map((item: ILanguagesTypes) => {
                        return <div key={item.label} className={style.languages} style={{background: item.color}}>
                            {item.label}
                        </div>
                    })}
                </div>
            </li>
        </>
    );
};

export default TeacherCard;