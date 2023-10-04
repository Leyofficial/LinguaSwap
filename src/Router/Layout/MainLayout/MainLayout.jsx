import style from "../Layout.module.scss";
import {Outlet} from "react-router-dom";
import SideBar from "../../../Components/Sidebar/index.jsx";
import {sidebarList} from "./SidebarList.js";

const MainLayout = () => {


  return (
    <div className={style.container}>
      <SideBar menuItems={sidebarList}/>
      <main >
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;