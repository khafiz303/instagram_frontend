'use client'

import { useState, useEffect, useRef } from "react";
import PostCreate from "@/components/posts/post/createPost";
import { useDispatch, useSelector } from "react-redux";
import { getPostByID } from "@/app/store/slices/postSlice";
import { useParams } from "next/navigation";
const PostCreateWrapper = () => {
    const [edit , setEdit] = useState(true)
  const [createPost, setCreatePost] = useState(1);
  const postCreateRef = useRef(null);
  const dispatch = useDispatch()
  const {id} =useParams()
  const post  = useSelector((state)=> state.post.post)
  useEffect(() => {
    function handleClickOutside(event) {
      if (postCreateRef.current && !postCreateRef.current.contains(event.target)) {
        setCreatePost(0);
      } 
    }

    if (createPost === 1) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [createPost]);
  
  const didMount = ()=>{
    dispatch(getPostByID(id))   
  }
  useEffect(didMount , [])

//   const username = useSelector((state) => state.auth.currentUser?.username);
  console.log('hete post',post);
  return (
    <>
      {createPost === 1 && (
        <div ref={postCreateRef}>
          <PostCreate setCreatePost={setCreatePost} edit={true} create={false}  post={post} />
        </div>
      )}
    </>
  );
};

export default PostCreateWrapper;
