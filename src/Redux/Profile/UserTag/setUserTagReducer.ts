import { initialState } from "../../initialState.ts";
import {TUserTagActions, UserTagActions} from "./setUserTagAC.ts";


export function setUserTagReducer(state = initialState.userTag, action : TUserTagActions) {
    switch (action.type) {
        case UserTagActions.SET_TAG:
            return action.userTag
        default : return state
    }
}