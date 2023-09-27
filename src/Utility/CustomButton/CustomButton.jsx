import style from './CustomButton.module.scss'
import {NavLink} from "react-router-dom";

const CustomButton = (props) => {
  const {title, callback,path} = props
  return (
    // <div className={style.container}>
    //   {typeOfButton === 'link' ? <NavLink className={style.button} onClick={callback} to={path}>{title}</NavLink>
    //     : <button className={style.button} onClick={callback}>{title}</button>}
    //
    // </div>

    <NavLink onClick={callback} className={style.item} to={path}>
      <span className={`${style.buttonLine} ${style.top}`}></span>
      <span className={`${style.buttonLine} ${style.right}`}></span>
      <span className={`${style.buttonLine} ${style.bottom}`}></span>
      <span className={`${style.buttonLine} ${style.left}`}></span>
      {title}

    </NavLink>

  );
};

export default CustomButton;