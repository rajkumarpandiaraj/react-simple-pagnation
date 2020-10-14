import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Posts from './components/Posts'
import Paginate from './components/Paginate' 

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10)

  useEffect(() => {
    const fetchPost = async () =>{
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setLoading(false)
      setPosts(res.data)
    }
    fetchPost();
  }, [])

const indexOfLastPost = currentPage * postsPerPage
const indexOfFirstPost = indexOfLastPost - postsPerPage
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

const pagin = (number) =>{
  setCurrentPage(number);
}

  return (
    <div className="App container">
      <h1 className='text-center mb-4'>My Blogs</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Paginate postsPerPage={postsPerPage}
                totalPosts = {posts.length}
                pagin={pagin}/>
    </div>
  );
}

export default App;
