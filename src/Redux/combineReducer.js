import { combineReducers } from "redux";
import isStartToLoginReducer from "./isStartToLogin/isStartToLoginReducer.js";
import { setNameReducer } from "./Profile/Name/setNameReducer.js";
import { setUserTagReducer } from "./Profile/UserTag/setUserTagReducer.js";
import { setBioReducer } from "./Profile/Bio/setBioReducer.js";
import { nameInputEmptyReducer } from "./Profile/Inputs/name/nameInputEmptyReducer.js";
import { hashInputEmptyReducer } from "./Profile/Inputs/hash/hashInputEmptyReducer..js";
import {setStatusReducer} from "./Profile/Status/setStatusReducer.js";


export default (combineReducers)({
    isStart: isStartToLoginReducer,
    name: setNameReducer,
    userTag : setUserTagReducer,
    bio : setBioReducer,
    nameDirty : nameInputEmptyReducer,
    hashDirty : hashInputEmptyReducer,
    status : setStatusReducer,
}) 