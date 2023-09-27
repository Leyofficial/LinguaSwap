import { initialState } from "../../../initialState";
import { SET_EMPTY_HASH } from "./hashInputEmptyAC";

export function hashInputEmptyReducer(state = initialState.hashDirty, action) {
    switch (action.type) {
        case SET_EMPTY_HASH:
            return action.hashDirty
        default: return state
    }
}