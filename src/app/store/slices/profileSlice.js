'use client'

import { createSlice, current } from '@reduxjs/toolkit'
import axios from 'axios'

import { END_POINT } from '@/app/config/end-point';

export const profileSlice = createSlice({
  name: 'profile',
  initialState : {
    profile : {},
    following : [],
    MyFollowing:[],
    followers:[],
    suggestions:[]
  },

  reducers: {
    setProfile: (state , action) => {
        state.profile = action.payload
      },
      setFollowing: (state , action) => {
        state.following = action.payload
      },
      setFollowers: (state , action) => {
        state.followers = action.payload
      },
      addFollow: (state , action) => {
        state.followers = [...state.followers , action.payload]
      },
      setMyFollowing: (state , action) => {
        state.MyFollowing = action.payload
      },
      setSuggestions: (state , action) => {
        state.suggestions = action.payload
      },
    
  },
})


export const {setProfile , setFollowing , setFollowers , addFollow , setMyFollowing , setSuggestions} = profileSlice.actions

export const getProfile = (username)=> async (dispatch)=>{
    try {
     
        const res = await axios.get(`${END_POINT}/api/user/${username}`)
        dispatch(setProfile(res.data))
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
  
}

export const createFollow = (id)=> async (dispatch)=>{
    try {
        console.log('iddd',id);
        const res = await axios.post(`${END_POINT}/api/follow` , {id})
        dispatch(addFollow(res.data))
        
    } catch (error) {
        console.log(error);
    }
  
}

export const getFollowing = (username)=> async (dispatch)=>{
    try {
     
        const res = await axios.get(`${END_POINT}/api/users/${username}/following`)
        dispatch(setFollowing(res.data))
        
    } catch (error) {
        console.log(error , 'jh,dgskvkv');
    }
  
}

export const getMyFollowing = (username)=> async (dispatch)=>{
    try {
     
        const res = await axios.get(`${END_POINT}/api/users/${username}/following`)
        dispatch(setMyFollowing(res.data))
        
    } catch (error) {
        console.log(error , 'jh,dgskvkv');
    }
  
}

export const unfollow = (id)=> async (dispatch)=>{
    try {
     
        const res = await axios.delete(`${END_POINT}/api/unsubscribe/${id}`)
        // dispatch(setFollowing(id))
        
    } catch (error) {
        console.log(error);
    }

}


export const getFollower = (username)=> async (dispatch)=>{
    try {
     
        const res = await axios.get(`${END_POINT}/api/users/${username}/followers`)
        dispatch(setFollowers(res.data))
        
    } catch (error) {
        console.log(error);
    }
  
}

export const getSuggestions = ()=> async (dispatch)=>{
    try {
     
        const res = await axios.get(`${END_POINT}/api/suggestions`)
        dispatch(setSuggestions(res.data))
        
    } catch (error) {
        console.log(error);
    }
  
}





export default profileSlice.reducer
