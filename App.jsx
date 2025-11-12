import React from "react";
import Card from "./Card.jsx";
import { comments } from "./commentData.js";

function App() {
 return (
  <div>
    <div className="forum-header">
      <h1>💬 Community Forum</h1>
      <p>Share your thoughts and connect with others</p>
    </div>
    {comments.map((comment, index) => <Card key={index} commentObject={comment} />)}
  </div>
  );
}

export default App;
