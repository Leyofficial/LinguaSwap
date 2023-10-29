import style from './Skill.module.scss'
import {ReactNode} from "react";
interface ISkillProps{
    text:string,
    icon:ReactNode,
    title:string
}
const Skill = (props:ISkillProps) => {

  const {text, icon, title} = props
  return (
    <div className={style.container}>
      <div className={style.iconWrapper}>
        {icon}
      </div>
      <div className={style.info}>
        <p className={style.title}>{title}</p>
        <p className={style.text}>{text}</p>
      </div>

    </div>
  );
};

export default Skill;