import style from './ErrorUrl.module.scss'
import {TypeAnimation} from "react-type-animation";
function ErrorUrl() {
    return (
        <div className={style.block}>
            <div className={style.child}>
            <h1 className={style.title}>
                <TypeAnimation sequence={[
                '404 Not Found ... ',4000,'Oops .. Not Found',3000 , 'Sorry ... Not Found',3000]}  speed={50} style={{ display: 'inline-block' }} repeat={Infinity}>
                </TypeAnimation></h1>
            <p className={style.p}>The <span>page </span>  you are looking for was <span>not found.</span> </p>
            </div>
        </div>
    )
}

export default ErrorUrl