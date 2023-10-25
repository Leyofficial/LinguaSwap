import style from './CustomButton.module.scss'
import {NavLink} from "react-router-dom";

const CustomButton = (props) => {
  const {title, callback, rotateIcon, path = "#"} = props
  return (
     <div>
       <NavLink onClick={callback} className={style.item} to={path}>
           <div className={style.button}>
               <span  className={`${rotateIcon ? style.left : style.right} ${style.span}`}>{title}</span>
           </div>
       </NavLink>
     </div>
  );
};

export default CustomButton;