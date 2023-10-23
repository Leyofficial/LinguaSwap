import style from "./Layout.module.scss";
import {Outlet} from "react-router-dom";
import Header from "../../Components/Header";
import {useNavigate, useParams} from "react-router";
import {sidebarCourses} from "./sidebarCourses.ts";
import {SideBar} from "../../Components/Sidebar";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {INavWrapper} from "../../types/headerTypes.ts";
import {ISidebarItems} from "../../Components/Sidebar/types.ts";
import chat from "../../images/chat.png";
import courses from "../../img/icons/elearning-2.png";
import teacher from "../../img/icons/teacher.png";
import team from "../../img/icons/team.png";
import gear from "../../img/icons/gear.png";
import profile from "../../img/icons/profile-user.png";
import {getImageFromServer} from "../../ApiRequests/ServerFiles/getImage.js";
import {useEffect, useState} from "react";
import {getUserByToken} from "../../ApiRequests/Courses/AuthUser.js";


const Layout = () => {
   const isStart = useTypedSelector((state) => state.isStart);
   const [ photo , setPhoto ] = useState(profile)
   const [isLoadPhoto , setLoad] = useState<boolean>(false);
   const navigate = useNavigate()
   const params = useParams()
   const userTokenString = localStorage.getItem('loginUser');
   let userToken: string | null = null;
   if (userTokenString) {
      userToken = JSON.parse(userTokenString);
   }
   const navItemsIcons : INavWrapper[] = [
      {text: "Overview", link: "Overview"},
      {text: "Features", link: "AboutApp"},
      {text: "Get in touch", link: "Join"},
      {text: "FAQ", link: "FAQ"},
      {text: "Help", link: "Footer"},
   ];

   useEffect(() => {
      if (userToken) {
         getUserByToken(userToken).then(res => {
            if (res.status === 200) {
               getImageFromServer(res.data.users[0].user.data.photo , setPhoto , setLoad );
            }
         })
      }
   },[])

   const sidebarList : ISidebarItems[] = [
      {
         path : "/login",
         icon: photo,
         name : 'Your profile'
      },
      {
         path:"/chat",
         icon:chat,
         name:"Chat"
      },
      {
         path: "/",
         icon: courses,
         name: "Courses",
      },
      {
         path: "/findteacher",
         icon: teacher,
         name: "Find teacher",
      },
      {
         path: "/teams",
         icon: team,
         name: "Find team",
      },
      {
         path: "/createprofile",
         icon: gear,
         name: "Profile",
      },
   ];

   const backStep = () => navigate(-1)
   return (
      <>
         <div className={style.container}>
            {isStart ? <SideBar defaultOpen={!!params.idCourse} // boolean
                                menuItems={params.idCourse ? sidebarCourses() : sidebarList }/> :
               <Header navItems={navItemsIcons}/>}
            <main>
               <Outlet></Outlet>
            </main>
         </div>
      </>)
}

export default Layout;
