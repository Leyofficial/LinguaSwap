import {getCoursesForTeacher, getCoursesForUserChat} from "../../ApiRequests/Chat.jsx";
import {ICourse} from "../../types/coursesTypes.ts";
import {IUserInfo} from "../../types/userTypes.ts";

export const getCoursesHelper = async (currentUser : IUserInfo, callback : (arg:ICourse[]) => void) => {
   try {
      if (currentUser?.user.data.status === "Student") {
         const response = await getCoursesForUserChat(currentUser?._id)

         if (response.status === 200) {
            callback(response.data.foundCourses)
         }
      } else if (currentUser?.user.data.status === 'Teacher') {
         const response = await getCoursesForTeacher(currentUser?._id)

         if (response.status === 200) {
            callback(response.data.courses)
         }
      }
   } catch (err) {
      console.log(err)
   }
}