export const SET_EMPTY_HASH = 'SET_EMPTY_HASH';

export function hashInputEmptyAC (boolean) {
    return {type : SET_EMPTY_HASH , hashDirty : boolean}
}