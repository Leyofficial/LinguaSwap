import style from './CourseInput.module.scss'
import React from "react";

const CourseInput = (props) => {
  const {value, callback, type,name,heightInput} = props

  const styleInput = {
    height:heightInput
  }
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input type={type} style={styleInput} name={name} className={style.item} value={value} onChange={(e) => callback(e.target.value)}/>
    </>
  );
};

export default CourseInput;