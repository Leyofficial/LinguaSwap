import {LanguagesActions, TLanguage, TLanguagesActions} from "../types.ts";

export function setLanguagesKnowActionCreater (obj : TLanguage) : TLanguagesActions {
return {type : LanguagesActions.SET_LANGUAGES_KNOW , languagesKnow : obj}
}