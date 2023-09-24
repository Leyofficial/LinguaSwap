import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Login.css';
import appleicon from '../../img/images/appleicon.svg';
import facebookicon from '../../img/images/facebookicon.svg';
import googleicon from '../../img/images/googleicon.svg';
import teacherimg from '../../img/images/teacherimg.jpg';
function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const emailHandler = e => {
    setEmail(e.target.value)
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!re.test(String(e.target.value).toLocaleLowerCase())) {

      setEmailError('Некоректный email')

    }else {
      setEmailError('')
    }
  }


  const passwordHandler = e => {
    setPassword(e.target.value)

    if(e.target.value.length < 3 ||e.target.value.length > 8 ) {
      setPasswordError('Пароль должен быть длинее 3 и меньше 8');

      if(!e.target.value) {
        setPasswordError('Поле поля password обязателен!!');
      }
    }else {
      setPasswordError('')
    }
  }


  return (
    <>
    
      <div className='login'>
        <div className="loginComponent">
  
          <h3 className="loginComponentTitle">Вход</h3>
  
          <nav className="loginComponentNav">
  
            <NavLink className="loginComponentNavLink">Зарегистрируйтесь как ученик</NavLink>
              <span className="loginComponentNavTitle">или</span> <br />
            <NavLink to='/teacherregister' className="loginComponentNavLink">Зарегистрируйтесь как реппетитор</NavLink>
  
          </nav>
  
          <div className="loginComponentContainer">
  
            <button className="loginComponentContainerBtn googleBtn">
              <img src={googleicon} alt={googleicon} className="btnIcon" />
              <span className='btnText'>Продолжить с Google</span>
            </button>
  
            <button className="loginComponentContainerBtn facebookBtn">
              <img src={facebookicon} alt={googleicon} className="btnIcon" />
              <span className='btnText'>Продолжить с Facebook</span>
            </button>
  
            <button className="loginComponentContainerBtn appleBtn">
              <img src={appleicon} alt={googleicon} className="btnIcon" />
              <span className='btnText'>Продолжить с Apple</span>
            </button>
  
          </div>
  
          <div className="orBlock">
            <hr className='or'/>
            <span className="orBlockTitle">или</span>
            <hr className='or'/>
          </div>
  
          <form className="formLogin">
  
            <div className="formContainer">
  
              <div className="formInputBlock">
                <span className="formInputTitle">Эл. почта</span>
                
                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type="email" className="formInputEmail" placeholder='Ваш адрес эл. почты'/>
                {(emailDirty && emailError) && <div className='emailError'>{emailError}</div>}
              </div>
  
              <div className="formInputBlock">
                <span className="formInputTitle">Пароль</span>
                
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" className="formInputEmail" placeholder='Ваш пароль'/>
                {(passwordDirty && passwordError) && <div className='passwordError'>{passwordError}</div>}
              </div>
  
              <NavLink className="forgotPassword">Забыли пароль?</NavLink>
              
              <div className='checkboxBlock'>
                <input  type="checkbox" className='checkboxLogin'/>
                <span className="checkboxText">Запомнить меня</span>
              </div>
  
              <button disabled={!formValid} className="formBtn">отправит</button>
  
            </div>
  
          </form>
  
  
          <div className="warningsBlock">
  
            <p className="warningInfo">
  
              Нажимая <NavLink className='warningsLogin'>«Войти»</NavLink> или <NavLink className='warningsLogin'>«Продолжить»</NavLink>, вы принимаете <br />
              Условия использования и <br />
              Палитику конфидециальности
  
            </p>
  
          </div>
  
        </div>

        <div className="loginImageContent">

          <img src={teacherimg} alt={teacherimg} className="loginImage" />

        </div>
      </div>

    </>
  )
} 

export default Login;