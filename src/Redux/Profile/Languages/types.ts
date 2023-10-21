import {ILanguagesTypes} from "../../../Utility/Languages/languages.ts";

export enum LanguagesActions {
    SET_LANGUAGES_KNOW = 'SET_LANGUAGES_KNOW',
    SET_LANGUAGES_LEARN = 'SET_LANGUAGES_LEARN'
}
export interface ISetLanguageKnow {
    type : LanguagesActions.SET_LANGUAGES_KNOW,
    languagesKnow :  TLanguage
}
export interface ISetLanguageLearn {
    type : LanguagesActions.SET_LANGUAGES_LEARN,
    languagesLearn :  TLanguage
}
export type TLanguage = {
    languages : ILanguagesTypes[]
}
export type TLanguagesActions =   ISetLanguageLearn | ISetLanguageKnow