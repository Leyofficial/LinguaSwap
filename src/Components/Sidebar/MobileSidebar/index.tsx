import style from './MobileSidebar.module.scss'
import React, {useState} from "react";
import {ISideBar} from "../types.ts";
import {NavLink} from "react-router-dom";
import {Avatar} from "@mui/material";
import {useTypedSelector} from "../../../hooks/useTypedSelector.ts";
function MobileSidebar({menuItems} :  ISideBar) {
    const [isActiveBurger , setActive] = useState(false);
    const name = useTypedSelector((state) => state.loginUser?.user?.data?.name)

    // @ts-ignore
    return (
        <>
            <div className={style.container}>
                <div className={style.sidebarBlock}>
                    <div className={style.wrapper}>
                        <label className={style.burger} htmlFor="burger">
                            <input  onChange={() => setActive((prev) => !prev)} type="checkbox" id="burger" checked={isActiveBurger}/>
                            <span className={isActiveBurger ? style.active : style.usualSpan}></span>
                            <span className={isActiveBurger ? style.active : style.usualSpan}></span>
                            <span className={isActiveBurger ? style.active : style.usualSpan}></span>
                        </label>
                    </div>
                       <h1 className={style.title}><b>Lingua <span className={style.span}>Swap</span></b></h1>
                        <div className={`${style.burgerBlock} ${isActiveBurger ? style.here : style.gone}`}>
                            <div className={style.menuItems}>
                            {menuItems && menuItems.map((item) => {
                                if (item.thisIsAvatar) {
                                  return  <div className={style.avatarBlock} onClick={() => setActive((prev: boolean) => !prev)}>
                                        <Avatar src={item.icon} ></Avatar>
                                       <NavLink style={{color : "white"}} to={item.path}> <h2>{ name?.length > 0 ? name : item.name}</h2></NavLink>
                                    </div>
                                }
                               return <div className={`${style.sItem}`} onClick={() => setActive((prev: boolean) => !prev)} >
                                    <NavLink style={({isActive}) => ({
                                        color: isActive ? "dodgerblue" : "white",
                                        borderBottom: isActive ? '2px solid dodgerblue' : ""
                                    })} to={item.path}>{item.name}</NavLink>
                                </div>
                            })}
                                <div className={style.sItem} onClick={() => setActive((prev: boolean) => !prev)}>
                                    <NavLink style={({isActive}) => ({
                                        color: isActive ? "dodgerblue" : "white",
                                        borderBottom: isActive ? '2px solid dodgerblue' : ""
                                    })} to={"course/chat/lists"}>Courses Chat</NavLink>
                                </div>
                            </div>
                        </div>

                </div>
            </div>

        </>
    )
}

export default MobileSidebar