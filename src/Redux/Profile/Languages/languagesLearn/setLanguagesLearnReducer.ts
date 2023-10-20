import {initialState} from "../../../initialState.ts";
import {LanguagesActions, TLanguagesActions} from "../types.ts";


export function setLanguagesLearnReducer(state = initialState.languagesLearn , action : TLanguagesActions){
switch (action.type) {
    case  LanguagesActions.SET_LANGUAGES_LEARN:
        return action.languagesLearn
    default : return state
}
}
