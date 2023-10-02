import React, { useEffect, useState }  from 'react';
import './TeacherRegister.css';
import teacherimg from '../../img/images/teacherimg.jpg'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom';

import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

import appleicon from '../../img/images/appleicon.svg';
import facebookicon from '../../img/images/facebookicon.svg';
import googleicon from '../../img/images/googleicon.svg';
import { fetchUserAC } from '../../Redux/login/loginactions';
import { registerNewUser } from '../../ApiRequests/Courses/AuthUser';
function TeacherRegister() {

  const [userValue, setUserValue] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false);

  const [confirmError, setConfirmError] = useState('');
  const [confirmShow, setConfirmShow] = useState(false);

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('email не может быть пустым');
  const [passwordError, setPasswordError] = useState('password не может быть пустым');
  const [formValid, setFormValid] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();

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

    if(userValue.password === userValue.confirmPassword) {
      setConfirmError('');
      setConfirmShow(true);
    }else {
      setConfirmError('*** Пароли не совпадают!! ***');
      setConfirmShow(false);
    }

  }, [emailError, passwordError, userValue]);

  const submitPostData = e => {
    e.preventDefault();


    registerNewUser(userValue).then(res => {
      console.log(res);
    });

    // сразу после успешной регистрации проходит на страницу курсы*
   
    navigate('/login')

    // dispatch(fetchUser(userValue));
    dispatch(fetchUserAC(userValue))
    
  }

  const navigate = useNavigate();
 
  const handlerChange = e => {
      
    setUserValue(data => {
      return {
        ...data,
        [e.target.name]: e.target.value
      }
    });
    
    
    if(e.target.name === 'email') {

      const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!re.test(String(e.target.value).toLocaleLowerCase())) {

        setEmailError('Некоректный email')
  
      }else {
        setEmailError('')
      }
      
    }else if (e.target.name === 'password') {
      if(e.target.value.length < 6 || e.target.value.length > 8 ) {
        setPasswordError('Пароль должен быть больше 6 символов');
  
        if(!e.target.value) {
          setPasswordError('Поле поля password обязателен!!');
        }
      }else {
        setPasswordError('')
      }  
    }

    
   
  }

 

  return (
        <div className='login'>
            
          <div className='registerComponent'>
        
        <h2 className="registerComponentTitle">Регистрация</h2>

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
                    
                    <input onChange={e => handlerChange(e)} value={userValue.password} onBlur={e => blurHandler(e)} type={showPassword ? "text" : "password"} name='password' className="inputRegister" />
                    <button className='eyePasswordRegister' type="button" onClick={togglePasswordVisibility}>
                        {!showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {(passwordDirty && passwordError) && <div className='passwordError'>{passwordError}</div>}
                </div>

                <div className="blockInput">
                    <span className="blockInputText">Повторный пароль *</span>
                    <button className='eyePasswordRegisterConfirm' type="button" onClick={togglePasswordVisibility}>
                        {!showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <input onChange={e => handlerChange(e)} value={userValue.confirmPassword} onBlur={e => blurHandler(e)} type={showPassword ? "text" : "password"} name='confirmPassword' className="inputRegister" />
                    {(passwordDirty && passwordError) && <div className='passwordError'>{passwordError}</div>}
                    {(confirmShow == false) && <span className="confirmErrorText"> {confirmError} </span>}
                    
                </div>

             

                <div className="linkInLoginBlock">
                    <p className="linkInLoginText">
                        Если есть акаунт можете 
                        <NavLink to='/login' className='linkInLogin'>Войти</NavLink>
                    </p>
                </div>

                

            </div>


          

            <button className='formSubmit'>Зарегистрироваться</button>

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

export default TeacherRegister;