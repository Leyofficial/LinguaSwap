export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';

export const fetchUserAC = (newUser) => {
    return { type: FETCH_USER_PENDING, newUser };
};



