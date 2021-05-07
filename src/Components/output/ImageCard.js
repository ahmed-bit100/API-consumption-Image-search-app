import React from 'react';
import {Link} from 'react-router-dom';
import './imageCard.css';

const ImageCard = ({image}) => {
  console.log(image);
  //console.log(image.imageURL);
  return (
    <div className="card">
      <img src={image.largeImageURL} alt="" />
      <Link
        to={{
          pathname: `/image/${image.id}`,
          state: {image},
        }}
      >
        <button>View</button>
      </Link>
    </div>
  );
};

export default ImageCard;
