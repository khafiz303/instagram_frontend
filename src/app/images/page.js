  'use client';
  import Posts from "@/components/posts";
  import PostCreate from "@/components/posts/post/createPost";
  import { useState, useEffect, useRef } from "react";
  import UserMini from "@/components/userMini";
  import Followers from "@/components/followers";
  import Link from 'next/link';
  import { useDispatch, useSelector } from "react-redux";
  import { getMyAllPosts, addComment , deleteComment } from "../store/slices/postSlice";
  import { useRouter } from "next/navigation";

  export default function Profile() {
    const [id, setId] = useState();
    const [create, setCreate] = useState(true);
    const [createPost, setCreatePost] = useState(0);
    const postCreateRef = useRef(null);
    const [postDetail, setPostDetail] = useState(null);
    const [commentAdd, setCommentAdd] = useState("");
    const [comments, setComments] = useState([]);
    const [followers, setFollowers] = useState(false);
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const router = useRouter()
    const posts = useSelector((state) => state.post.posts);
    let count = posts.length;

    const username = useSelector((state) => state.auth.currentUser?.username); 
    const comment = useSelector((state) => state.post.post.comments)
    const post = useSelector((state)=> state.post.post)

    useEffect(()=>{
      setComments([...comments , comment])
    }, [comment , post])
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

    useEffect(() => {
      dispatch(getMyAllPosts());
    }, []);
  
    const onClickPost = (post) => {
      const selectedPost = posts.find(p => p.id === post.id);
      if (selectedPost) {
        setDescription(selectedPost.description);
        setPostDetail(selectedPost);
        setComments(selectedPost.comments);
        setId(selectedPost.id);
      }
    };
    

    const handleInputChange = (e) => {
      setCommentAdd(e.target.value);
    };

    const handleAddComment = () => {
      dispatch(addComment({
        text: commentAdd,
        postId: id
      }));
      setCommentAdd(""); // Очищаем поле ввода после добавления комментария
    };
    

    const closeModal = () => {
      setPostDetail(null);
      setFollowers(false);
    };

    const remove = (idComment)=>{
      dispatch(deleteComment(idComment))
    }

    useEffect(() => {
      setText(username || 'username');
    }, [username]);

    return (
      <div className="profile">
        <div className="header profile-header">
          <div className="profile-header-logo">
            <img src="/images/logo-profile.png" alt="Profile Logo" />
          </div>
          <div className="header-search">
            <img src="/images/vector.png" alt="Search Icon" />
            <input placeholder="Search" />
          </div>
          <div className="header-nav">
            <Link href='home'>
              <img src="/images/home.png" alt="Home Icon" />
            </Link>
            <img src="/images/message.png" alt="Message Icon" />
            <img onClick={() => setCreatePost(1)} src="/images/NewPosts.png" alt="New Posts Icon" />
            <img src="/images/FindPeople.png" alt="Find People Icon" />
            <img src="/images/ActivityFeed.png" alt="Activity Feed Icon" />
            <img src="/images/Profile-Pic-S.png" alt="Profile Picture" />
          </div>
        </div>
        <div className="main-p">
          <div className="main-p-left">
            <img src="/images/Profile.png" alt="Profile Image" />
          </div>
          <div className="main-p-right">
            <div className="user-info-up">
              <h1>{text}</h1>
              <button className="button">Follow</button>
              <span>...</span>
            </div>
            <div className="user-info-center">
              <p>{count} posts</p>
              <p onClick={() => setFollowers(true)}>3M followers</p>
              <p>1123 following</p>
            </div>
            <p>{text}</p>
          </div>
        </div>
        {createPost === 1 && (
          <div ref={postCreateRef}>
            <PostCreate setCreatePost={setCreatePost} username={text} create={true} edit={false} />
          </div>
        )}

        <Posts posts={posts} onClickPost={onClickPost} />
        
        {postDetail !== null && (
          <div className="modal">
            <div className="modal-white-drop" onClick={closeModal}></div>
            <div className="modal-inner">
              <div className="modal-img">
                <img src={`http://46.101.192.129:1000${postDetail.imageUrl}`} alt="Post" />
              </div>
              <div className="modal-right">
                <div className="modal-header">
                  <UserMini username={text} close={() => setPostDetail(null)} selectedPost={postDetail.id} shadow='shadow' dop='...' />
                  <p>{description}</p>
                </div>
                <div className="comments">
                  <div className="comment">
                    {comments.map((comment, index) => (
                      <UserMini key={index}   username={comment.userC?.fullName}  text={comment.text} remove='remove' deleted={()=>remove(comment.id)} />
                    ))}
                    
                  </div>
                  <div className="add-comment">
                    <input type="text" placeholder="Add a comment" onChange={handleInputChange} value={commentAdd} />
                    <p onClick={handleAddComment}>Post</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {followers && <Followers follow='Followers' close={closeModal} />}
      </div>
    );
  }
