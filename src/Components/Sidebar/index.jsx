import { useState } from "react";
import { Link, NavLink  } from "react-router-dom";

import ukraine from "./../../img/icons/ukraine.png";
import team from "./../../img/icons/team.png";
import gear from "./../../img/icons/gear.png";
import info from "./../../img/icons/info.png";
import teacher from "./../../img/icons/teacher.png";
import back from "./../../img/icons/back.png";
import forward from "./../../img/icons/back-2.png";

import style from "./Sidebar.module.scss";
import "../../App.css";


const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const manuItems = [
    {
      path: "/findteacher",
      icon: teacher,
      name: "Find teacher",
    },
    {
      path: "/teams",
      icon: team,
      name: "Find team",
    },
    {
      path: "/services",
      icon: gear,
      name: "Servises",
    },
    {
      path: "/aboutus",
      icon: info,
      name: "About us",
    },
  ];
  return (
    
    // font-size: 16px;
    // line-height: 140%;
    <div
      style={sidebarOpen ? { width: "15rem" } : { width: "5rem" }}
      className={style.sidebarContainer}
    >
      <div className={style.titleBlock} style={sidebarOpen ? { flexDirection : 'unset'  } : { flexDirection : 'column'  }}>
        <Link style={sidebarOpen ? { opacity : '1' , position : 'unset', pointerEvents: 'all'   } : { opacity : '0'  , position : 'absolute' , pointerEvents: 'none'   }} >
          <p>
            Lin<span>gua</span>
          </p>
        </Link>
        <button
          className={style.btnArrow}
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <img style={{maxWidth : '1.5rem'}}src={sidebarOpen ? back : forward} alt="" />
        </button>
      </div>
      <div className={style.sidebarWrapper}>
        <ul className={style.sidebarItems} >
          {manuItems.map((item) => {
            return (
              <NavLink
                style={sidebarOpen ? { width: "100%" } : { width: "3rem" }}
                to={item.path}
              >
                <li
                  className={style.sidebarItem}
                  style={
                    sidebarOpen
                      ? { justifyContent: "unset" }
                      : { justifyContent: "center" }
                  }
                >
                <img src={item.icon} style={{maxWidth : '30px'}} className={style.itemIcon}  alt="" />
                  
                
                  <p
                    style={
                      sidebarOpen ? {opacity : '1' , position : 'unset' ,  pointerEvents : 'all'  } : {  opacity : '0'  , position : 'absolute' , pointerEvents : 'none' }
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
