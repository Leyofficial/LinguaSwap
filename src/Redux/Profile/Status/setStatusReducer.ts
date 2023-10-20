import {initialState} from "../../initialState.ts";
import {StatusActions, TStatusActions} from "./setStatusActionCreate.ts";


export function setStatusReducer (state = initialState.status , action : TStatusActions) {
    switch (action.type) {
        case StatusActions.SET_STATUS :
            return  action.status;
        default : return state
    }
}