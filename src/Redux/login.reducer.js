// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// import { initialState } from "./initialState";


// export const loginUser = createAsyncThunk(
//     'login/user',

//     async (user, {rejectWithValue}) => {
//         try {
//             const res = await axios.get('http://localhost:3000/authorization/login', user);
            
            // console.log(res);
            

//             if(!res.data) {
//                 throw new Error()
//             }

//             return res.data;
//         } catch (error) {
//             return rejectWithValue({ message: error.message })
//         }
//     }
// )

// const loginSlice = createSlice({
//     name: 'login',

//     initialState: {
//         loading: null,
//         user: null
//     },

//     extraReducers: {
//         [loginUser.pending]: (state) => {
//             state.loading = 'loading';
//         },

//         [loginUser.fulfilled]: (state, action) => {
//             state.loading = 'complete';

//             state.user = {
//                 token: action.payload.jwt,
//                 ...action.payload.user
//             }
//         },

//         [loginUser.rejected]: (state) => {
//             state.loading = 'error';
//         },

//     }
// })

    // initialState: {
    //     loading: null,
    //     user: null
    // },


// export const loginReducer = (loginUser = initialState.loginUser, action) => {
//     switch (action.type) {
//         case :
            
            
    
//         default: return loginUser; 
            
//     }
// } 