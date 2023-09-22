import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Login.css';
import appleicon from '../../images/appleicon.svg';
import facebookicon from '../../images/facebookicon.svg';
import googleicon from '../../images/googleicon.svg';

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
    
      <div className="login-component">

        <h3 className="login-component_title">Вход</h3>

        <nav className="login-component_nav">

          <NavLink className="login-component_nav-link">Зарегистрируйтесь как ученик</NavLink>
            <span className="login-component_nav-title">или</span> <br />
          <NavLink to='/teacherregister' className="login-component_nav-link">Зарегистрируйтесь как реппетитор</NavLink>

        </nav>

        <div className="login-component_container">

          <button className="login-component_container-btn google-btn">
            <img src={googleicon} alt={googleicon} className="btn-icon" />
            <span className='btn-text'>Продолжить с Google</span>
          </button>

          <button className="login-component_container-btn facebook-btn">
            <img src={facebookicon} alt={googleicon} className="btn-icon" />
            <span className='btn-text'>Продолжить с Facebook</span>
          </button>

          <button className="login-component_container-btn apple-btn">
            <img src={appleicon} alt={googleicon} className="btn-icon" />
            <span className='btn-text'>Продолжить с Apple</span>
          </button>

        </div>

        <div className="or-block">
          <hr className='or'/>
          <span className="or-block_title">или</span>
          <hr className='or'/>
        </div>

        <form className="form-login">

          <div className="form-container">

            <div className="form-input_block">
              <span className="form-input_title">Эл. почта</span>
              {(emailDirty && emailError) && <div className='email-error'>{emailError}</div>}
              <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type="email" className="form-input__email" placeholder='Ваш адрес эл. почты'/>
              
            </div>

            <div className="form-input_block">
              <span className="form-input_title">Пароль</span>
              {(passwordDirty && passwordError) && <div className='password-error'>{passwordError}</div>}
              <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" className="form-input__email" placeholder='Ваш пароль'/>
            </div>

            <NavLink className="forgot-password">Забыли пароль?</NavLink>
            
            <div className='checkbox-block'>
              <input  type="checkbox" className='checkbox-login'/>
              <span className="checkbox-text">Запомнить меня</span>
            </div>

            <button disabled={!formValid} className="form-btn">отправит</button>

          </div>

        </form>


        <div className="warnings-block">

          <p className="warnings-info">

            Нажимая <NavLink className='warnings-login'>«Войти»</NavLink> или <NavLink className='warnings-login'>«Продолжить»</NavLink>, вы принимаете <br />
            Условия использования и <br />
            Палитику конфидециальности

          </p>

        </div>

      </div>

    </>
  )
}

export default Login;