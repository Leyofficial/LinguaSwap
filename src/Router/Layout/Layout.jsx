import {Outlet} from "react-router-dom";
import style from './Layout.module.scss'
import SideBar from './../../Components/Sidebar/index'

const Layout = () => {

  return (
    <>
      <div className={style.container}>
      <SideBar/>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  </>)
}

export default Layout;
