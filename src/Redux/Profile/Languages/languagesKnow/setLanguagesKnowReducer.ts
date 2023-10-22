import {initialState} from "../../../initialState.ts";
import {LanguagesActions, TLanguage, TLanguagesActions} from "../types.ts";


export function setLanguagesKnowReducer(state = initialState.languagesKnow , action : TLanguagesActions) : TLanguage | unknown[] {
switch (action.type) {
    case  LanguagesActions.SET_LANGUAGES_KNOW :
        return action.languagesKnow
    default : return state
}
}
