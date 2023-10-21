import {AUTH, LOGOUT} from "./isAuthReducer.js";

export const authAC = () => {
   return {type : AUTH}
}

export const logoutAC = () => {
   return {type: LOGOUT}
}