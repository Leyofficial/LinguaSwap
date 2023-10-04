
import style from './Spinner.module.scss'
function Spinner ({ loaderIsOpen}) {
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