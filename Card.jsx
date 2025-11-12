import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';

function Card(props){
  return(
    <div className="card">
      <Header profileImg={props.commentObject.profileImg} username={props.commentObject.username}/>
      <Body comment={props.commentObject.comment} />
    </div>
  );
}

export default Card;
