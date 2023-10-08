import {SET_CHAT} from "./CourseChatReducer.js";

export const courseChatAC = (chatData) => {
return{
   type:SET_CHAT,
   chatData
}
}