import {LanguagesActions, TLanguage, TLanguagesActions} from "../types.ts";

export function setLanguagesLearnActionCreater(obj: TLanguage): TLanguagesActions {
    return { type: LanguagesActions.SET_LANGUAGES_LEARN, languagesLearn: obj };
}
