import {initialState} from "../../../initialState.ts";
import {LanguagesActions, TLanguagesActions} from "../types.ts";


export function setLanguagesKnowReducer(state = initialState.languagesKnow , action : TLanguagesActions) {
switch (action.type) {
    case  LanguagesActions.SET_LANGUAGES_KNOW :
        return action.languagesKnow
    default : return state
}
}
