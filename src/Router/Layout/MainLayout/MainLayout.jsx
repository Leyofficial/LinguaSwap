import style from "../Layout.module.scss";
import {Outlet} from "react-router-dom";
import SideBar from "../../../Components/Sidebar/index.jsx";

const MainLayout = () => {


  return (
    <div className={style.container}>
      <SideBar/>
      <main >
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;