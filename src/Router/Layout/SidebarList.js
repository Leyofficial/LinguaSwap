import courses from "../../img/icons/elearning-2.png";
import teacher from "../../img/icons/teacher.png";
import team from "../../img/icons/team.png";
import gear from "../../img/icons/gear.png";
import profile from "../../img/icons/profile-user.png";
import previous from "../../img/icons/previous.png";

export const sidebarList = [

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