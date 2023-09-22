import style from './CustomButton.module.scss'
import {NavLink} from "react-router-dom";

const CustomButton = (props) => {
  const {title,callback,typeOfButton,path} = props
  return (
    <div className={style.container}>
      {typeOfButton === 'link' ? <NavLink className={style.button} onClick={callback} to={path}>{title}</NavLink>
        : <button className={style.button} onClick={callback}>{title}</button>}

    </div>
  );
};

export default CustomButton;