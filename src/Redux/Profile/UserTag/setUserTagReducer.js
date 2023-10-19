import { initialState } from "../../initialState.ts";
import { SET_TAG } from "./setUserTagAC";

export function setUserTagReducer(state = initialState.userTag, action) {
    switch (action.type) {
        case SET_TAG:
            return action.userTag
        default : return state
    }
}