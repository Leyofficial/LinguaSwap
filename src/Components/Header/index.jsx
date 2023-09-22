import style from "./Header.module.css";
import headerIcon from "../../img/icons/ukraine.png";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerInner}>
          <div className={style.iconBlock}>
            <a href="#id">
              <h2>
                Lin<span style={{ color: "rgba(0, 0, 255, 0.653)" }}>gua</span>
              </h2>
              <img src={headerIcon} alt="icon" />
            </a>
          </div>
          <nav className={style.navBlock}>
            <div className={style.navList}>
              <li className={style.navItem}>
                <a href="#test">
                  <p>Overview</p>
                </a>
              </li>
              <li className={style.navItem}>
                <a href="#id">
                  <p>Features</p>
                </a>
              </li>
              <li className={style.navItem}>
                <a href="#id">
                  <p>Get in touch</p>
                </a>
              </li>
              <li className={style.navItem}>
                <a href="#id">
                  <p>FAQ</p>
                </a>
              </li>
              <li className={style.navItem}>
                <a href="#id">
                  <p>Help</p>
                </a>
              </li>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
