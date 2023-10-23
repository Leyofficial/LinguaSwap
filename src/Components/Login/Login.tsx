// import {loginUserAC} from "../../Redux/login/loginUserAC.ts";
// import {authAC} from "../../Redux/isAuth/isAuthAC.ts";
//
// dispatch(loginUserAC(res.data.user));
// localStorage.setItem('loginUser', JSON.stringify(res.data.user.token))
// dispatch(authAC())
// navigate('/');
import {Link, NavLink} from 'react-router-dom';
import style from './Login.module.scss'
import {useNavigate} from "react-router";
import CustomButton from "../../Utility/CustomButton/CustomButton.jsx";
import {useState} from "react";
import {UserProfile} from "../../ApiRequests/Profile/UserProfile.js";

interface IInfo {
    email : string,
    password : string
}

function Login () {
    const [info , setInfo] = useState<IInfo>({
        email : '',
        password : '',
    })
    const [email , setEmail] = useState<string>('');
    const [password  , setPassword ] = useState<string>('')
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
        UserProfile.getProfile(obj)
    }

    return (
        <>
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
                                    <input onChange={setEmail(event.target.value)} value={email} className={style.input} type="email" placeholder={'email'}/>
                                </div>
                                <input onChange={setPassword(event.target.value)} className={style.input}  value={password} type="password" placeholder={'password'}/>
                            </div>
                            <button onClick={createInfo}>
                                <CustomButton title={'Login'} rotateIcon={false} path={"#"} ></CustomButton>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login