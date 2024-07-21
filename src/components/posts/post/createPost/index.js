import { SSG_GET_INITIAL_PROPS_CONFLICT } from 'next/dist/lib/constants';
import React, { useEffect, useState } from 'react';
import { createPost, editPost } from '@/app/store/slices/postSlice';
import { useDispatch } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';
export default function PostCreate({ item, user, setCreatePost, name , create , edit , post }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filter, setFilter] = useState('filter-original');
  const [next, setNext] = useState(0);
  const [file, setFile] = useState(null); // Используем null вместо ''
  const [description, setDescription] = useState(''); // Добавлено useState для description
  const {username} = useParams() 

  const [imageUrl, setImageUrl] = useState(''); // Добавлено состояние для URL изображения

  const {id} = useParams()
  console.log('id:',id);
  const dispatch = useDispatch();
  const router = useRouter()
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Сначала получаем файл
    setFile(file); // Сохраняем файл
    setImageUrl(URL.createObjectURL(file)); // Создаем URL-объект из файла и сохраняем его
    setSelectedFile(file); 
    console.log(selectedFile);
    console.log(imageUrl);
    // Сохраняем сам файл в состояние selectedFile
  };

    const onClick = () => {
      setCreatePost(0);
    };

  const onFilter = (filterName) => {
    setFilter(filterName);
  };

  const nextFunc = () => {
    if (next === 0) {
      setNext(1);
    } else if (next === 1) {
      const formData = new FormData();
      formData.append('imageUrl', file); // Добавляем файл под названием imageUrl
      formData.append('description', description); // Добавляем описание под названием description
      dispatch(createPost(formData));
       setCreatePost(0);
       router.push(`/home`)
     
       
    }
  };

  const nextEditFunc = () => {
    if (next === 0) {
      setNext(1);
    } else if (next === 1) {
      const formData = new FormData();
      formData.append('imageUrl', file); // Добавляем файл под названием imageUrl
      formData.append('description', description);
      formData.append('id', id);
      dispatch(editPost(id , formData));
       setCreatePost(0);
       router.push(`/home`)
       
    }
  };
  // if(post && post.id){
  //   useEffect(()=>{
  //     setDescription(post.description)
  //   }, [post])
  // }

  if (create && !edit) {
    return(
      <div className={`card ${selectedFile !== null ? 'active' : ''}`}>
      
      <div className="header-post">
        <p onClick={onClick}>Cancel</p>
        <p>Create new post</p>
        <p onClick={nextFunc}>next</p> {/* Исправлено: правильно вызываем функцию nextFunc */}
      </div>
      <div className="post-c-img">
        <input 
          type="file" 
          id="fileInput" 
          onChange={handleFileChange} 
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
            <img src={imageUrl} alt="Selected"/> {/* Исправлено: Используем imageUrl для src */}
          </div>
          {next === 0 && (
            <div className='filters'>
              <div className='filter' onClick={() => onFilter('filter-original')}>Original</div>
              <div className='filter' onClick={() => onFilter('filter-clarendon')}>Clarendon</div>
              <div className='filter' onClick={() => onFilter('filter-gingham')}>Gingham</div>
              <div className='filter' onClick={() => onFilter('filter-moon')}>Moon</div>
              <div className='filter' onClick={() => onFilter('filter-lark')}>Lark</div>
              <div className='filter' onClick={() => onFilter('filter-reyes')}>Reyes</div>
            </div>
          )}
          {next === 1 && (
            <div className='caption'>
              <div className='caption-img'>
                <img src='/images/Profile-Pic-S.png' alt="Profile Pic"/>
                <p>{name}</p>
              </div>
              <div className='input-caption'>
                <input 
                  placeholder='Write a caption..' 
                  value={description} 
                  onChange={e => (setDescription(e.target.value))}
                />
              </div>
            </div>
          )}
        </div>
      )}
    
    </div>
    )
  }
  const onClose = ()=>{
    router.push(`/home`)
  }

  if(!create && edit){
    return(
      <div className={`card ${selectedFile !== null ? 'active' : ''}`}>
    <div className="header-post">
      <p onClick={onClose}>Cancel</p>
      <p>Edit post</p>
      <p onClick={nextEditFunc}>next</p> 
    </div>
    <div className="post-c-img" id='post-c-img'>
      <input 
        type="file" 
        id="fileInput" 
        onChange={handleFileChange} 
      />
      {selectedFile === null && (
        <label htmlFor="fileInput" className="custom-file-label button">
          Change photo in post
        </label>
      )}
    </div>
    

      <div className={`pic ${next === 1 ? 'ai-t' : ''}`}>
        <div className={`preview ${filter}`}>
        {selectedFile && <img src={imageUrl}/>}
        {selectedFile == null && <img src={`http://46.101.192.129:1000${post.imageUrl}`} alt="Post" />}
        </div>
        {next === 0 && (
          <div className='filters'>
            <div className='filter' onClick={() => onFilter('filter-original')}>Original</div>
            <div className='filter' onClick={() => onFilter('filter-clarendon')}>Clarendon</div>
            <div className='filter' onClick={() => onFilter('filter-gingham')}>Gingham</div>
            <div className='filter' onClick={() => onFilter('filter-moon')}>Moon</div>
            <div className='filter' onClick={() => onFilter('filter-lark')}>Lark</div>
            <div className='filter' onClick={() => onFilter('filter-reyes')}>Reyes</div>
          </div>
        )}
        {next === 1 && (
          <div className='caption'>
            <div className='caption-img'>
              <img src='/images/Profile-Pic-S.png' alt="Profile Pic"/>
              <p>{name}</p>
            </div>
            <div className='input-caption'>
              <input 
                placeholder='Write a caption..' 
                value={description} 
                onChange={e => (setDescription(e.target.value))}
              />
            </div>
          </div>
        )}
      </div>
    
  
  </div>
    )
 
  }else{
    return null;
  }

  
}
