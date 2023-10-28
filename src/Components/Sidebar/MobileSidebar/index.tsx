import style from './MobileSidebar.module.scss'
import {useState} from "react";
import {useParams} from "react-router";
import {ISideBar} from "../types.ts";
import {NavLink} from "react-router-dom";
function MobileSidebar({menuItems} :  ISideBar) {
    const [isActiveBurger , setActive] = useState(false);
    // @ts-ignore
    return (
        <>
            <div className={style.container}>
                <div className={style.sidebarBlock}>
                    <div className={style.wrapper}>
                        <label className={style.burger} htmlFor="burger">
                            <input  onChange={() => setActive((prev) => !prev)} type="checkbox" id="burger" checked={isActiveBurger}/>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                       <h1 className={style.title}><b>Lingua <span className={style.span}>Swap</span></b></h1>
                        <div className={`${style.burgerBlock} ${isActiveBurger ? style.here : style.gone}`}>
                            <div className={style.menuItems}>
                            {menuItems && menuItems.map((item) => {
                               return <div className={style.sItem}>
                                    <NavLink to={item.path}>{item.name}</NavLink>
                                </div>

                            })}
                                <NavLink to={"course/chat/lists"}>Courses Chat</NavLink>
                            </div>
                        </div>

                </div>
            </div>

        </>
    )
}

export default MobileSidebar