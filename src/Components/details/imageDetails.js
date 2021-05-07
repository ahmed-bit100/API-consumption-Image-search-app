import axios from 'axios';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './imageDetails.css';

const ImageDetails = (props) => {
  console.log(props.location.state.image);
  const {
    largeImageURL: image,
    likes,
    downloads,
    tags,
    user: owner,
    pageURL,
  } = props.location.state.image;
  return (
    <div className="container">
      <img src={image} alt={tags} />
      <div className="details">
        <h5> Owner : {owner} </h5>
        <h5>Likes : {likes} </h5>
        <h5>downloads : {downloads}</h5>
        <a href={pageURL}> Download now: {pageURL} </a>
      </div>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default ImageDetails;
