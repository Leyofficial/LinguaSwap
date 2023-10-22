import { initialState } from "../../initialState.ts";
import {NameAction, TNameAction} from "./setNameAC.js";


export function setNameReducer (state = initialState.name, action : TNameAction): string  {
    switch (action.type) {
        case NameAction.SET_NAME :
            return action.name.trim();
        default : return state
    }
}