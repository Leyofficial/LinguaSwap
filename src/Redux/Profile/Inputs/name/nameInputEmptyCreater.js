export const SET_EMPTY_NAME = 'SET_EMPTY_NAME'
export function nameInputEmptyCreater(boolean) {
    return {type : SET_EMPTY_NAME , nameDirty : boolean}
}