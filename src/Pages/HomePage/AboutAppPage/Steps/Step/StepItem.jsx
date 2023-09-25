import style from './StepItem.module.scss'
import {PiNumberOneBold} from "react-icons/pi";
import {useEffect, useState} from "react";
import formImage from '../../../../../images/joinImage.png'

const StepItem = (props) => {

  const {icon, indexStart} = props
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {

    if (indexStart) {
      setShowContent(true)
    }
  }, [indexStart])
  return (
    <div className={style.container} onClick={() => setShowContent(!showContent)}>
      <div className={style.wrapper}>
        <PiNumberOneBold></PiNumberOneBold>
        <p>Step</p>
      </div>
      {showContent ?
        <div className={style.content}>
          <div className={style.wrapperContent}>
            <p>Register as a Student using registration form</p>
            <div>
              <img src={formImage} alt={'form'}/>
            </div>

          </div>
        </div> : null}
    </div>
  );
};

export default StepItem;