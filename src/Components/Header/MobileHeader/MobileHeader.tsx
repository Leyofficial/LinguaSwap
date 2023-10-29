import React, {useState} from 'react';
import style from './MobileHeader.module.scss'
import List from "../../../Utility/List/List.tsx";
import {INavItems, INavWrapper} from "../../../types/headerTypes.ts";
import {HeaderItem} from "../HeaderWrapper/HeaderItem.tsx";
import headerIcon from "../../../img/icons/ukraine.png";
const MobileHeader = ({navItems} : INavItems) => {
    const [active,setActive] = useState<boolean>(false)
    return (
        <header className={style.container}>
            <div className={active ? style.active : ""}>
                <div className={`${style.headerBurger}`}>
                    <label className={style.burger}  htmlFor="burger">
                        <input onChange={() => setActive(!active)} checked={active}  type="checkbox" id="burger" />
                        <span style={ active ?  {backgroundColor : "white"} : {backgroundColor : 'dodgerblue'}}></span>
                        <span style={ active ?  {backgroundColor : "white"} : {backgroundColor : 'dodgerblue'}}></span>
                        <span style={ active ?  {backgroundColor : "white"} : {backgroundColor : 'dodgerblue'}}></span>
                    </label>
                </div>
                <div className={style.logo}>
                    <h2 className={style.text}>
                        Lin<span style={{ color: "dodgerblue" , cursor : 'pointer'}}>gua</span>
                    </h2>
                    <img src={headerIcon} alt="icon" />
                </div>

                <div className={style.menu} style={ active ? {top : 0} : {top : -1000}}>
                    <ul className={style.items}>
                        <div className={style.btnWrapper}>
                            <div className={style.navList}>
                                <List items={navItems} rerender={(item : INavWrapper, index : number) =>  <HeaderItem index={index} text={item.text} link={item.link}/>}/>
                            </div>
                        </div>
                        <div className={style.nav}>
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default MobileHeader;