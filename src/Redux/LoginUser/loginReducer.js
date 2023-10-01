import {initialState} from "../initialState.js";


export const SET_LOGIN_USER = "SET_LOGIN_USER"
const loginReducer = (user = initialState.loginUser,action) => {
  switch (action.type) {

    case SET_LOGIN_USER : return  action.newUser
    default : return user
  }
}
export default loginReducer