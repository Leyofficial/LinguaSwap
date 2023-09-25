import React, { useEffect, useState } from 'react';
import './FormRegister.css';
import facebookicon from '../../img/images/facebookicon.svg';
import googleicon from '../../img/images/googleicon.svg';
import appleicon from '../../img/images/appleicon.svg';
import { NavLink } from 'react-router-dom';
import teacherimg from '../../img/images/teacherimg.jpg'
import './FormRegister.css'

function FormRegister() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('email не может быть пустым');
    const [passwordError, setPasswordError] = useState('password не может быть пустым');
    const [formValid, setFormValid] = useState(false);
  
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
    <div className='registerComponent'>
        
                <h2 className="registerComponentTitle">Регистрация репетитера</h2>
        
                <div className="registerJwt">
        
                    <button className="registerGoogle">
                        <img src={googleicon} alt={googleicon} className="registerBtnIcon" />
                        <span className='registerBtnText'>Зарегистрироваться с Google</span>
                    </button>
        
                    <button className="registerFacebook">
                        <img src={facebookicon} alt={googleicon} className="registerBtnIcon" />
                        <span className='registerBtnText'>Зарегистрироваться с Facebook</span>
                    </button>
        
                    <button className="registerApple">
                        <img src={appleicon} alt={appleicon} className="registerBtnIcon" />
                        <span className='registerBtnText'>Зарегистрироваться с Apple</span>
                    </button>
        
                </div>
    
                <div className="orBlock">
                    <hr className='or'/>
                    <span className="orBlockTitle">или</span>
                    <hr className='or'/>
                 </div>
        
                <form className="formRegister">
        
                    <div className="formContainer">
        
                       
                        <div className="blockInput">
                            <span className="blockInputText">Эл. почта *</span>
                            
                            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email" name='email' className="inputRegister" />
                            {(emailDirty && emailError) && <div className='emailError'>{emailError}</div>}
                        </div>
        
                        <div className="blockInput">
                            <span className="blockInputText">Пароль *</span>
                            
                            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type="password" name='password' className="inputRegister" />
                            {(passwordDirty && passwordError) && <div className='passwordError'>{passwordError}</div>}
                        </div>

                     
        
                        <div className="linkInLoginBlock">
                            <p className="linkInLoginText">
                                Если есть акаунт можете 
                                <NavLink to='/login' className='linkInLogin'>Войти</NavLink>
                            </p>
                        </div>
    
                        
        
                    </div>
        
        
                  
    
                    <button disabled={!formValid} className='formSubmit'>Зарегистрироваться</button>
        
                </form>
        
                <div className="warningsBlock">
  
                    <p className="warningInfo">

                        Нажимая <NavLink className='warningsLogin'>«Зарегистрироваться»</NavLink> или <NavLink className='warningsLogin'>«Продолжить»</NavLink>, вы принимаете <br />
                        Условия использования и <br />
                        Палитику конфидециальности

                    </p>

                </div>
            </div>
  )
}

export default FormRegister