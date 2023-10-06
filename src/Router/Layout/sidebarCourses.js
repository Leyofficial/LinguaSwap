import info from "../../img/icons/info.png";
import previous from "../../img/icons/previous.png"
import chat from "../../img/icons/chat.png"



export const sidebarCourses = (idCourse) => {
   const items = [{

      path: "/",
      icon: previous,
      name: "Back",
   },
      {

         path: "/",
         icon: info,
         name: "Courses",
      },
      {
         path: `/course/${idCourse}/chat`,
         icon: chat,
         name: 'Chat'
      }
   ];
   return items
}
