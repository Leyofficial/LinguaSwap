import {initialState} from "../../initialState.ts";
import {SET_STATUS} from "./setStatusActionCreate.js";


export function setStatusReducer (state = initialState.status , action) {
    switch (action.type) {
        case SET_STATUS :
            return  action.status;
        default : return state
    }
}