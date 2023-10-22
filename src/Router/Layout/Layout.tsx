import style from "./Layout.module.scss";
import {sidebarList} from "./SidebarList.ts";
import {Outlet} from "react-router-dom";
import Header from "../../Components/Header";
import {useNavigate, useParams} from "react-router";
import {sidebarCourses} from "./sidebarCourses.ts";
import {SideBar} from "../../Components/Sidebar";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {INavWrapper} from "../../types/headerTypes.ts";

const Layout = () => {
   const isStart = useTypedSelector((state) => state.isStart)
   const navigate = useNavigate()
   const params = useParams()
   const navItemsIcons : INavWrapper[] = [
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
            {isStart ? <SideBar defaultOpen={!!params.idCourse} // boolean
                                menuItems={params.idCourse ? sidebarCourses() : sidebarList}/> :
               <Header navItems={navItemsIcons}/>}
            <main>
               <Outlet></Outlet>
            </main>
         </div>
      </>)
}

export default Layout;
