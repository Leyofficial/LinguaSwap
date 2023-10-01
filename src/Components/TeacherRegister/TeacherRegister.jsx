import React from 'react';
import './TeacherRegister.css';
import facebookicon from '../../img/images/facebookicon.svg';
import googleicon from '../../img/images/googleicon.svg';
import appleicon from '../../img/images/appleicon.svg';
import { NavLink } from 'react-router-dom';
function TeacherRegister() {
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

        <form className="formRegister">

            <div className="formContainer">

                <div className="blockInput">
                    <span className="blockInputText">Полное имя</span>

                    <input type="text" name='userName' className="inputRegister" />
                </div>

                <div className="block-input">
                    <span className="blockInputText">Эл. почта</span>
                    
                    <input type="email" name='email' className="inputRegister" />
                </div>

                <div className="blockInput">
                    <span className="blockInputText">Пароль</span>
                    
                    <input type="password" name='password' className="inputRegister" />
                </div>

                <div className="linkInLoginBlock">
                    <p className="linkInLoginText">
                        Если есть акаунт можете 
                        <NavLink to='/login' className='linkInLogin'>Войти</NavLink>
                    </p>
                </div>

            </div>


            <div className="languagesContainer">

                <h2 className="languagesContainerTitle">На каких языках ведете уроки ?</h2>


                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Английский</span>
                </div>

                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Испанский</span>
                </div>

                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Карейский</span>
                </div>

                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Японский</span>
                </div>

                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Китайский</span>
                </div>

                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Турецкий</span>
                </div>

                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Немецкий</span>
                </div>

                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Русский</span>
                </div>

                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Украйинский</span>
                </div>

            </div>

            <div className="languagesContainer">

                <h2 className="languagesContainerTitle">Какие языки препадаете ?</h2>


                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Английский</span>
                </div>

                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Испанский</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Карейский</span>
                </div>

                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Японский</span>
                </div>

                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Китайский</span>
                </div>

                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Турецкий</span>
                </div>

                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Немецкий</span>
                </div>

                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Русский</span>
                </div>

                <div className="checkboxLanguage">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkboxText">Украйинский</span>
                </div>

            </div>

        </form>

    </div>
  )
}

export default TeacherRegister