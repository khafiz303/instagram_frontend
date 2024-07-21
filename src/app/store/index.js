'use client'

import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import postReducer from './slices/postSlice'
import storyReducer from './slices/storySlice'
import profileReducer from './slices/profileSlice'
export default configureStore({
  reducer: {
    auth : authReducer,
    post : postReducer, 
    story : storyReducer,
    profile: profileReducer
  },
})