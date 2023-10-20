import style from './ModalProfile.module.scss'
import React from "react";
import {Avatar} from "@mui/material";
import {Link} from "react-router-dom";
import closeBtn from './../../img/icons/close.png'
import List from '../List/List.tsx';
import {IModalProfile} from "./types.ts";
import {ILanguagesTypes} from "../Languages/languages.ts";
function ModalProfile({modalActive, user , callback} : IModalProfile) {
    return (
        <>
            <div style={modalActive ? {display: 'block'} : {display: 'none'}} className={style.overlay}></div>
             <div className={style.modal + ` ${modalActive ? style.modalHere : style.modalGone}`}>
                 <img onClick={callback} className={style.closeBtn} src={closeBtn} alt="X"/>
                 <div className={style.topContent}>
                     <Avatar sx={{ width: 84, height: 84 }} alt={user?.userTag} src={user?.photo}/>
                     <div>
                         <h2>{user?.name}</h2>
                         <h2 className={style.span}>@{user?.userTag}</h2>
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
                                     <List items={user?.languagesKnow} rerender={(item : ILanguagesTypes) => <div className={style.language} style={{background: item.color}}>
                                         {item.label}
                                     </div>}/>
                                 </div>
                                 <h3 style={{color : 'black'}}>Language/s  <span className={style.span}> learn  </span>:</h3>
                                 <div className={style.languagesLearn}>
                                     <List items={user?.languagesLearn} rerender={(item : ILanguagesTypes) => <div className={style.language} style={{background: item.color}}>
                                         {item.label}
                                     </div>}/>
                                 </div>
                             </div>
                         </div>
                         <div className={style.buttons}>
                             <Link to={''}>
                                 <button className={style.messageBtn}>Message</button>
                             </Link>
                             <Link to={'find/' + user?._id}>
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