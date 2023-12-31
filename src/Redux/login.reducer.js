import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const loginUser = createAsyncThunk(
    'login/user',


// export const loginUser = createAsyncThunk(
//     'login/user',

//     async (user, {rejectWithValue}) => {
//         try {
//             const res = await axios.get('http://localhost:3000/authorization/login', user);
            
            // console.log(res);

    async (user, {rejectWithValue}) => {
        try {
            const res = await axios.get('http://localhost:3000/authorization/login', user);

            

            

            if(!res.data) {
                throw new Error()
            }

            return res.data;
        } catch (error) {
            return rejectWithValue({ message: error.message })
        }
    }
)

const loginSlice = createSlice({
    name: 'login',

    initialState: {
        loading: null,
        user: null
    },


//             state.user = {
//                 token: action.payload.jwt,
//                 ...action.payload.user
//             }
//         },


    extraReducers: {
        [loginUser.pending]: (state) => {
            state.loading = 'loading';
        },


        [loginUser.fulfilled]: (state, action) => {
            state.loading = 'complete';

            state.user = {
                token: action.payload.jwt,
                ...action.payload.user
            }
        },


    // initialState: {
    //     loading: null,
    //     user: null
    // },

        [loginUser.rejected]: (state) => {
            state.loading = 'error';
        },


    }
})

export default loginSlice.reducer;