import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../api/axios'

export const fetchUser = createAsyncThunk(
    'register/teacher',

    async (user, {rejectWithValue}) => {
        try {
            const res = await axios.post('authorization', user)

            if (!res.data) {
                throw new Error()   
            }

            return res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);




const authSlice = createSlice({
    name: 'registerTeacher',

    initialState: {
        loading: '',
        user: null
    },

    extraReducers: {
        [fetchUser.pending]: (state) => {
            state.loading = 'loading';
        },

        [fetchUser.fulfilled]: (state, action) => {
            state.loading = 'complete';

            state.user = {
                token: action.payload.jwt,
                ...action.payload.user
            }
        },

        [fetchUser.rejected]: (state) => {
            state.loading = 'error';
        },

    }


})


export default authSlice.reducer; 