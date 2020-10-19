import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const [post, setPost] = useState([])
  useEffect(() => {
    axios.get('/authors/1/posts/3').then(res => setPost(res.data))
  }, [])
  return (
    <div className="App">
      {post[0] && post[1] &&
        <article>
          <h1>{post[0].title}</h1>
          <p>{post[0].content}</p>
          <h2>By: {post[1].name}</h2>
        </article>
      }
    </div>
  );
}

export default App;
