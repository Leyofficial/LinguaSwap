import {initialState} from "../../../initialState.ts";
import {HashActions, THashActions} from "./hashInputEmptyAC.js";

export function hashInputEmptyReducer(state : boolean = initialState.hashDirty, action : THashActions) {
    switch (action.type) {
        case HashActions.SET_EMPTY_HASH:
            return action.hashDirty
        default: return state
    }
}