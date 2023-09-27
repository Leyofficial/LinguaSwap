import {Outlet} from "react-router-dom";
import style from './Layout.module.scss'
import SideBar from './../../Components/Sidebar/index';
import Login from "../../Components/Login/Login";

import MainLayout from "./MainLayout/MainLayout.jsx";
import HomeLayout from "./HomeLayout/HomeLayout.jsx";

const Layout = (props) => {

  const {layoutType} = props


  return (
    <>

      {layoutType === 'main' ? <MainLayout/> : <HomeLayout/>}
    </>)
}

export default Layout;
