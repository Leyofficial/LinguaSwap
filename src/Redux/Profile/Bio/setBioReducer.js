import { initialState } from "../../initialState.ts";
import { SET_BIO } from "./setBioAC";

export function setBioReducer (state = initialState.bio , action) {
    switch (action.type) {
        case SET_BIO : 
        return action.bio
        default : return state
    }
}