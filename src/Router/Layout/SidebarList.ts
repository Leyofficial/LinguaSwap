import courses from "../../img/icons/elearning-2.png";
import teacher from "../../img/icons/teacher.png";
import team from "../../img/icons/team.png";
import gear from "../../img/icons/gear.png";
import profile from "../../img/icons/profile-user.png";
import previous from "../../img/icons/previous.png";
import chat from "../../images/chat.png"
import {ISidebarItems} from "../../Components/Sidebar/types.js";
import chat from "../../images/chat.png"
import {FC} from "react";

export const sidebarList : ISidebarItems[] = [
    {
        path: '/',
        icon: previous,
        name: "Back",
        callback:true,
    },
    {
      path : "/login",
        icon: profile,
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