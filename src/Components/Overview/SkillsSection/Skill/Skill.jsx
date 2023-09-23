import style from './Skill.module.scss'
const Skill = (props) => {

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