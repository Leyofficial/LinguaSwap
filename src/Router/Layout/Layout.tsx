import style from "./Layout.module.scss";
import {sidebarList} from "./SidebarList.ts";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import { Header } from "../../Components/Header";
import {useParams} from "react-router";
import {sidebarCourses} from "./sidebarCourses.ts";
import {SideBar} from "../../Components/Sidebar";
import {INavWrapper} from "../../Components/Header/types.js";

const Layout = () => {
   const isStart = useSelector((state : any ) => state.isStart ); // !!! SHOULD BE CUSTOM HOOK
   const params = useParams()
   const navItemsIcons : INavWrapper[]  = [
      {text: "Overview", link: "Overview"},
      {text: "Features", link: "AboutApp"},
      {text: "Get in touch", link: "Join"},
      {text: "FAQ", link: "FAQ"},
      {text: "Help", link: "Footer"},
   ];
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
