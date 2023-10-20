import { initialState } from "../../../initialState.ts";
import {NameActions, TNameActions} from "./nameInputEmptyCreater.ts";


export function nameInputEmptyReducer(state = initialState.nameDirty , action : TNameActions ) {
    switch(action.type) {
        case NameActions.SET_EMPTY_NAME :
        return action.nameDirty
        default : return state
    }
}