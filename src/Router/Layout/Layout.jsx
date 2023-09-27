<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import style from "./Layout.module.scss";
import SideBar from "./../../Components/Sidebar/index";

const Layout = () => {
  return (
    <>
      <div className={style.container}>
        <main>
          <Outlet></Outlet>
        </main>
        <aside>
          <SideBar />
        </aside>
      </div>
    </>
  );
};
=======

import MainLayout from "./MainLayout/MainLayout.jsx";
import HomeLayout from "./HomeLayout/HomeLayout.jsx";

const Layout = (props) => {

  const {layoutType} = props


  return (
    <>

      {layoutType === 'main' ? <MainLayout/> : <HomeLayout/>}
    </>)
}
>>>>>>> feature_create-profile

export default Layout;
