'use client'

import { createSlice, current } from '@reduxjs/toolkit'
import axios from 'axios'

import { END_POINT } from '@/app/config/end-point';

export const storySlice = createSlice({
  name: 'story',
  initialState : {
    stories : [],
    story : [],

  },

  reducers: {
    getMyStories: (state , action) => {
        state.stories = action.payload.stories
      },
      createMyStory:(state , action)=>{
         let stories = [...state.stories , action.payload]
          state.stories = stories
      },
      deleteMyStory:(state , action)=>{
        let stories = [...state.stories]
        stories = stories.filter(story => story.id !== action.payload)
        state.stories = stories
      },
    
  },
})


export const { getMyStories ,createMyStory ,  deleteMyStory} = storySlice.actions
export const getMyAllStories = ()=> async (dispatch)=>{
    try {
     
        const res = await axios.get(`${END_POINT}/api/story`)
        dispatch(getMyStories({stories : res.data}))
    } catch (error) {
        alert('Запрос на сервер не удался')
    }
  
}

export const createStory = (data) => async (dispatch) => {
  try {
    const fd = new FormData(); 
    fd.append('imageUrl', data.selectedFile);

    const res = await axios.post(`${END_POINT}/api/story/create`, fd, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    dispatch(createMyStory({story: res.data}));
    
    console.log('Story created successfully', res.data);
  } catch (error) {
    console.error('Error creating story', error);
    alert('Запрос на сервер не удался');
  }
};


export const deleteStory = (id)=> async (dispatch)=>{
  try {
      const res = await axios.post(`${END_POINT}/api/story/delete/${id}`)
      dispatch(deleteMyStory(id))
      
      
  } catch (error) {
      alert('Запрос на сервер не удался')
      console.log(error);
  }

}


export default storySlice.reducer
