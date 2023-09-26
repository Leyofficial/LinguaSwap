import { combineReducers } from "redux";
import isStartToLoginReducer from "./isStartToLogin/isStartToLoginReducer.js";
import { setNameReducer } from "./Profile/Name/setNameReducer.js";


export default (combineReducers)({
    isStart: isStartToLoginReducer,
    name: setNameReducer,
}) 