import React from 'react';
import './TeacherRegister.css';
import teacherimg from '../../img/images/teacherimg.jpg'
import FormRegister from '../FormRegister/FormRegister';
function TeacherRegister() {




  return (

        <div className='login'>
            
            <FormRegister/>

            <div className="loginImageContent">
    
                 <img src={teacherimg} alt={teacherimg} className="loginImage" />
    
            </div>
        </div>
    
  )
}

export default TeacherRegister;