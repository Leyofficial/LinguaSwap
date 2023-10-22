import {initialState} from "../../initialState.ts";
import {Course} from "../../../ApiRequests/Courses/Courses.js";
import {createCourseActions, resetCourseAC} from "./createCourseAC.ts";
import toast from "react-hot-toast";
import {createChatRoomCourse} from "../../../ApiRequests/Chat.jsx";
import {teacherChats} from "../../../ApiRequests/TeacherChats/TeacherChats.js";
import {deletePhotoAC} from "../../Profile/Photo/setPhotoAC.ts";
import {TCreateActions} from "./ICreateCourse.ts";
import {Dispatch} from "redux";
import {ICoursesCreateTypes, ICoursesWrapper} from "../../../types/coursesCreateTypes.ts";
interface ICreateCourse {
   data : ICoursesCreateTypes,
   setSucceed : (a : boolean) => void,
   navigate : (s: string) => any,
   setError : (b : boolean) => void
}
const createCourseReducer = (dataCourse = initialState.createCourseData, action : TCreateActions) : ICoursesWrapper => {
   switch (action.type) {
      case createCourseActions.SET_TITLE :
         return {
            ...dataCourse,
            title: action.title
         }
      case createCourseActions.SET_LANGUAGE:
         return {
            ...dataCourse,
            language: action.language
         }
      case createCourseActions.SET_LEVEL :
         return {
            ...dataCourse,
            level: action.level
         }
      case createCourseActions.SET_DURATION : {
         return {
            ...dataCourse,
            duration: action.duration
         }
      }
      case createCourseActions.SET_START_DATE : {
         return {
            ...dataCourse,
            startDate: action.start
         }
      }
      case createCourseActions.SET_FINISH_DATE : {
         return {
            ...dataCourse,
            finishDate: action.finish
         }
      }
      case createCourseActions.SET_DESCRIPTION_COURSE : {
         return {
            ...dataCourse,
            description: action.description
         }
      }
      case createCourseActions.SET_TOPICS : {
         return {
            ...dataCourse,
            topics: [...dataCourse.topics, action.topic]
         }
      }
      case createCourseActions.RESET_COURSE_DATA : {
         return {
            ...dataCourse,
            topics: [],
            description: "",
            finishDate: "",
            startDate: "",
            duration: "",
            level: "",
            language: "",
            title: ""
         }
      }
      default :
         return dataCourse
   }
}
export default createCourseReducer

export const createCourseThunkCreator = ({ data,setSucceed,navigate,setError } : ICreateCourse) => {
   return async (dispatch : Dispatch) => {
      try {
         const response = await Course.create(data)
         if(response.status === 200) {

             await createChatRoomCourse(response.data.createCourse._id).then(res => console.log(res))
            dispatch(resetCourseAC())
            dispatch(deletePhotoAC())
            setSucceed(true)
            toast.success("Create course process was been successfully completed");

            setTimeout(() => {
               navigate('/')
            },2000)
         }

      } catch (err) {
         console.log(err)
         setError(true)
         toast.error("Try again");
      }
   }
}