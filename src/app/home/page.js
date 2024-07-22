'use client'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { getAllPosts, addComment, createLike, deleteLike } from "../store/slices/postSlice";
import moment from "moment";
import Link from 'next/link';
import StoryCreate from "@/components/story/createStory";
import UserMini from "@/components/userMini";
import Story from "@/components/story";
import { getMyAllStories } from "../store/slices/storySlice";
import { logOut } from "../store/slices/authSlice";
import { getSuggestions } from "../store/slices/profileSlice";

export default function Home() {
  const [comments, setComments] = useState({}); // Обновленное состояние для комментариев
  const [createStory, setCreateStory] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const myId = useSelector((state) => state.auth.currentUser?.id);
  const allPosts = useSelector((state) => state.post.allPost);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const suggestions = useSelector((state) => state.profile.suggestions);
  const likes = useSelector((state) =>state.post.likes)
  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getMyAllStories());
  }, [dispatch ,likes ]);

  useEffect(() => {
    dispatch(getSuggestions());
  }, [dispatch]);

  const formatTimeAgo = (createdAt) => {
    const now = moment();
    const postTime = moment(createdAt);
    const diffInMinutes = now.diff(postTime, 'minutes');
    const diffInHours = now.diff(postTime, 'hours');
    const diffInDays = now.diff(postTime, 'days');
    const diffInMonths = now.diff(postTime, 'months');
    const diffInYears = now.diff(postTime, 'years');

    if (diffInMinutes < 60) {
      return `${diffInMinutes}м`;
    } else if (diffInHours < 24) {
      return `${diffInHours}ч`;
    } else if (diffInDays < 30) {
      return `${diffInDays}д`;
    } else if (diffInMonths < 12) {
      return `${diffInMonths}м`;
    } else {
      return `${diffInYears}г`;
    }
  };

  const onTextChange = (e, postId) => {
    setComments(prevComments => ({
      ...prevComments,
      [postId]: e.target.value
    }));
  };

  const commentAdd = (postId) => {
    dispatch(addComment({ postId, text: comments[postId] }));
    setComments(prevComments => ({
      ...prevComments,
      [postId]: ''
    }));
  };

  const handleLike = (idPost) => {
    dispatch(createLike({ id: idPost }));
  };

  const deleteLikes = (likeId) => {
    dispatch(deleteLike(likeId));
  };

  const exit = () => {
    dispatch(logOut());
    router.push('/');
  };

  return (
    <div className="home">
      <div className="home-left">
        <div className="header profile-header">
          <div className="profile-header-logo">
            <img src="/images/logo-profile.png" alt="Logo" />
          </div>
          <div className="header-search">
            <img src="/images/vector.png" alt="Search" />
            <input placeholder="Search" />
          </div>
          <div className="header-nav">
            <img src="/images/plus-solid.svg" onClick={() => setCreateStory(true)} alt="Create Story" />
            <img src="/images/home.png" alt="Home" />
            <img src="/images/exit.svg" onClick={exit} alt="Logout" />
            {currentUser && (
                <Link href={`/profile/${currentUser.username}`} passHref>
             
                  <img src="/images/ink.png" alt="Profile Picture" />

                
                </Link>
              )}

          </div>
        </div>

        <Story />

        <div className="relative">
          <div className="main">
            {allPosts.map((post) => (
              <div className="post" key={post.id}>
                <Link href={`/profile/${post.user?.fullName}`}>
                  <UserMini username={post.user?.fullName} imgSize='imgSize' dop='...' />
                </Link>
                <div className="main-profile">
                  <div className="main-img">
                    <img src={`http://46.101.192.129:1000${post.imageUrl}`} alt="Post Image" />
                    <div className="img-nav">
                      <div className="img-nav-left">
                        {post.likes.some((like) => like.userId === myId) ? (
                          <img
                            className="like-icon"
                            onClick={() => {
                              const like = post.likes.find((like) => like.userId === myId);
                              deleteLikes(like.id);
                            }}
                            src="/images/heart-icon.svg"
                            alt="Like Icon"
                          />
                        ) : (
                          <img
                            className="like-icon"
                            onClick={() => handleLike(post.id)}
                            src="/images/heart-black.svg"
                            alt="Like Icon"
                          />
                        )}
                        <Link href={`/home/${post.id}`}>
                          <img className="comment-img" src="/images/Comment.png" alt="Comment Icon" />
                        </Link>
                      </div>
                      <div>
                        <img src="/images/izb.png" alt="Save Icon" />
                      </div>
                    </div>
                  </div>
                  <div className="post-com">
                    <div className="postDown">
                      <p>{post.user?.fullName}</p>
                      <p>{post.description}</p>
                    </div>
                    <Link href={`/home/${post.id}`}>
                      <p className="comment-parag">
                        Посмотреть все комментарии: ({post.id && post.comments.length})
                      </p>
                    </Link>
                    <p>{formatTimeAgo(post.createdAt)}</p>

                    <div className="add-comment">
                      <input
                        type="text"
                        placeholder="add a comment"
                        value={comments[post.id] || ''} // Используем значение из состояния для конкретного поста
                        onChange={(e) => onTextChange(e, post.id)}
                      />
                      <p onClick={() => commentAdd(post.id)}>Post</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="rec">
              <div className="rec-all">
                <h2>Suggestions For You</h2>
                <p>See All</p>
              </div>
              {suggestions &&
                suggestions.map((suggestion) => (
                  <UserMini key={suggestion.id} username={suggestion.fullName} follow="follow" link="link" />
                ))}
            </div>
          </div>
        </div>

        {createStory && (
          <div className="post-create">
            <StoryCreate
              setCreateStory={setCreateStory}
             
              create={true}
              edit={false}
              closeModal={() => setCreateStory(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
