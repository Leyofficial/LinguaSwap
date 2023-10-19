import { initialState } from "../../initialState.ts";
import { SET_NAME } from "./seNameAC";


export function setNameReducer (state = initialState.name, action) {
    switch (action.type) {
        case SET_NAME : 
        return   action.name.trim()
        default : return state
    }
}