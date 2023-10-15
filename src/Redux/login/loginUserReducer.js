import {initialState} from "../initialState.js";
import {loginUserAC, SET_LOGIN_USER} from "./loginUserAC.js";
import {getUserByToken} from "../../ApiRequests/Courses/AuthUser.js";
import {Course} from "../../ApiRequests/Courses/Courses.js";
import {courseAC} from "../Course/CourseAC.js";

export function loginUserReducer(state = initialState.loginUser, action) {
    switch (action.type) {
        case SET_LOGIN_USER :
            return action.user
        default :
            return state
    }
}


export const loginUserThunkCreator = (userToken) => {
    return async (dispatch) => {
        try {
            const res = await getUserByToken(userToken)
            if (res.status === 200) {
                dispatch(loginUserAC({...res.data.users[0]}));
            }
        } catch (err) {
            console.log(err)
        }

    }
}