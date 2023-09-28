import style from './CourseInput.module.scss'
import React from "react";

const CourseInput = (props) => {
  const {value, callback, type,name,heightInput,changeElement} = props

  const styleInput = {
    height:heightInput,

  }
  return (
    <>
      <div className={style.container}>
      <label htmlFor={name}>{name}</label>
      {!changeElement ? <input type={type} style={styleInput} name={name} className={style.item} value={value} onChange={(e) => callback(e.target.value)}/> :
      <textarea  rows={5} cols={30} value={value} onChange={(e) => callback(e.target.value)} style={styleInput} className={style.textarea}></textarea>}
      </div>
    </>
  );
};

export default CourseInput;