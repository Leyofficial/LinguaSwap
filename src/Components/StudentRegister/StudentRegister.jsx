import React, { useEffect, useState } from 'react'
import './StudentRegister.css';
import teacherimg from '../../img/images/teacherimg.jpg'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import appleicon from '../../img/images/appleicon.svg';
import facebookicon from '../../img/images/facebookicon.svg';
import googleicon from '../../img/images/googleicon.svg';
import {NavLink} from 'react-router-dom';
function StudentRegister() {


  const [userValue, setUserValue] = useState({
    email: '',
    password: ''
  })

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('email не может быть пустым');
  const [passwordError, setPasswordError] = useState('password не может быть пустым');
  const [formValid, setFormValid] = useState(false);


  const store = useSelector(store => store);
  const loading = store.loading;


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

  useEffect(() => {
  
    if(emailError || passwordError) {
      setFormValid(false)
    }else {
      setFormValid(true)
    }

  }, [emailError, passwordError])
  const submitPostData = e => {
    e.preventDefault();


    // сразу после успешной регистрации проходит на страницу курсы*
    navigate('/kurs')

    dispatch(fetchUser(userValue))  
  }

  const dispatch = useDispatch()
  const navigate = useNavigate();
 
  const handlerChange = e => {
      
    setUserValue(data => {
      return {
        ...data,
        [e.target.name]: e.target.value
      }
    })
    
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(e.target.email) {
      if (!re.test(String(e.target.value).toLocaleLowerCase())) {

        setEmailError('Некоректный email')
  
      }else {
        setEmailError('')
      }
      
    } else {
      if(e.target.value.length < 3 || e.target.value.length > 8 ) {
        setPasswordError('Пароль должен быть длинее 3 и меньше 8');
  
        if(!e.target.value) {
          setPasswordError('Поле поля password обязателен!!');
        }
      }else {
        setPasswordError('')
      }  
    }

    dispatch(fetchUser(userValue))
  }

  return (
    <div className='login'>
            <div className='registerComponent'>
        
        <h2 className="registerComponentTitle">Регистрация студента</h2>

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

        <form onSubmit={submitPostData} className="formRegister">

            <div className="formContainer">

               
                <div className="blockInput">
                    <span className="blockInputText">Эл. почта *</span>
                    
                    <input onChange={e => handlerChange(e)} value={userValue.email} onBlur={e => blurHandler(e)} type="email" name='email' className="inputRegister" />
                    {(emailDirty && emailError) && <div className='emailError'>{emailError}</div>}
                </div>

                <div className="blockInput">
                    <span className="blockInputText">Пароль *</span>
                    
                    <input onChange={e => handlerChange(e)} value={userValue.password} onBlur={e => blurHandler(e)} type="password" name='password' className="inputRegister" />
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
            
            <div className="loginImageContent">
    
                 <img src={teacherimg} alt={teacherimg} className="loginImage" />
    
            </div>
        </div>
    
  )
}

export default StudentRegister