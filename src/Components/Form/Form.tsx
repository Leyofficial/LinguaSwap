import {Outlet, useNavigate} from "react-router";
import style from "../Login/Login.module.scss";
import { NavLink} from "react-router-dom";
import React from "react";

function Form () {
    const navigate = useNavigate();
    function backToLast() {
        navigate('/');
    }
    return (
        <>
            <h1 className={style.superTitle}>LINGUA SWAP</h1>
            <div className={style.container}>
                <div className={style.loginBlock}>
                    <div className={style.button}>
                        <h2 onClick={backToLast} className={style.link}>Back</h2>
                    </div>
                    <div className={style.content}>
                        <div className={style.chooses}>
                            <div className={style.loginBtn}>
                                <NavLink to="/auth/login" style={({isActive}) => ({
                                    color: isActive ? "dodgerblue" : "black",
                                    borderBottom: isActive ? '2px solid dodgerblue' : ""
                                })}>Login</NavLink>
                            </div>
                            <div className={style.signupBtn}>
                                <NavLink to='/auth/signup' style={({isActive}) => ({
                                    color: isActive ? "dodgerblue" : "black",
                                    borderBottom: isActive ? '2px solid dodgerblue' : ""
                                })} >Sign up</NavLink>
                            </div>
                        </div>
                            <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form