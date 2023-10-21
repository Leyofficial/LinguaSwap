
import style from './Spinner.module.scss'
import {ISpinner} from "./types.ts";
function Spinner ({ loaderIsOpen} :ISpinner) {
    return(
        <div style={loaderIsOpen ? {display : 'block'} : {display : 'none'} }>
            <div style={loaderIsOpen ? {display : 'block'} : {display : 'none'}} className={style.overlay}></div>
            <div className={style.loader}>
            <div className={style["loader-square"]}></div>
            <div className={style["loader-square"]}></div>
            <div className={style["loader-square"]}></div>
            <div className={style["loader-square"]}></div>
            <div className={style["loader-square"]}></div>
            <div className={style["loader-square"]}></div>
            <div className={style["loader-square"]}></div>
        </div>
        </div>
    )
}

export default Spinner