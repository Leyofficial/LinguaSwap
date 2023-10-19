import info from "../../img/icons/info.png";
import previous from "../../img/icons/previous.png"
import chat from "../../img/icons/chat.png"
import {ISidebarItems} from "../../types/headerTypes.ts";



export const sidebarCourses = () => {

   const items: ISidebarItems[] = [
      {
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
