import style from "./Header.module.css";
import headerIcon from "../../../img/icons/ukraine.png";
import { NavLink } from "react-router-dom";

const HeaderWrapper = (props) => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerInner}>
          <div className={style.iconBlock}>
            <NavLink to={'/'}>
              <h2>
                Lin<span style={{ color: "dodgerblue" }}>gua</span>
              </h2>
              <img src={headerIcon} alt="icon" />
            </NavLink>
          </div>
          <nav className={style.navBlock}>
            <div className={style.navList}>
              {props.navItems.map((item) => {
                return (
                  <li className={style.navItem}>
                    <a href={item.link}>
                      <p>{item.text}</p>
                    </a>
                  </li>
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
