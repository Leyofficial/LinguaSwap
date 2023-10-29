
import style from "../WorkSection/WorkSection.module.scss";

interface IWorkSectionProps{
    image:string,
    title:string,
    text:string,
    count:number
}
const WorkSection = (props:IWorkSectionProps) => {
  const {image,title,text,count} = props
  return (
    <div className={style.wrapper}>

      <div className={style.wrapperText}>
        <div className={style.wrapperCount}>
        </div>
        <div className={style.containerInfo}>
          <p className={style.title}>{title}</p>
          <p className={style.text}>{text}</p>
        </div>
      </div>
      <div className={style.wrapperImages}>
        <div className={style.wrapperImageItems}>
          <img src={image} alt={'linguaSwap'}/>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;