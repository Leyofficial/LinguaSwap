import info from "../../img/icons/info.png";
import previous from "../../img/icons/previous.png"
import chat from "../../img/icons/chat.png"
import {useNavigate} from "react-router";



export const sidebarCourses = (idCourse) => {



   const items = [{

      path: '/',
      icon: previous,
      name: "Back",
      callback:true,
   },
      {

         path: "/info",
         icon: info,
         name: "Courses",
      },
      {
         path: `/course/chat`,
         icon: chat,
         name: 'Chat'
      }
   ];
   return items
}
