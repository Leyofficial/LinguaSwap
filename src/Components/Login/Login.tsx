import {Link, NavLink} from 'react-router-dom';
import style from './Login.module.scss'
import {useNavigate} from "react-router";
import CustomButton from "../../Utility/CustomButton/CustomButton.jsx";
import React, {useState} from "react";
import {UserProfile} from "../../ApiRequests/Profile/UserProfile.js";
import {loginUser} from "../../ApiRequests/Courses/AuthUser.js";
import {loginUserAC} from "../../Redux/login/loginUserAC.ts";
import socketIO, {io} from "socket.io-client";
import {webSocketAC} from "../../Redux/WebSocket/webSocketReducer.js";
import {authAC} from "../../Redux/isAuth/isAuthAC.ts";
import {useDispatch} from "react-redux";
import {errorToaster} from "../../Utility/Toaster/Toaster.ts";
import {Toaster} from "react-hot-toast";


interface IInfo {
    email : string,
    password : string
}

function Login () {
    const [info , setInfo] = useState<IInfo>({
        email : '',
        password : '',
    })
    const dispatch = useDispatch();
    const [email , setEmail] = useState<string>('');
    const [password  , setPassword ] = useState<string>('');
    const [checkBox , setCheckBox] = useState<boolean>(false)
    // title, callback, rotateIcon, path = "#"
    const navigate = useNavigate();
    function backToLast () {
        navigate(-1);
    }

    function createInfo() {
        const obj = {
            email : email,
            password : password,
        }
        loginUser(obj).then(res => {
            if (res.status === 200) {
                dispatch(loginUserAC(res.data.user));
                // const socket = io('http://localhost:3000');
                // dispatch(webSocketAC(socket))
                // socket.emit("newUser", res.data.user._id)
                localStorage.setItem('loginUser', JSON.stringify(res.data.user.token))
                dispatch(authAC())
                navigate('/');
            }
        }).catch(err => {
            errorToaster('Something went wrong (check console)');
            console.log(err)
        })
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
                                              borderBottom : isActive ? '2px solid dodgerblue' : ""
                                          })}>Login</NavLink>
                             </div>
                             <div className={style.signupBtn}>
                                 <Link to={'/signup'}>Sign up</Link>
                             </div>
                         </div>
                        <form>
                            <div className={style.inputs}>
                                <div>
                                    <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                                           value={email} className={style.input}  placeholder={'email'} type="email" id="email" pattern=".+@globex\.com" size={30} required/>
                                </div>
                                <input onChange={(event : React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                                       className={style.input}  value={password} type="password" placeholder={'password'}/>
                                <div className={style.checkbox}>
                                    <input id='accept' type="checkbox" onChange={() => setCheckBox((prev => !prev))} checked={checkBox}/>
                                    <label className={style.label} htmlFor="accept">You agree with private policy <br/> and your cookie preferences</label>
                                </div>

                            </div>
                                <CustomButton  title={'Login'} rotateIcon={false} callback={createInfo} path={"#"} ></CustomButton>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login