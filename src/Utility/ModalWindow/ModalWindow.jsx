import style from './ModalWindow.module.scss'
import {TypeAnimation} from "react-type-animation";
function  ModalWindow ({ handleClose, show, children }) {
    return (
        <div className={style.modal}>
            <section className={style.modalMain}>
               <h2> <TypeAnimation sequence={[
                   `${children}` ,4000,'Thank you 😁!',3000 , 'You will enjoy it 🥰!',3000]}  speed={50} style={{ display: 'inline-block' }} repeat={Infinity}>
               </TypeAnimation>
               </h2>
            </section>
        </div>
    )
}

export default  ModalWindow