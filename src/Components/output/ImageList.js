import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {api_key} from '../../variables';
import ImageCard from './ImageCard';
import './imageList.css';

const ImageList = ({searchValue}) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(
          `https://pixabay.com/api/?key=${api_key}&q=${searchValue}&image_type=photo&per_page=12`
        );
        // console.log(res);
        setImages(res.data.hits);
        console.log('the images are', images);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, [searchValue]);
  return (
    <div className="image-container">
      {!searchValue ? (
        <h3 style={{color: 'white'}}>
          please type something to start searching
        </h3>
      ) : (
        <div className="image-container">
          {images.map((image, index) => (
            <ImageCard image={image} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageList;
