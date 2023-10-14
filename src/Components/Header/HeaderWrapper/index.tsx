import style from "../Header.module.scss";
import headerIcon from "../../../img/icons/ukraine.png";
import {INavItems} from "../types.ts";
import {Link} from "react-scroll";
import {HeaderItem} from "./HeaderItem.tsx";


const HeaderWrapper = ({navItems} : INavItems) => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerInner}>
          <div className={style.iconBlock}>
            <Link  to={'/'}>
              <h2 className={style.text}>
                Lin<span style={{ color: "dodgerblue" , cursor : 'pointer'}}>gua</span>
              </h2>
              <img src={headerIcon} alt="icon" />
            </Link>
          </div>
          <nav className={style.navBlock}>
            <div className={style.navList}>
              {navItems.map((item,index) => {
                return (
                  <HeaderItem index={index} text={item.text} link={item.link}/>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderWrapper;
