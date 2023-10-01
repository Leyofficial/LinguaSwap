import {initialState} from "../../../initialState.js";
import {SET_LANGUAGES_LEARN} from "./setLanguagesLearnActionCreater.js";

export function setLanguagesLearnReducer(state = initialState.languagesLearn , action){
switch (action.type) {
    case  SET_LANGUAGES_LEARN:
        return action.languagesLearn
    default : return state
}
}
