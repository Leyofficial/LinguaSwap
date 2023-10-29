
import style from "../WorkSection/WorkSection.module.scss";

interface IWorkSectionProps{
    image:string,
    title:string,
    count:number,
    description:string
}
const WorkSection = (props:IWorkSectionProps) => {
  const {image,title,description,count} = props
  return (
    <div className={style.wrapper}>

      <div className={style.wrapperText}>
        <div className={style.wrapperCount}>
        </div>
        <div className={style.containerInfo}>
          <p className={style.title}>{title}</p>
          <p className={style.text}>{description}</p>
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