'use client'

import { createSlice, current } from '@reduxjs/toolkit'
import axios from 'axios'

import { END_POINT } from '@/app/config/end-point';
export const postSlice = createSlice({
  name: 'post',
  initialState : {
    posts: [
     
    ],
    post: {
      comments: []
    },
    allPost: [] ,
    likes: []
  },
  reducers: {
    getMyPosts: (state , action) => {
      state.posts = action.payload.posts
    },
    createMyPost: (state, action) => {
      state.posts.push(action.payload.post);
    },
    
    deleteMyPost:(state , action)=>{
      let posts = [...state.posts]
      posts = posts.filter(post => post.id !== action.payload)
      state.posts = posts
    },
    setPost:(state , action)=>{
      state.post = action.payload.post
    },
    setComment: (state, action) => {
      const comment = action.payload.comment
      state.post.comments.push(comment);
    },
    
    deletedComment: (state, action) => {
      const updatedComments = state.post.comments.filter(comment => comment.id !== action.payload);
      state.post.comments = updatedComments;
    },
    setAllPosts  : (state , action)=>{
      state.allPost = action.payload.postsAll
    },
    setLike: (state, action) => {

      state.likes =[...state.likes , action.payload]
    },
    
    deletedLike : (state , action)=>{
      let  likes = [...state.likes]
      likes.filter(like => like.postId != action.payload)
      state.likes = likes 
    },
  },
})


export const { getMyPosts , createMyPost , deleteMyPost , setPost , setComment , deletedComment,
  setAllPosts , setLike , deletedLike
} = postSlice.actions


export const getMyAllPosts = ()=> async (dispatch)=>{
    try {
     
        const res = await axios.get(`${END_POINT}/api/posts/my`)
        dispatch(getMyPosts({posts : res.data}))
    } catch (error) {
        alert('Запрос на сервер не удался')
    }
  
}

export const createPost = (formdata) => async (dispatch) => {
  try {
    const res = await axios.post(`${END_POINT}/api/post/create`, formdata);
    dispatch(createMyPost({ post: res.data }));
  } catch (error) {
    alert('Запрос на сервер не удался');
  }
}



export const deletePost = (id)=> async (dispatch)=>{
  try {
      const res = await axios.delete(`${END_POINT}/api/post/delete/${id}`)
      dispatch(deleteMyPost(id))
  } catch (error) {
      alert('Запрос на сервер не удался')
  }

}

export const getPostByID = (id)=> async (dispatch)=>{
  try {
      const res = await axios.get(`${END_POINT}/api/post/${id}`)
      dispatch(setPost({post : res.data}))
  } catch (error) {
      alert('Запрос на сервер не удался')
  }

}


export const editPost= (id , formData)=> async (dispatch)=>{
  console.log(id)
  console.log();;
  try {
      const res = await axios.put(`${END_POINT}/api/post/${id}` , formData)
      // dispatch(({post : res.data}))
  } catch (error) {
    console.log(error);
      alert('Запрос на сервер не удался')
  }

}

export const addComment= (data)=> async (dispatch)=>{

  try {
      const res = await axios.post(`${END_POINT}/api/add-comment` , data)
      dispatch(setComment({comment : res.data}))
  } catch (error) {
    console.log(error);
      alert('Запрос на сервер не удался')
  }

}


export const deleteComment= (id)=> async (dispatch)=>{
    console.log('request id:',id);
  try {
      const res = await axios.delete(`${END_POINT}/api/delete-comment/${id}`)
      dispatch(deletedComment(id))
  } catch (error) {
    console.log(error);
      alert('Запрос на сервер не удался')
  }

}



export const getAllPosts = ()=> async (dispatch)=>{
  try {
   
      const res = await axios.get(`${END_POINT}/api/posts/all`)
      dispatch(setAllPosts({postsAll : res.data}))
      console.log('datd' ,res.data);
  } catch (error) {
    console.log(error);
      alert('Запрос на сервер не удался')
  }

}

export const createLike = (id)=> async (dispatch)=>{
  try {
   
      const res = await axios.post(`${END_POINT}/api/post/like` , id)
      dispatch(setLike(res.data))
  } catch (error) {
    console.log(error);
      alert(error.response && error.response.data.error)
  }

}

export const deleteLike= (id)=> async (dispatch)=>{
  
try {
    const res = await axios.delete(`${END_POINT}/api/post/like/${id}`)
    dispatch(deletedLike(id))
} catch (error) {
  console.log(error);
    alert('Запрос на сервер не удался')
}

}
  



export default postSlice.reducer
