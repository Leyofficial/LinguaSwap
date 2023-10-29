import {NavLink} from "react-router-dom";
import style from './SideBarItem.module.scss';
import {ISidebarItem } from "../types";
import {Avatar} from "@mui/material";
import React from "react";
export function SideBarItem ({ name , index , sidebarOpen , path , callback , icon } : ISidebarItem) {
    return (
        <div className={style.sidebarItemBlock}  key={index}>
            <NavLink  className={ path === '/login' ? '' : ({isActive}) => isActive ? style.activeSideBarLink : '' }
                     style={sidebarOpen ? { width: "100%" } : { width: "3rem" }}
                     to={path}
                     onClick={() => callback }>

                <li
                    className={style.sidebarItem}
                    style={
                        sidebarOpen
                            ? { justifyContent: "unset" }
                            : { justifyContent: "center" }
                    }
                >
                    {path === 'auth' || path === 'auth/login' ?  <Avatar sx={{width: 35, height: 35, textAlign: 'center'}} src={icon} /> : <img src={icon} style={{maxWidth : '30px'}} className={style.itemIcon}  alt="" />}
                    <p
                        style={
                            sidebarOpen ? {opacity : '1' , position : 'unset' ,  pointerEvents : 'all'  } : {  opacity : '0'  , position : 'absolute' , pointerEvents : 'none' }
                        }
                    >
                        {name}
                    </p>
                </li>
            </NavLink>
        </div>
    )
}