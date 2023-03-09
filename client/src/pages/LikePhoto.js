import React from 'react';
import LikeButton from './LikeButton';

function Photo(props) {
  return (
    <div className="photo">
      <img src={props.src} alt={props.alt} />
      <LikeButton />
    </div>
  );
}

export default Photo;
