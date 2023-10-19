import {initialState} from "../../../initialState.ts";
import {SET_LANGUAGES_KNOW} from "./setLanguagesKnowActionCreater.js";

export function setLanguagesKnowReducer(state = initialState.languagesKnow , action){
switch (action.type) {
    case  SET_LANGUAGES_KNOW :
        return action.languagesKnow
    default : return state
}
}
