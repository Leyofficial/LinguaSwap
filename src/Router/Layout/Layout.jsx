import style from "./Layout.module.scss";
import SideBar from "../../Components/Sidebar/index.jsx";
import {sidebarList} from "./SidebarList.js";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import Header from "../../Components/Header/index.jsx";
import {useNavigate, useParams} from "react-router";
import {sidebarCourses} from "./sidebarCourses.js";

const Layout = (props) => {
   const isStart = useSelector((state) => state.isStart)
   const navigate = useNavigate()
   const params = useParams()
   const navItemsIcons = [
      {text: "Overview", link: "Overview"},
      {text: "Features", link: "AboutApp"},
      {text: "Get in touch", link: "Join"},
      {text: "FAQ", link: "FAQ"},
      {text: "Help", link: "Footer"},
   ];

   const backStep = () => navigate(-1)
   return (
      <>
         <div className={style.container}>
            {isStart ? <SideBar defaultOpen={params.idCourse ? true : false}
                                menuItems={params.idCourse ? sidebarCourses(params.idCourse,backStep) : sidebarList}/> :
               <Header navItems={navItemsIcons}/>}
            <main>
               <Outlet></Outlet>
            </main>
         </div>
      </>)
}

export default Layout;
