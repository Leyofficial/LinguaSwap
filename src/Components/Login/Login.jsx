import React, { useEffect, useState } from 'react'


import { Link, useNavigate } from 'react-router-dom'

import style from './Login.module.css';
import appleicon from '../../img/images/appleicon.svg';
import facebookicon from '../../img/images/facebookicon.svg';
import googleicon from '../../img/images/googleicon.svg';
import teacherimg from '../../img/images/teacherimg.jpg';
import { useDispatch } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { fetchUserAC } from '../../Redux/login/loginactions';
import {loginUser} from '/src/ApiRequests/Courses/AuthUser.js';

function Login() {

  const [userValue, setUserValue] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  


  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('email не может быть пустым');
  const [passwordError, setPasswordError] = useState('password не может быть пустым');
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {

    if(emailError || passwordError) {
      setFormValid(false)
    }else {
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
      return{
        ...data,
        [e.target.name]: e.target.value
      }
    })

    

    

    if(e.target.name === 'email') {
      const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!re.test(String(e.target.value).toLocaleLowerCase())) {

        setEmailError('Некоректный email')
  
      }else {
        setEmailError('')
      }

    }else if(e.target.name === 'password') {
      if(e.target.value.length < 6 ||e.target.value.length > 8 ) {
        setPasswordError('Пароль должен быть больше 6 символов');
  
        if(!e.target.value) {
          setPasswordError('Поле поля password обязателен!!');
        }
      }else {
        setPasswordError('')
      }
    }
  }


  const dispatch = useDispatch();
  const navigate = useNavigate();


  const loginSubmit = e => {
    e.preventDefault();
    
    loginUser(userValue).then(res => dispatch(fetchUserAC(res.data.user)));

    navigate('/');
  }

  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  

  return (
    <>
    
      <div className={style.login}>
        <div className={style.loginComponent}>
  
          <h3 className={style.loginComponentTitle}>Вход</h3>
  
          <nav className={style.loginComponentNav}>

            <p className={style.loginComponentText}>

            Если еще не регистрировались можете 
            <Link to='/teacherregister' className={style.loginComponentNavLink}> Зарегистрироваться </Link>



            </p>

  
          </nav>
  
          <div className={style.loginComponentContainer}>
  
            <button className={`${style.loginComponentContainerBtn} ${style.googleBtn}`}>
              <img src={googleicon} alt={googleicon} className={style.btnIcon} />
              <span className={style.btnText}>Продолжить с Google</span>
            </button>
  
            <button className={`${style.loginComponentContainerBtn} ${style.facebookBtn}`}>
              <img src={facebookicon} alt={googleicon} className={style.btnIcon} />
              <span className={style.btnText}>Продолжить с Facebook</span>
            </button>
  
            <button className={`${style.loginComponentContainerBtn} ${style.appleBtn}`}>
              <img src={appleicon} alt={googleicon} className={style.btnIcon} />
              <span className={style.btnText}>Продолжить с Apple</span>
            </button>

          </div>
  
          <div className={style.orBlock}>
            <hr className={style.or}/>
            <span className={style.orBlockTitle}>или</span>
            <hr className={style.or}/>
          </div>
  
          <form onSubmit={loginSubmit} className={style.formLogin}>
  
            <div className={style.formContainer}>
  
              <div className={style.formInputBlock}>
                <span className={style.formInputTitle}>Эл. почта</span>
                
                <input onChange={e => dataHandlerChange(e)} value={userValue.email} onBlur={e => blurHandler(e)} name='email' type="email" className={style.formInputEmail} placeholder='Ваш адрес эл. почты'/>
                {(emailDirty && emailError) && <div className={style.emailError}>{emailError}</div>}
              </div>
  
              <div className={style.formInputBlock}>
                <span className={style.formInputTitle}>Пароль</span>
                
                
                  <input onChange={e => dataHandlerChange(e)} value={userValue.password} onBlur={e => blurHandler(e)} name='password' type={showPassword ? "text" : "password"} className={style.formInputEmail} placeholder='Ваш пароль'/>
                  <button className={style.eyePassword} type="button" onClick={togglePasswordVisibility}>
                  {!showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                {(passwordDirty && passwordError) && <div className={style.passwordError}>{passwordError}</div>}
              </div>

              <Link className={style.forgotPassword}>Забыли пароль?</Link>
              
              <div className={style.checkboxBlock}>
                <input  type="checkbox" className={style.checkboxLogin}/>
                <span className={style.checkboxText}>Запомнить меня</span>
              </div>
  
              <button className={style.formBtn}>Отправить</button>

            </div>
  
          </form>
  
  
          <div className={style.warningsBlock}>
  
            <p className={style.warningInfo}>
  
              Нажимая <Link className={style.warningsLogin}>«Войти»</Link> или <Link className={style.warningsLogin}>«Продолжить»</Link>, вы принимаете <br />
              Условия использования и <br />
              Палитику конфидециальности
  
            </p>
  
          </div>
  
        </div>

        <div className={style.loginImageContent}>

          <img src={teacherimg} alt={teacherimg} className={style.loginImage} />

        </div>
      </div>

    </>
  )
}

export default Login;