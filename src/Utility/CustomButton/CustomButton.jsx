import style from './CustomButton.module.scss'
import {NavLink} from "react-router-dom";
import {GiImbricatedArrows} from "react-icons/gi";

const CustomButton = (props) => {
  const {title, callback,rotateIcon, path = "#"} = props
  return (
    <div className={style.container}>
      <NavLink  onClick={callback} className={style.item} to={path}>
        <span className={`${style.buttonLine} ${style.top}`}></span>
        <span className={`${style.buttonLine} ${style.right}`}></span>
        <span className={`${style.buttonLine} ${style.bottom}`}></span>
        <span className={`${style.buttonLine} ${style.left}`}></span>
        {rotateIcon ?   <GiImbricatedArrows className={rotateIcon ? style.rotateIcon : null}></GiImbricatedArrows> : null}
        {title}
        {!rotateIcon ? <GiImbricatedArrows className={rotateIcon ? style.rotateIcon : null}></GiImbricatedArrows> : null }

      </NavLink>
    </div>
  );
};

export default CustomButton;