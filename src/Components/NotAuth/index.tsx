import style from './style.module.scss'
import React from "react";
import {Link} from 'react-router-dom';

function NotAuth() {
    return (
        <>
            <div className={style.container}>
                <div className={style.textBlock}>
                    <h2 className={style.title}>
                        <b>You are not <span className={style.span}>logged</span> into your account yet!</b>
                    </h2>
                    <p style={{color: 'grey'}}>Before using this section you will have to register or log in to your
                        account</p>
                </div>
                <div>
                    <Link to={'/auth/login'}>
                        <button className={style.firstBtn}>
                            Login
                        </button>
                    </Link>
                </div>
                <Link to={'/auth/signup'}>
                    <button className={style.secondBtn}>
                        Sign up
                    </button>
                </Link>
            </div>
        </>
    )
}

export default NotAuth