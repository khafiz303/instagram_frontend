import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { createStory , deleteStory, getMyStories } from '@/app/store/slices/storySlice';

export default function Story() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filter, setFilter] = useState('filter-original');
  const [next, setNext] = useState(1);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState(null); // Состояние для URL изображения
  const [handleStory, setHandleStory] = useState(false);
  const [story, setStory] = useState(null); // Начальное состояние - null

  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const allStories = useSelector((state) => state.story.stories);
    console.log('',story);
  const findStory = (selectedStory) => {
    setStory(selectedStory);
    setHandleStory(true);
  };
  const myId = useSelector((state) => state.auth.currentUser?.id)
  const storyDelete = (id)=>{
   dispatch(deleteStory(id))
   setHandleStory(false)
  }
useEffect(()=>{
  dispatch((getMyStories()))
} , [allStories])
  return (
    <div className="stories">
      {Array.isArray(allStories)&& allStories.map(story => (
        <div className="story" key={story.id}>
          <img src="/images/ink.png" onClick={() => findStory(story)} />
        </div>
      ))}
      {handleStory && story && (
        <div className='modal'>
            <div className='modal-white-drop' onClick={()=> setHandleStory(false)}> </div>
            <div className='modal-inner' id='modal-inner' >
            {story.userId == myId &&   <p className='delete-story' onClick={()=> storyDelete(story.id)}>X</p> }
                <div className="main-img">
                    <img src={`http://46.101.192.129:1000${story.imageUrl}`} />
                </div>
            </div>
        </div>
      )}
    </div>
  );
}
