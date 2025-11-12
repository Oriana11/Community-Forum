import React from 'react';

function Body(props){
  return (
    <p className="comment-text">{props.comment}</p>
  );
}

export default Body;