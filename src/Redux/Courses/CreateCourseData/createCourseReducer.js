import {initialState} from "../../initialState.js";
import {Course} from "../../../ApiRequests/Courses/Courses.js";
import {resetCourseAC} from "./createCourseAC.js";
import {setPhotoAC} from "../../Profile/Photo/deletePhotoAC.js";
import toast from "react-hot-toast";
import {createChatRoomCourse} from "../../../ApiRequests/Chat.jsx";
import {teacherChats} from "../../../ApiRequests/TeacherChats/TeacherChats.js";

export const SET_TITLE = "SET_TITLE"
export const SET_LANGUAGE = "SET_LANGUAGE"
export const SET_LEVEL = "SET_LEVEL"
export const SET_DURATION = "SET_DURATION"
export const SET_START_DATE = "SET_START_DATE"
export const SET_FINISH_DATE = "SET_FINISH_DATE"
export const SET_DESCRIPTION_COURSE = "SET_DESCRIPTION_COURSE"

export const SET_TOPICS = "SET_TOPICS"

export const RESET_COURSE_DATA = "RESET_COURSE_DATA"
const createCourseReducer = (dataCourse = initialState.createCourseData, action) => {

   switch (action.type) {
      case SET_TITLE :
         return {
            ...dataCourse,
            title: action.title
         }
      case SET_LANGUAGE:
         return {
            ...dataCourse,
            language: action.language
         }
      case SET_LEVEL :
         return {
            ...dataCourse,
            level: action.level
         }

      case SET_DURATION : {
         return {
            ...dataCourse,
            duration: action.duration
         }
      }
      case SET_START_DATE : {
         return {
            ...dataCourse,
            startDate: action.start
         }
      }
      case SET_FINISH_DATE : {
         return {
            ...dataCourse,
            finishDate: action.finish
         }
      }
      case SET_DESCRIPTION_COURSE : {
         return {
            ...dataCourse,
            description: action.description
         }
      }
      case SET_TOPICS : {
         return {
            ...dataCourse,
            topics: [...dataCourse.topics, action.topic]
         }
      }
      case RESET_COURSE_DATA : {
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

export const createCourseThunkCreator = (data,setSucceed,navigate,setError) => {
   return async (dispatch) => {
      try {
         const response = await Course.create(data)
         if(response.status === 200) {

             await createChatRoomCourse(response.data.createCourse._id)
            dispatch(resetCourseAC())
            dispatch(setPhotoAC())
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