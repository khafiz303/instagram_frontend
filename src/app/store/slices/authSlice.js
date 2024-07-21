'use client'

import { createSlice, current } from '@reduxjs/toolkit'
import axios from 'axios'
import { jwtDecode } from "jwt-decode";

import { END_POINT } from '@/app/config/end-point';

let initialState = {
  isAuth: false,
  currentUser: null,
  tokenExt: 0
};

if (typeof window !== 'undefined') {
  const token = localStorage.getItem('token');
  
  if (token) {
    const decodedToken = jwtDecode(token);
  
    if (decodedToken.exp * 1000 > Date.now()) {
      initialState = {
        isAuth: true,
        currentUser: {
          id: decodedToken.id,
          email: decodedToken.email,
          username : decodedToken.username,
       
        },
        tokenExt: decodedToken.exp
      };
      
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      localStorage.removeItem("token");
    }
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    authorize: (state , action) => {
      localStorage.setItem('token' , action.payload.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
      const decoded = jwtDecode(action.payload.token)
      state.currentUser = {
        id : decoded.id,
        email : decoded.email,
        username : decoded.username,
      }
      state.isAuth = true
      state.tokenExt = decoded.exp
    },
    logOut: (state) => {
      state.isAuth = false, 
      state.currentUser  = null,
      state.tokenExt = 0
      localStorage.removeItem('token')
    }
  },
})


// Action creators are generated for each case reducer function
export const { authorize, logOut } = authSlice.actions


export const signUp = (email , password , username)=> (dispatch)=>{
  axios.post(`${END_POINT}/api/auth/signup`, {email , password , username }).then(res =>{
    dispatch(authorize(res.data))
  })

}   

export const LogIn= (email , password)=> (dispatch)=>{
  axios.post(`${END_POINT}/api/auth/login`, {
    email , password
  }).then(res=>{
    dispatch(authorize(res.data))
  })
}
export default authSlice.reducer
