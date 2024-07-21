'use client';
import Posts from "@/components/posts";
import PostCreate from "@/components/posts/post/createPost";
import { useState, useEffect, useRef } from "react";
import UserMini from "@/components/userMini";
import Followers from "@/components/followers";
import Followings from "@/components/followings";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { getMyAllPosts, addComment , deleteComment } from "@/app/store/slices/postSlice";
import { useRouter } from "next/navigation";
import { getProfile , createFollow , unfollow  , getFollowing , getFollower , getMyFollowing} from "@/app/store/slices/profileSlice";
import { useParams } from "next/navigation";
import { logOut } from "@/app/store/slices/authSlice";
export default function Profile() {
  const [id, setId] = useState();
  const [create, setCreate] = useState(true);
  const [createPost, setCreatePost] = useState(0);
  const postCreateRef = useRef(null);
  const [postDetail, setPostDetail] = useState(null);
  const [commentAdd, setCommentAdd] = useState("");
  const [comments, setComments] = useState([]);
  const [followers, setFollowers] = useState(false);
  const [following, setFollowing] = useState(false);
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [post , setPost] = useState()
  const dispatch = useDispatch();
  const router = useRouter()
  const posts = useSelector((state) => state.post.posts);
  const myId = useSelector((state) => state.auth.currentUser?.id);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const {username} = useParams() 
  const profile = useSelector((state) => state.profile.profile); 
  const userFollowing = useSelector((state) => state.profile.following); 
  const userFollowers = useSelector((state) => state.profile.followers); 
  const userComments = useSelector((state) => state.post.post.comments);
  console.log('userFollowers',userFollowers);
  console.log(myId);
//   const comment = useSelector((state) => state.post.post.comments)
//   const post = useSelector((state)=> state.post.post)

//   useEffect(()=>{
//     setComments([...comments , comment])
//   }, [comment , post])
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
    // dispatch(getMyAllPosts());
    dispatch(getProfile(username))
    dispatch(getFollowing(username))
    dispatch(getFollower(username))
    dispatch(getMyFollowing(currentUser?.username))
    if(post && profile.posts){
      onClickPost(post)
    
    }
   
  }, [dispatch ,  profile  ]);

  const onClickPost = (post) => {
   
    const selectedPost = profile.posts.find(p => p.id === post.id);
    if (selectedPost) {
      setDescription(selectedPost.description);
   
      setComments(selectedPost.comments);
      setId(selectedPost.id);
      setPost(post)
      if(postDetail != 1 ){
        setPostDetail(selectedPost);
      }
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
    setCommentAdd(""); 
    onClickPost(id)
  };
  

  const closeModal = () => {
    setPostDetail(null);
    setPost()
    setFollowers(false);
    setFollowing(false)
  };

  const remove = (idComment)=>{
    dispatch(deleteComment(idComment))
  }
  const exit = () => {
    dispatch(logOut());
    router.push('/');
  };
  useEffect(() => {
    setText(username || 'username');
  }, [username]);
  let count = profile.posts?.length;
  return (
    <div className="profile">
      <div className="header profile-header">
        <div className="profile-header-logo">
          <img src="/images/logo-profile.png" alt="Profile Logo"  onClick={()=> router.push('/home')}/>
        </div>
        <div className="header-search">
          <img src="/images/vector.png" alt="Search Icon" />
          <input placeholder="Search" />
        </div>
        <div className="header-nav">
          <Link href='/home'>
            <img src="/images/home.png" alt="Home Icon" />
          </Link>
          <img onClick={() => setCreatePost(1)} src="/images/NewPosts.png" alt="New Posts Icon" />
          <img onClick={exit} src='/images/exit.svg'/>
          <img onClick={()=> router.push(`/profile/${currentUser.username}`)} src="/images/ink.png" alt="Profile Picture" />

        </div>
      </div>
      <div className="main-p">
        <div className="main-p-left">
          <img src="/images/ink.png" alt="Profile Picture" />
        </div>
        <div className="main-p-right">
          <div className="user-info-up">
            <h1>{text}</h1>
            {
              typeof myId !== 'undefined' && typeof profile.id !== 'undefined' && (
                myId === profile.id ? (
                  <button className="button">Edit</button>
                ) : (
                  Array.isArray(userFollowers) && userFollowers.some(follower => follower.user_id === myId) ? (
                    <button className="button button-color" onClick={() => dispatch(unfollow(profile.id))}>Following</button>
                  ) : (
                    <button className="button" onClick={() => dispatch(createFollow(profile.id))}>Follow</button>
                  )
                )
              )
            }



            
            <span>...</span>
          </div>
          <div className="user-info-center">
            <p>{count} posts</p>
            <p onClick={() => setFollowers(true)}>{userFollowers.length > 0 ? userFollowers.length : 0} followers</p>

            <p onClick={() => setFollowing(true)}> {userFollowing.length} following</p>

          </div>
          <p>{text}</p>
        </div>
      </div>
      {createPost === 1 && (
        <div ref={postCreateRef}>
          <PostCreate setCreatePost={setCreatePost} name={text} create={true} edit={false} />
        </div>
      )}

      {profile.posts && profile.posts.length > 0 && <Posts posts={profile.posts} onClickPost={onClickPost} />}
      
      {postDetail !== null && (
        <div className="modal">
          <div className="modal-white-drop" onClick={closeModal}></div>
          <div className="modal-inner">
            <div className="modal-img">
              <img src={`http://46.101.192.129:1000${postDetail.imageUrl}`} alt="Post" />
            </div>
            <div className="modal-right">
              <div className="modal-header">
                <UserMini username={text} close={() => setPostDetail(null)} userId = {profile.id} selectedPost={postDetail.id} shadow='shadow' dop='...' />
                <p>{description}</p>
              </div>
              <div className="comments">
                <div className="comment">
                  {/* {comments.map((comment, index) => (
                    <UserMini key={index}   username={comment.userC?.fullName}  text={comment.text} remove='remove' deleted={()=>remove(comment.id)} />
                  ))} */}
                     {comments.map((comment, index) => (
                    <UserMini key={index} username={comment.userC?.fullName} text={comment.text}   remove={myId === comment.userC?.id ? 'remove' : undefined}
                    deleted={myId === comment.userC?.id ? () => dispatch(deleteComment(comment.id)) : undefined}  />
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

      {followers && <Followers follow='Followers' close={closeModal}  />}
      {following && <Followings follow='Following' close={closeModal} />}
    </div>
  );
}
