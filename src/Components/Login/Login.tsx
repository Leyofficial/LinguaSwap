import {Link, NavLink} from 'react-router-dom';
import style from './Login.module.scss'
import {useNavigate} from "react-router";
import React, {useState} from "react";
import socketIO, {io} from "socket.io-client";
import {webSocketAC} from "../../Redux/WebSocket/webSocketReducer.js";
import {useDispatch} from "react-redux";
import {errorToaster} from "../../Utility/Toaster/Toaster.ts";
import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {Toaster} from "react-hot-toast";
import {createInfo} from "./sentToServer.ts";
import {FaEye, FaEyeSlash} from "react-icons/fa";


interface IInfo {
    email: string,
    password: string
}

function Login() {
    const [showPassword , setShowPassword] = useState<boolean>(false)
    const [checkBox, setCheckBox] = useState<boolean>(false)
    // title, callback, rotateIcon, path = "#"
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {register, handleSubmit, formState : {errors}} = useForm<IInfo>({
        defaultValues: {},

    })

    const submit: SubmitHandler<IInfo> = data => {
       createInfo(data.email , data.password)(dispatch);
    }
    const error : SubmitErrorHandler<IInfo> = data => {
        errorToaster('Fill in all inputs fields');
    }

    function backToLast() {
        navigate(-1);
    }
    return (
        <>
            <h1 className={style.superTitle}>LINGUA SWAP</h1>
            <Toaster position="top-right" reverseOrder={false}/>
            <div className={style.container}>
                <div className={style.loginBlock}>
                    <div className={style.button}>
                        <h2 onClick={backToLast} className={style.link}>Back</h2>
                    </div>
                    <div className={style.content}>
                        <div className={style.chooses}>
                            <div className={style.loginBtn}>
                                <NavLink to="/faq"
                                         style={isActive => ({
                                             color: isActive ? "dodgerblue" : "black",
                                             borderBottom: isActive ? '2px solid dodgerblue' : ""
                                         })}>Login</NavLink>
                            </div>
                            <div className={style.signupBtn}>
                                <Link to={'/signup'}>Sign up</Link>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(submit , error)}>
                            <div className={style.inputs}>
                                <div>
                                    <input
                                        {...register("email" , {required : 'Input fields are required' , minLength : {
                                            value : 5,
                                                message : 'The input field must be more than 5 characters'
                                            }})}
                                        className={`${style.input} ${errors.email ? style.invalidInput : ''  } `} placeholder={'email'} type="email"
                                        id="email" size={30}/>
                                    <div className={style.warning}>{errors?.email  && <b>{errors?.email.message || 'Error!'}</b>}</div>
                                </div>
                                <div className={style.passwordBlock}>
                                    <input
                                        {...register("password" , {required : 'Input fields are required' , minLength : {
                                                value : 5,
                                                message : 'The input field must be more than 5 characters'
                                            }})}
                                        className={`${style.input} ${errors.password ? style.invalidInput : ''  } `} type={ showPassword ? "text" : "password"} placeholder={'password'}/>
                                    <div className={style.eye} onClick={() => setShowPassword((prev) => !prev)}>
                                        {!showPassword ? <FaEyeSlash/> : <FaEye/>}
                                    </div>
                                    <div className={style.warning}>{errors?.password  && <b>{errors?.password.message || 'Error!'}</b>}</div>

                                </div>
                                 <div className={style.checkbox}>
                                    <input id='accept' type="checkbox" onChange={() => setCheckBox((prev => !prev))}
                                           checked={checkBox}/>
                                    <label className={style.label} htmlFor="accept">You agree with private
                                        policy <br/> and your cookie preferences</label>
                                </div>
                            </div>
                            <button className={style.btn} >
                                Login
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login