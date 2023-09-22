import {Outlet} from "react-router-dom";
import style from './Layout.module.scss'
import {useState} from "react";
import HomePage from "../../Pages/HomePage/HomePage.jsx";

const Layout = () => {

  const {auth, setAuth} = useState(true)

    return (
      <div className={style.home}>
        <HomePage></HomePage>
      </div>
    )


}

export default Layout;
