import {initialState} from "../../initialState.ts";
import {StatusActions, TStatus, TStatusActions} from "./setStatusActionCreate.ts";


export function setStatusReducer (state = initialState.status , action : TStatusActions) : TStatus | string {
    switch (action.type) {
        case StatusActions.SET_STATUS :
            return  action.status;
        default : return state
    }
}