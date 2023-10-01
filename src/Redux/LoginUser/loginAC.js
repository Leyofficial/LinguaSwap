import {SET_LOGIN_USER} from "./loginReducer.js";

export const loginAC = (newUser) => {
  return{
    type:SET_LOGIN_USER,
    newUser
  }

}