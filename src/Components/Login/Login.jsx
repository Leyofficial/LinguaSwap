import React, {useEffect, useState} from 'react'


import {Link, useNavigate} from 'react-router-dom'

import appleicon from '../../img/images/appleicon.svg';
import facebookicon from '../../img/images/facebookicon.svg';
import googleicon from '../../img/images/googleicon.svg';
import {useDispatch} from 'react-redux';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import {loginUser} from '/src/ApiRequests/Courses/AuthUser.js';
import {authAC} from "../../Redux/isAuth/isAuthAC.js";
import {loginUserAC} from "../../Redux/login/loginUserAC.ts";
import socketIO from "socket.io-client";
import {webSocketAC} from "../../Redux/WebSocket/webSocketReducer.js";


function Login() {

   const [userValue, setUserValue] = useState({
      email: '',
      password: '',
   });

   const [showPassword, setShowPassword] = useState(false);


   const [emailDirty, setEmailDirty] = useState(false);
   const [passwordDirty, setPasswordDirty] = useState(false);
   const [emailError, setEmailError] = useState('email не может быть пустым');
   const [passwordError, setPasswordError] = useState('password не может быть пустым');
   const [formValid, setFormValid] = useState(false)

   useEffect(() => {

      if (emailError || passwordError) {
         setFormValid(false)
      } else {
         setFormValid(true)
      }

   }, [emailError, passwordError])

   const blurHandler = e => {
      switch (e.target.name) {
         case 'email':
            setEmailDirty(true);
            break;
         case 'password':
            setPasswordDirty(true);
            break;
      }
   }

   const dataHandlerChange = e => {

      setUserValue(data => {
         return {
            ...data,
            [e.target.name]: e.target.value
         }
      })


      if (e.target.name === 'email') {
         const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if (!re.test(String(e.target.value).toLocaleLowerCase())) {

            setEmailError('Некоректный email')

         } else {
            setEmailError('')
         }

      } else if (e.target.name === 'password') {
         if (e.target.value.length < 6 || e.target.value.length > 8) {
            setPasswordError('Пароль должен быть больше 6 символов');

            if (!e.target.value) {
               setPasswordError('Поле поля password обязателен!!');
            }
         } else {
            setPasswordError('')
         }
      }
   }

   const dispatch = useDispatch()
   const navigate = useNavigate()
   const loginSubmit = e => {

      e.preventDefault()
      loginUser(userValue).then(res => {
         if (res.status === 200) {

            dispatch(loginUserAC(res.data.user));
            // const socket = socketIO.connect('https://linguaswap-9bebd1d452cf.herokuapp.com')

            // dispatch(webSocketAC(socket))
            // socket.emit("newUser", res.data.user._id)
            localStorage.setItem('loginUser', JSON.stringify(res.data.user.token))
            dispatch(authAC())
            navigate('/');
         } else {

         }

      })
   }

   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };

   return (
      <>

         <div className='login'>
            <div className="loginComponent">

               <h3 className="loginComponentTitle">Вход</h3>

               <nav className="loginComponentNav">

                  <p className="loginComponentText">

                     Если еще не регистрировались можете
                     <Link to='/teacherregister' className="loginComponentNavLink"> Зарегистрироваться </Link>


                  </p>


               </nav>

               <div className="loginComponentContainer">

                  <button className="loginComponentContainerBtn googleBtn">
                     <img src={googleicon} alt={googleicon} className="btnIcon"/>
                     <span className='btnText'>Продолжить с Google</span>
                  </button>

                  <button className="loginComponentContainerBtn facebookBtn">
                     <img src={facebookicon} alt={googleicon} className="btnIcon"/>
                     <span className='btnText'>Продолжить с Facebook</span>
                  </button>

                  <button className="loginComponentContainerBtn appleBtn">
                     <img src={appleicon} alt={googleicon} className="btnIcon"/>
                     <span className='btnText'>Продолжить с Apple</span>
                  </button>

               </div>

               <div className="orBlock">
                  <hr className='or'/>
                  <span className="orBlockTitle">или</span>
                  <hr className='or'/>
               </div>

               <form onSubmit={loginSubmit} className="formLogin">

                  <div className="formContainer">

                     <div className="formInputBlock">
                        <span className="formInputTitle">Эл. почта</span>

                        <input onChange={e => dataHandlerChange(e)} value={userValue.email} onBlur={e => blurHandler(e)}
                               name='email' type="email" className="formInputEmail" placeholder='Ваш адрес эл. почты'/>
                        {(emailDirty && emailError) && <div className='emailError'>{emailError}</div>}
                     </div>

                     <div className="formInputBlock">
                        <span className="formInputTitle">Пароль</span>


                        <input onChange={e => dataHandlerChange(e)} value={userValue.password}
                               onBlur={e => blurHandler(e)} name='password' type={showPassword ? "text" : "password"}
                               className="formInputEmail" placeholder='Ваш пароль'/>
                        <button className='eyePassword' type="button" onClick={togglePasswordVisibility}>
                           {!showPassword ? <FaEyeSlash/> : <FaEye/>}
                        </button>
                        {(passwordDirty && passwordError) && <div className='passwordError'>{passwordError}</div>}
                     </div>

                     <Link className="forgotPassword">Забыли пароль?</Link>

                     <div className='checkboxBlock'>
                        <input type="checkbox" className='checkboxLogin'/>
                        <span className="checkboxText">Запомнить меня</span>
                     </div>

                     <button className="formBtn">Отправить</button>

                  </div>

               </form>


               <div className="warningsBlock">

                  <p className="warningInfo">

                     Нажимая <Link className='warningsLogin'>«Войти»</Link> или <Link
                     className='warningsLogin'>«Продолжить»</Link>, вы принимаете <br/>
                     Условия использования и <br/>
                     Палитику конфидециальности

                  </p>

               </div>

            </div>
         </div>

      </>
   )
}

export default Login;