import { initialState } from "../../initialState";
import { SET_TAG } from "./setUserTagAC";

export function setUserTagReducer(state = initialState.userTag, action) {
    console.log(action)
    switch (action.type) {
        case SET_TAG:
            return action.userTag
        default : return state
    }
}