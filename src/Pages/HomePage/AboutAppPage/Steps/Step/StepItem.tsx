import style from './StepItem.module.scss'
import {ReactNode, useEffect, useState} from "react";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

interface IStepItemProps{
  image:string,
  indexStart?:number,
  icon:ReactNode,
  title:string,
  isOpen:boolean | undefined
}
const StepItem = (props:IStepItemProps) => {

  const {image, indexStart, icon, title,isOpen} = props
  const [showContent, setShowContent] = useState<boolean>(false)


  useEffect(() => {

    if (isOpen) {
      setShowContent(true)
    }
  }, [isOpen])


  return (
    <div  className={style.container}>
      <div className={style.wrapper}>
        {icon}
        {showContent ? <AiOutlineMinus onClick={() => setShowContent(!showContent)} className={style.plus}></AiOutlineMinus> :  <AiOutlinePlus onClick={() => setShowContent(!showContent)} className={style.plus}></AiOutlinePlus>}

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