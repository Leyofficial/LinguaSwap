import { initialState } from "../../../initialState.ts";
import {NameActionsInput, TNameActions, TNameInput} from "./nameInputEmptyCreater.ts";


export function nameInputEmptyReducer(state = initialState.nameDirty , action : TNameActions ) : boolean | TNameInput {
    switch(action.type) {
        case NameActionsInput.SET_EMPTY_NAME :
        return action.nameDirty
        default : return state
    }
}