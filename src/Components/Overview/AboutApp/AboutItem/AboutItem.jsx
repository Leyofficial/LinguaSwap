import style from './AbouItem.module.scss'
import {GiImbricatedArrows} from "react-icons/gi";


const AboutItem = (props) => {
  const {title, icon,text} = props


  return (
    <div className={style.container}>
      <p>{title}</p>
      <div className={style.box}>
        {icon}
        <div className={style.listWrapper}>
          <ul>
          {text.map((item,index )=> <li key={index}>{item.icon} {item.text}</li>)}
          </ul>
          <div className={style.navigateArrow}>
           <GiImbricatedArrows></GiImbricatedArrows>
          </div>
        </div>
      </div>
    </div>


  )
};


export default AboutItem;