import React, { useEffect, useState }  from 'react';
import style from './TeacherRegister.module.css';
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
      dispatch(fetchUserAC(res.data.user));
    });

    // сразу после успешной регистрации проходит на страницу курсы*
   
    navigate('/');

    
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
        <div className={style.login}>
            
          <div className={style.registerComponent}>
        
        <h2 className={style.registerComponentTitle}>Регистрация</h2>

        <div className={style.registerJwt}>

            <button className={style.registerGoogle}>
                <img src={googleicon} alt={googleicon} className={style.registerBtnIcon} />
                <span className={style.registerBtnText}>Зарегистрироваться с Google</span>
            </button>

            <button className={style.registerFacebook}>
                <img src={facebookicon} alt={googleicon} className={style.registerBtnIcon} />
                <span className={style.registerBtnText}>Зарегистрироваться с Facebook</span>
            </button>

            <button className={style.registerApple}>
                <img src={appleicon} alt={appleicon} className={style.registerBtnIcon} />
                <span className={style.registerBtnText}>Зарегистрироваться с Apple</span>
            </button>

        </div>

        <div className={style.orBlock}>
            <hr className={style.or}/>
            <span className={style.orBlockTitle}>или</span>
            <hr className={style.or}/>
         </div>

        <form onSubmit={submitPostData} className={style.formRegister}>

            <div className={style.formContainer}>

               
                <div className={style.blockInput}>
                    <span className={style.blockInputText}>Эл. почта *</span>
                    
                    <input onChange={e => handlerChange(e)} value={userValue.email} onBlur={e => blurHandler(e)} type="email" name='email' className={style.inputRegister} />
                    {(emailDirty && emailError) && <div className={style.emailError}>{emailError}</div>}
                </div>

                <div className={style.blockInput}>
                    <span className={style.blockInputText}>Пароль *</span>
                    
                    <input onChange={e => handlerChange(e)} value={userValue.password} onBlur={e => blurHandler(e)} type={showPassword ? "text" : "password"} name='password' className={style.inputRegister} />
                    <button className={style.eyePasswordRegister} type="button" onClick={togglePasswordVisibility}>
                        {!showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {(passwordDirty && passwordError) && <div className={style.passwordError}>{passwordError}</div>}
                </div>

                <div className={style.blockInput}>
                    <span className={style.blockInputText}>Повторный пароль *</span>
                    <button className={style.eyePasswordRegisterConfirm} type="button" onClick={togglePasswordVisibility}>
                        {!showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <input onChange={e => handlerChange(e)} value={userValue.confirmPassword} onBlur={e => blurHandler(e)} type={showPassword ? "text" : "password"} name='confirmPassword' className={style.inputRegister} />
                    {(passwordDirty && passwordError) && <div className={style.passwordError}>{passwordError}</div>}
                    {(confirmShow == false) && <span className={style.confirmErrorText}> {confirmError} </span>}
                    
                </div>

             

                <div className={style.linkInLoginBlock}>
                    <p className={style.linkInLoginText}>
                        Если есть акаунт можете 
                        <NavLink to='/login' className={style.linkInLogin}>Войти</NavLink>
                    </p>
                </div>

                

            </div>


          

            <button className={style.formSubmit}>Зарегистрироваться</button>

        </form>

        <div className={style.warningsBlock}>

            <p className={style.warningInfo}>

                Нажимая <NavLink className={style.warningsLogin}>«Зарегистрироваться»</NavLink> или <NavLink className={style.warningsLogin}>«Продолжить»</NavLink>, вы принимаете <br />
                Условия использования и <br />
                Палитику конфидециальности

            </p>

        </div>
          </div>
            <div className={style.loginImageContent}>
    
                 <img src={teacherimg} alt={teacherimg} className={style.loginImage} />
    
            </div>
        </div>
    
  )
}

export default TeacherRegister;