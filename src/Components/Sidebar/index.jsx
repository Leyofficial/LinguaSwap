import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import ukraine from "./../../img/icons/ukraine.png";
import team from "./../../img/icons/team.png";
import style from "./Sidebar.module.scss";

import "../../App.css";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const manuItems = [
    {
      path: "/findteacher",
      icon: ukraine,
      name: "Find teacher",
    },
    {
      path: "/teams",
      icon: team,
      name: "Find team",
    },
    {
      path: "/servises",
      icon: ukraine,
      name: "Servises",
    },
    {
      path: "/aboutus",
      icon: ukraine,
      name: "About us",
    },
  ];
  return (
    <div
      style={sidebarOpen ? { width: "30%" } : { width: "15%" }}
      className={style.sidebarContainer}
    >
      <div className={style.titleBlock}>
        <Link to={"/"}>
          <p>
            Lin<span>gua</span>
          </p>
        </Link>
        <button
          className={style.btnArrow}
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          {sidebarOpen ? "->" : "<-"}
        </button>
      </div>
      <div className={style.sidebarWrapper}>
        <ul className={style.sidebarItems}>
          {manuItems.map((item) => {
            return (
              <NavLink style={ sidebarOpen ?  {width: '100%'} : {width : '50%'}} to={item.path}>
                <li
                  className={style.sidebarItem}
                  style={
                    sidebarOpen
                      ? { justifyContent: "unset" }
                      : { justifyContent: "center" }
                  }
                >
                  <img style={{maxWidth : '35px'}} className={style.itemIcon} src={item.icon} alt="" />

                  <p
                    style={
                      sidebarOpen ? { display: "block" } : { display: "none"}
                    }
                  >
                    {item.name}
                  </p>
                </li>{" "}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
