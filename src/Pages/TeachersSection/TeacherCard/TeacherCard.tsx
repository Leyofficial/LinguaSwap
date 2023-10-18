import style from './TeacherCard.module.scss'
import React, {useState} from 'react';
import {Avatar} from "@mui/material";
import ModalProfile from "../../../Utility/ModalProfile/ModalProfile.tsx";
import {ILanguages, IUser} from "../../../Utility/ModalProfile/types.ts";


const TeacherCard = ({name, photo, userTag , languagesKnow, bio, languagesLearn, id} : IUser) => {
    const user : IUser = {
        id: id,
        name: name,
        photo: photo,
        userTag: userTag,
        languagesKnow: languagesKnow,
        bio: bio,
        languagesLearn: languagesLearn,
    }
    const [modalProfile, setModalProfile] = useState<IUser>(user);
    const [modalActive, setModalActive] = useState(false)

    function closeModal () {
        setModalActive(false)
    }

    return (
        <>
            <ModalProfile callback={closeModal} modalActive={modalActive} user={modalProfile}></ModalProfile>
            <li onClick={() => {
                setModalProfile(user)
                setModalActive((prev) => !prev)
            }
            } className={style.card}>

                <div className={style.avatar}>
                    <Avatar sx={{width: 74, height: 74, textAlign: 'center'}} src={photo}/>
                </div>
                <h2 style={{height: '60px', lineHeight: '30px'}}>{name} <br/> <span
                    className={style.span}>@{userTag}</span></h2>
                <div className={style.languagesBlock}>
                    {languagesKnow.map((item : ILanguages) => {
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