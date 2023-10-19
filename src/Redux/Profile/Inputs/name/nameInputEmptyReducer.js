
import { initialState } from "../../../initialState.ts";
import {  SET_EMPTY_NAME } from "./nameInputEmptyCreater";

export function nameInputEmptyReducer(state = initialState.nameDirty , action) {
    switch(action.type) {
        case SET_EMPTY_NAME : 
        return action.nameDirty
        default : return state
    }
}