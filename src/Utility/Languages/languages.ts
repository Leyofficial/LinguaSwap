export interface ILanguagesTypes {
    value : string,
    label : string,
    color : string,
}
export const languageOptions : ILanguagesTypes[] =  [
    { value: 'en', label: 'English', color: '#ff0000' },
    { value: 'ua', label: 'Ukrainian', color: '#00a6ff' },
    { value: 'ru', label: 'Russian', color: '#461313' },
    { value: 'es', label: 'Spanish', color: '#dab708' },
    { value: 'fr', label: 'French', color: '#002cff' },
    { value: 'de', label: 'German', color: '#ff9100' },
    { value: 'it', label: 'Italian', color: '#2d9325' },
    { value: 'ja', label: 'Japanese', color: '#ff0043' },
    { value: 'ko', label: 'Korean', color: '#00d9ff' },
    { value: 'zh-cn', label: 'Chinese (Simplified)', color: '#ff6a00' },
    { value: 'pt-br', label: 'Portuguese (Brazil)', color: 'rgba(23,161,49,0.69)' },
    { value: 'nl', label: 'Dutch', color: '#ff009a' },
    { value: 'pl', label: 'Polish', color: '#ff0000' },
    { value: 'sv', label: 'Swedish', color: '#1f82b7' },
];

export const languagesList = ["English","Ukrainian","Russian",'Spanish','French','German','Italian','Japanese','Korean','Chinese']
export const levelList = ["Beginners","Elementary","Intermediate","Upper-Intermediate","Advanced","Proficiency"]
export const durationList = ["1 hour","2 hour","30 minutes","10 minute"]