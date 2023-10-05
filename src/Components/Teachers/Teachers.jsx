import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Teachers.module.css';
import { useClickOutSide } from './useClickOutSide.js';
import teachersimg from '../../images/teacherJapan.jpg';
function Teachers() {

  const [languages, setLanguages] = useState([
    {language: 'English', id: 1},
    {language: 'Poland', id: 2},
    {language: 'Germany', id: 3},
    {language: 'Spanish', id: 4},
    {language: 'Italy', id: 5},
    {language: 'Japan', id: 6},
    {language: 'Turkish', id: 7},
  ]);

  const teachersData = [
    { description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor reprehenderit eos alias est ipsum, ab in cum, tempora, optio distinctio fugit modi quaerat enim laborum quo! Veniam, soluta molestiae.`, name: 'Beka', language: 'English', id: 1, img: teachersimg },
    { description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor reprehenderit eos alias est ipsum, ab in cum, tempora, optio distinctio fugit modi quaerat enim laborum quo! Veniam, soluta molestiae.`, name: 'Ayana', language: 'English', id: 2, img: teachersimg },
    { description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor reprehenderit eos alias est ipsum, ab in cum, tempora, optio distinctio fugit modi quaerat enim laborum quo! Veniam, soluta molestiae.`, name: 'Beksultan', language: 'Italy', id: 3, img: teachersimg },
    { description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor reprehenderit eos alias est ipsum, ab in cum, tempora, optio distinctio fugit modi quaerat enim laborum quo! Veniam, soluta molestiae.`, name: 'Danil', language: 'Japan', id: 4, img: teachersimg },
    { description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor reprehenderit eos alias est ipsum, ab in cum, tempora, optio distinctio fugit modi quaerat enim laborum quo! Veniam, soluta molestiae.`, name: 'Vova', language: 'Japan', id: 5, img: teachersimg },
    { description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor reprehenderit eos alias est ipsum, ab in cum, tempora, optio distinctio fugit modi quaerat enim laborum quo! Veniam, soluta molestiae.`, name: 'Aman', language: 'Turkish', id: 6, img: teachersimg },
    { description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor reprehenderit eos alias est ipsum, ab in cum, tempora, optio distinctio fugit modi quaerat enim laborum quo! Veniam, soluta molestiae.`, name: 'Frejus', language: 'Japan', id: 7, img: teachersimg },
    { description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor reprehenderit eos alias est ipsum, ab in cum, tempora, optio distinctio fugit modi quaerat enim laborum quo! Veniam, soluta molestiae.`, name: 'Anara', language: 'Italy', id: 8, img: teachersimg },
    { description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor reprehenderit eos alias est ipsum, ab in cum, tempora, optio distinctio fugit modi quaerat enim laborum quo! Veniam, soluta molestiae.`, name: 'Amantur', language: 'Spanish', id: 9, img: teachersimg },
    { description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor reprehenderit eos alias est ipsum, ab in cum, tempora, optio distinctio fugit modi quaerat enim laborum quo! Veniam, soluta molestiae.`, name: 'Nastya', language: 'English', id: 10, img: teachersimg },
    { description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor reprehenderit eos alias est ipsum, ab in cum, tempora, optio distinctio fugit modi quaerat enim laborum quo! Veniam, soluta molestiae.`, name: 'Marsel', language: 'Germany', id: 11, img: teachersimg },
    { description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor reprehenderit eos alias est ipsum, ab in cum, tempora, optio distinctio fugit modi quaerat enim laborum quo! Veniam, soluta molestiae.`, name: 'Elmirbek', language: 'Poland', id: 12, img: teachersimg },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null)
  useClickOutSide(menuRef, () => {
    setIsOpen(false)
  });

  return (
    <div className={style.teachersComponent}> 
        
        <div className={style.teachersSearch}>

          <form className={style.formSearh}>

           <div className={style.formBlock}>
              <input type="text" className={style.inputSearch} placeholder="Search for teachers by name"/>
              
              <div className={style.menuCategory}>
                <NavLink onClick={() => setIsOpen(!isOpen)} className={style.menuBtn}>language &#9662;</NavLink>
                <div ref={menuRef} className={`${style.divCategory} ${isOpen ? style.active : ""}`}>
                  <ul className={style.menuList}>
                    {
                      languages.map(language => {
                        return (
                          <li id={language.id}  className={style.menuItem}>{language.language}</li>
                        )
                      })   
                    }
                    
                  </ul>
                </div>
              </div>
           </div>
           
            
          </form>

        </div>

        <div className={style.teachersBlocks}>

              {
                teachersData.map(teacher => {
                  return (
                    <div id={teacher.id} className={style.teacherBlock}>

                      <div className={style.teacherContent}>
                        <div className={style.imgContent}>
                          <img className={style.teacherImg} src={teacher.img} alt={teacher.img} />
                        </div>
                        <div className={style.dataContent}>
                             <div className={style.nameAndLanguage}>
                                <h2 className={style.name}>{teacher.name}</h2>
                                <span className={style.language}>{teacher.language}</span>
                             </div>
                             <div className={style.teacherText}>
                                <p className={style.description}>
                                  {
                                      teacher.description
                                  }
                                </p>
                             </div>
                        </div>

                        <button className={style.moreBtn}>More</button>
                      </div>

                  </div>
                  )
                })
              }

        </div>

     </div>
  )
};

export default Teachers;