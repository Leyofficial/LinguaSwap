import { combineReducers } from "redux";
import isStartToLoginReducer from "./isStartToLogin/isStartToLoginReducer.js";
import { setNameReducer } from "./Profile/Name/setNameReducer.js";
import { setUserTagReducer } from "./Profile/UserTag/setUserTagReducer.js";
import { setBioReducer } from "./Profile/Bio/setBioReducer.js";
import { nameInputEmptyReducer } from "./Profile/Inputs/name/nameInputEmptyReducer.js";
import { hashInputEmptyReducer } from "./Profile/Inputs/hash/hashInputEmptyReducer..js";
import {setStatusReducer} from "./Profile/Status/setStatusReducer.js";
import {setLanguagesKnowReducer} from "./Profile/Languages/languagesKnow/setLanguagesKnowReducer.js";
import {setLanguagesLearnReducer} from "./Profile/Languages/languagesLearn/setLanguagesLearnReducer.js";
import coursesReducer from "./Courses/coursesReducer.js";
import {setPhotoReducer} from "./Profile/Photo/setPhotoReducer.js";
import {isAuthReducer} from "./isAuth/isAuthReducer.js";
import courseReducer from "./Course/courseReducer.js";
import {teachersReducer} from "./Teachers/teachersReducer.js";
import CourseChatReducer from "./Course/Chat/CourseChatReducer.js";
import {loginUserReducer} from "./login/loginUserReducer.js";
import webSocketReducer from "./WebSocket/webSocketReducer.js";
import chatWithTeacherReducer from "./ChatWithTeacher/chatWithTeacherReducer.js";
import chatMessagesReducer from "./ChatWithTeacher/ChatMessages/chatMessagesReducer.js";
import onlineUsersReducer from "./OnlineUsers/onlineUsersReducer.js";
import currentCourseChatReducer from "./Course/Chat/currentCourseChatReducer.js";
import {currentCourseTeacherReducer} from "./Course/Chat/currentCourseTeacher/currentCourseTeacherReducer.js";

export default (combineReducers)({
    isStart: isStartToLoginReducer,
    name: setNameReducer,
    userTag : setUserTagReducer,
    bio : setBioReducer,
    nameDirty : nameInputEmptyReducer,
    hashDirty : hashInputEmptyReducer,
    status : setStatusReducer,
    photo : setPhotoReducer,
    languagesKnow : setLanguagesKnowReducer,
    languagesLearn : setLanguagesLearnReducer,
    courses:coursesReducer,
    loginUser: loginUserReducer,
    isAuth:isAuthReducer,
    currentCourse:courseReducer,
    teachers : teachersReducer,
    currentChat:CourseChatReducer,
    socket:webSocketReducer,
    chatStatus:chatWithTeacherReducer,
    chatWithStudent:chatMessagesReducer,
    onlineUsers:onlineUsersReducer,
    currentCourseChat:currentCourseChatReducer,
    currentCourseTeacher:currentCourseTeacherReducer
})