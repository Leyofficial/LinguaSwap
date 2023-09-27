import style from "./Header.module.css";
import headerIcon from "../../../img/icons/ukraine.png";
import { Link } from 'react-scroll';


const HeaderWrapper = (props) => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerInner}>
          <div className={style.iconBlock}>
            <Link  to={'/'}>
              <h2>
                Lin<span style={{ color: "dodgerblue" }}>gua</span>
              </h2>
              <img src={headerIcon} alt="icon" />
            </Link>
          </div>
          <nav className={style.navBlock}>
            <div className={style.navList}>
              {props.navItems.map((item,index) => {
                return (
                  <li key={index} className={style.navItem}>
                    <Link to={item.link} smooth={true}    spy={true}  offset={-70}
                          duration={500}>
                    {/*<a href={item.link}>*/}
                      <p>{item.text}</p>
                    {/*</a>*/}
                    </Link>
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
