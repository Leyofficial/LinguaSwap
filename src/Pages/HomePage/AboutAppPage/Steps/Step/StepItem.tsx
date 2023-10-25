import style from './StepItem.module.scss'
import {ReactNode, useEffect, useState} from "react";

interface IStepItemProps{
  image:string,
  indexStart?:number,
  icon:ReactNode,
  title:string
}
const StepItem = (props:IStepItemProps) => {

  const {image, indexStart, icon, title} = props
  const [showContent, setShowContent] = useState(false)


  useEffect(() => {

    if (indexStart) {
      setShowContent(true)
    }
  }, [indexStart])

  return (
    <div  className={style.container} onClick={() => setShowContent(!showContent)}>
      <div className={style.wrapper}>
        {icon}
        <p>Step</p>
      </div>

      <div className={`${style.content} ${showContent  ? style.showContent : null}`}>
        <div className={style.wrapperContent}>
          <p>{title}</p>
          <div>
            <img src={image} alt={'form'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepItem;