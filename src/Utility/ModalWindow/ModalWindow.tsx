import style from './ModalWindow.module.scss'
import {TypeAnimation} from "react-type-animation";
import CustomButton from "../CustomButton/CustomButton.jsx";
import {useNavigate} from "react-router-dom";
import {IModalProps} from "./types.ts";

function ModalWindow(props : IModalProps) {
  const navigate = useNavigate()
  function joinLink() : any {
    navigate('/')
  }

  return (
    <>

      <div className={style.modal}>
        <section className={style.modalMain}>
          <h2><TypeAnimation sequence={[
            `${props.children}`, 4000, 'Thank you 😁!', 3000, 'You will enjoy it 🥰!', 3000]} speed={50}
                             style={{display: 'inline-block'}} repeat={Infinity}>
          </TypeAnimation>
          </h2>
        </section>
      </div>
      <div className={style.button}>
        <CustomButton
          title={"Join"}
          typeOfButton={"button"}
          callback={joinLink()}
        />
      </div>
    </>

  )
}

export default ModalWindow