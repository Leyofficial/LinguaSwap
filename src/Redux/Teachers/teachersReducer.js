import {SET_TEACHERS} from "./teachersActionCreater.js";
import {initialState} from "../initialState.js";

export function teachersReducer(state = initialState.teachers, action) {
    switch (action.type) {
        case  SET_TEACHERS:
            return action.teachers
        default :
            return state
    }
}
