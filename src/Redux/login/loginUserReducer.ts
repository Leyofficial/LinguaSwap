
import {loginActions, loginUserAC, setLoginUser} from "./loginUserAC.ts";
import {getUserByToken} from "../../ApiRequests/Courses/AuthUser.js";
import {Dispatch} from "redux";
import {IUserInfo} from "../../types/userTypes.ts";
import {initialState} from "../initialState.ts";
import {IUser} from "../../Pages/CourseChat/courseChatTypes.ts";
export function loginUserReducer(state: IUser  = initialState.loginUser, action : setLoginUser) : IUser {
    switch (action.type) {
        case  loginActions.SET_LOGIN_USER :
            return action.user
        default :
            return state
    }
}


export const loginUserThunkCreator = (userToken : string) => {
    return async (dispatch : Dispatch) => {
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