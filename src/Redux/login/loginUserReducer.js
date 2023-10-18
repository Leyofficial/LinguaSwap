import {initialState} from "../initialState.js";
<<<<<<< HEAD
import {SET_LOGIN_USER} from "./loginUserAC.js";
=======
import {loginUserAC, SET_LOGIN_USER} from "./loginUserAC.js";
import {getUserByToken} from "../../ApiRequests/Courses/AuthUser.js";
>>>>>>> 643f76ace336b8c32896b2a86575a8afab9e9e53

export function loginUserReducer(state = initialState.loginUser , action){
switch (action.type) {
    case SET_LOGIN_USER :
        return action.user
    default : return state
}
}
<<<<<<< HEAD
=======


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
>>>>>>> 643f76ace336b8c32896b2a86575a8afab9e9e53
