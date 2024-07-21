import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { createStory } from '@/app/store/slices/storySlice';
export default function StoryCreate({ closeModal}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filter, setFilter] = useState('filter-original');
  const [next, setNext] = useState(1);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState(null); // Состояние для URL изображения
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };
  const sendStory = ()=>{  
    dispatch(createStory({selectedFile}))
    closeModal()

  }
  return (
    <div className={`card ${selectedFile !== null ? 'active' : ''}`}>
      <div className="header-post">
        <p onClick={closeModal}>Cancel</p>
        <p>Create story</p>
        <p onClick={sendStory}>Send</p>
      </div>
      <div className="post-c-img">
        <input 
          type="file" 
          id="fileInput" 
          onChange={handleFileChange} // Используем функцию handleFileChange для onChange
        />
        {selectedFile === null && (
          <label htmlFor="fileInput" className="custom-file-label button">
            Select from computer
          </label>
        )}
      </div>
      {selectedFile && (
        <div className={`pic ${next === 1 ? 'ai-t' : ''}`}>
          <div className={`preview ${filter}`}>
            {imageUrl && <img src={imageUrl} alt="Selected" />} {/* Отображаем выбранное изображение */}
          </div>
       
        </div>
      )}
    </div>
  );
}
