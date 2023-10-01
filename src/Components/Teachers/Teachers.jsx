import React, { useState } from 'react';
import './Teachers.css'
import teacherimg from '../../images/teacherimage.jpg';

function Teachers() {

  const [teacher, setTeacher ] = useState([
    {name: 'Adina Test Test', image:  teacherimg, language: 'English', id: 1},
    {name: 'Adina Test Test1', image: teacherimg, language: 'English', id: 2},
    {name: 'Adina Test Test2', image: teacherimg, language: 'English', id: 3},
    {name: 'Adina Test Test3', image: teacherimg,  language: 'English', id: 4},
    {name: 'Adina Test Test4', image: teacherimg,  language: 'English', id: 5},
    {name: 'Adina Test Test5', image: teacherimg,  language: 'English', id: 6},
    {name: 'Adina Test Test6', image: teacherimg,  language: 'English', id: 7},
    {name: 'Adina Test Test7', image: teacherimg,  language: 'English', id: 8},
    {name: 'Adina Test Test8', image: teacherimg,  language: 'English', id: 9},
    {name: 'Adina Test Test9', image:  teacherimg, language: 'English', id: 10},
    {name: 'Adina Test Test', image:  teacherimg,  language: 'English', id: 11},
  ]);



  return (
    <div className='teachersComponent'>

        {
          teacher.map(teacher => {
            return (

              <div id={teacher.id} className="teacherContainer">
                
                <div className='teacherImageBlock'>
                  <img src={teacher.image} alt={teacher.image} className="teacherImage" />
                </div>

                <div className='teacherBlockInfo'>
                  <h3 className="teacherName">{teacher.name}</h3>                
                  <span className="teacherLanguage">{teacher.language}</span>
                </div>
              </div>

            )
          })
        }

    </div>
  )
}

export default Teachers;