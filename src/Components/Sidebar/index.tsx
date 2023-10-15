import { useState } from "react";
import { Link } from "react-router-dom";
import back from './../../img/icons/back.png';
import forward from './../../img/icons/back-2.png';
import style from './Sidebar.module.scss';
import {useNavigate} from "react-router";
import {ISideBar, ISidebarItem} from "./types";
import {SideBarItem} from "./SideBarItem/SideBarItem";
import List from "../../Utility/List/List.tsx";
export function SideBar ({menuItems, defaultOpen} : ISideBar)  {

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(defaultOpen  || false);
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
    <div className={style.sidebarContainer}
      style={sidebarOpen ? { width: "15rem" } : { width: "5rem" }}
    >
      <div className={style.titleBlock} style={sidebarOpen ? { flexDirection : 'unset'  } : { flexDirection : 'column'  }}>
        <Link  to={'/'} style={sidebarOpen ? { opacity : '1' , position : 'unset', pointerEvents: 'all'   } : { opacity : '0'  , position : 'absolute' , pointerEvents: 'none'   }} >
          <p> Lin<span>gua</span> </p>
        </Link>
        <button className={style.btnArrow}
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <img style={{maxWidth : '1.5rem'}} src={sidebarOpen ? back : forward} alt="" />
        </button>
      </div>
      <div className={style.sidebarWrapper}>
        <ul className={style.sidebarItems} >
          <List items={menuItems} rerender={(item : ISidebarItem , index : number) => <SideBarItem index={index} sidebarOpen={sidebarOpen}
                                                               path={item.path}
                                                               name={item.name}
                                                               icon={item.icon}
                                                               callback={item.callback ? goBack : undefined}/> } />
        </ul>
      </div>
    </div>
  );
}