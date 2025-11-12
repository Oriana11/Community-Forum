import React from "react";

function Header(props) {
  return (
    <div className="card-header">
      <img src={props.profileImg} alt={props.username} />
      <h1 className="username">{props.username}</h1>
    </div>
  );
}

export default Header;
