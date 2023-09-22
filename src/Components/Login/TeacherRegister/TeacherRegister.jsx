import React from 'react';
import './TeacherRegister.css';
import facebookicon from '../../../images/facebookicon.svg';
import googleicon from '../../../images/googleicon.svg';
import appleicon from '../../../images/appleicon.svg';
import { NavLink } from 'react-router-dom';
function TeacherRegister() {
  return (
    <div className='register-component'>

        <h2 className="register-component_title">Регистрация репетитера</h2>

        <div className="register-jwt">

            <button className="register-google">
                <img src={googleicon} alt={googleicon} className="register_btn-icon" />
                <span className='register_btn-text'>Зарегистрироваться с Google</span>
            </button>

            <button className="register-facebook">
                <img src={facebookicon} alt={googleicon} className="register_btn-icon" />
                <span className='register_btn-text'>Зарегистрироваться с Facebook</span>
            </button>

            <button className="register-apple">
                <img src={appleicon} alt={appleicon} className="register_btn-icon" />
                <span className='register_btn-text'>Зарегистрироваться с Apple</span>
            </button>

        </div>

        <form className="form-register">

            <div className="form-container">

                <div className="block-input">
                    <span className="block-input_text">Полное имя</span>

                    <input type="text" name='userName' className="input-register" />
                </div>

                <div className="block-input">
                    <span className="block-input_text">Эл. почта</span>
                    
                    <input type="email" name='email' className="input-register" />
                </div>

                <div className="block-input">
                    <span className="block-input_text">Пароль</span>
                    
                    <input type="password" name='password' className="input-register" />
                </div>

                <div className="link-inLogin_block">
                    <p className="link-inLogin_text">
                        Если есть акаунт можете 
                        <NavLink to='/login' className='link-inLogin'>Войти</NavLink>
                    </p>
                </div>

            </div>


            <div className="languages_container">

                <h2 className="languages_container-title">На каких языках ведете уроки ?</h2>


                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Английский</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Испанский</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Карейский</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Японский</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Китайский</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Турецкий</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Немецкий</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Русский</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Украйинский</span>
                </div>

            </div>

            <div className="languages_container">

                <h2 className="languages_container-title">Какие языки препадаете ?</h2>


                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Английский</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Испанский</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Карейский</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Японский</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Китайский</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Турецкий</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Немецкий</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Русский</span>
                </div>

                <div className="checkbox-language">
                    <input type="checkbox" className='checkbox'/>
                    <span className="checkbox_text">Украйинский</span>
                </div>

            </div>

        </form>

    </div>
  )
}

export default TeacherRegister