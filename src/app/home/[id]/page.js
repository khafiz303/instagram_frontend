'use client'
import React, { useEffect, useState } from 'react';
import { useRouter , useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import UserMini from '@/components/userMini';
import { addComment , deleteComment} from '@/app/store/slices/postSlice';
import { getPostByID } from '@/app/store/slices/postSlice';
const PostPage = () => {
  const [text , setText] = useState('')
  const router = useRouter();
  const {id} = useParams() 
  const post = useSelector((state) => state.post.post);
  const comments = useSelector((state) => state.post.post.comments);
  console.log('post:',post);
  const dispatch = useDispatch()

  const handleAddComment= ()=>{
    dispatch(addComment({
        postId : id,
        text
    }))
    setText('')
  }
  const didMount = ()=>{
    dispatch(getPostByID(id))
  }
  useEffect(()=>{
    didMount()
  },[comments])

  const handleClick = ()=>{
    router.push('/home');
  }

  const myId = useSelector((state) => state.auth.currentUser?.id);
  return (
    <div className='modal'>
     
        <div className="modal-white-drop" onClick={handleClick} >   </div>
        <div className="modal-inner" id='modal-inner' >
        
            <div className="main-img main-img-home">
          
                <img src={`http://46.101.192.129:1000${post.imageUrl}`} />
            </div>
            <div className="modal-right modal-right-home">
              <div className="modal-header">
                <UserMini username={post.user && post.user.fullName} close={() => setPostDetail(null)} selectedPost={post.id} shadow='shadow' dop='...' />
                <p>{post.description}</p>
              </div>
              <div className="comments">
                <div className="comment">
                  {post.comments.map((comment, index) => (
                    <UserMini key={index} username={comment.userC?.fullName} text={comment.text}   remove={myId == comment.userC?.id ? 'remove' : undefined}
                    deleted={myId == comment.userC?.id ? () => dispatch(deleteComment(comment.id)) : undefined}  />
                  ))} 
                  
                </div>
                <div className="add-comment">
                  <input type="text" placeholder="Add a comment" value={text} onChange={e => setText(e.target.value)} />
                  <p onClick={handleAddComment}>Post</p>
                </div>
              </div>
            </div>
        </div>
      
    </div>
  );
};

export default PostPage;
