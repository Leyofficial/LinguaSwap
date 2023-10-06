import style from './TeacherCard.module.scss'
import React from 'react';
import {Avatar} from "@mui/material";
const TeacherCard = ( {name , photo , hash , languages} ) => {
    return (
        <div  className={style.cardBlock}>
                <li className={style.card}>
                    <div className={style.avatar}>
                        <Avatar sx={{ width: 74, height: 74, textAlign: 'center' }} src={photo}/>
                    </div>
                    <h2>{name} , @{hash} </h2>
                    <div className={style.languagesBlock}>
                        {languages.map((item) => {
                            return <div className={style.languages} style={{background : item.color}}>
                                {item.label}
                            </div>
                        })}
                    </div>
                </li>
        </div>
    );
};

export default TeacherCard;