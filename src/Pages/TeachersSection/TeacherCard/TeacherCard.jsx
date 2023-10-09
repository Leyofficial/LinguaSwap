import style from './TeacherCard.module.scss'
import React, {useState} from 'react';
import {Avatar} from "@mui/material";
import ModalProfile from "../../../Utility/ModalProfile/ModalProfile.jsx";

const TeacherCard = ({name, photo, hash, languages , bio , languagesLearn }) => {
    const [modalProfile, setModalProfile] = useState(null);
    const [modalActive, setModalActive] = useState(false)
    const user = {
        name: name,
        photo: photo,
        hash: hash,
        languages: languages,
        bio : bio,
        languagesLearn : languagesLearn,
    }
    return (
        // ${modalActive ? style.modalHere : style.modalGone}
        <>

                <ModalProfile modalActive={modalActive} user={modalProfile}></ModalProfile>
            <li onClick={() => {
                setModalProfile(user)
                setModalActive((prev) => !prev)
            }
            } className={style.card}>

                <div className={style.avatar}>
                    <Avatar sx={{width: 74, height: 74, textAlign: 'center'}} src={photo}/>
                </div>
                <h2 style={{height: '60px', lineHeight: '30px'}}>{name} <br/> <span
                    className={style.span}>@{hash}</span></h2>
                <div className={style.languagesBlock}>
                    {languages.map((item) => {
                        return <div className={style.languages} style={{background: item.color}}>
                            {item.label}
                        </div>
                    })}
                </div>
            </li>
        </>
    );
};

export default TeacherCard;