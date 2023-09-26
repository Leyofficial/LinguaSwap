import { useState } from "react";
import style from "./CustomInput.module.scss";

const CustomInput = (props) => {
  const [input , setInput] = useState('')  
  const { width, callback , placeholder , heg} = props;
  return (
    <div className={style.container}>
      <div className={style["wave-group"]}>
        <input onFocus={() =>  heg ? setInput('#') : setInput(null) } value={input} style={{width : width  }} placeholder={placeholder} required="" type="text" className={style.input} />
        <span className={style.bar}></span>
        <label className={style.label}>
        </label>
      </div>
    </div>
  );
};

export default CustomInput;
