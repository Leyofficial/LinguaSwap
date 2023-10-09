import style from './ModalProfile.module.scss'
import React from "react";
import {Avatar} from "@mui/material";

function ModalProfile({modalActive, user}) {
    debugger
    return (
        <>
            <div style={modalActive ? {display: 'block'} : {display: 'none'}} className={style.overlay}></div>
             <div className={style.modal + ` ${modalActive ? style.modalHere : style.modalGone}`}>
                 <div className={style.topContent}>
                     <Avatar sx={{ width: 84, height: 84 }} alt={user?.hash} src={user?.photo}/>
                     <div>
                         <h2>{user?.name}</h2>
                         <h2 className={style.span}>{user?.hash}</h2>
                     </div>
                 </div>
                 <div className={style.mainContent}>
                     <div>
                             <h2 className={style.bio}>
                                 {( user?.bio.length  > 0 ? user?.bio : 'Not biography :(') }
                             </h2>
                            <div className={style.languages}>
                                <div className={style.languagesKnow}>
                                    {user?.languages.map((item) => {
                                        return <div className={style.language} style={{background: item.color}}>
                                            {item.label}
                                        </div>
                                    })}
                                </div>
                            </div>
                     </div>
                 </div>
             </div>
        </>
    )
}

export default ModalProfile