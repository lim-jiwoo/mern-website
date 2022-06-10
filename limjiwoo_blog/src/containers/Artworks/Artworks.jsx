import React from 'react';
import { useSelector } from 'react-redux';

import './artworks.css';
import Post from '../../components/Post/Post';

const Artworks = () => {
  const posts = useSelector((state) => state.posts);
  
  return (
    <div className="blog__artworks">
      <div className="blog__artworks-posts">
        {posts.map((post, index) => (
          <Post key={post.title+index} title={post.title} tags={post.tags} image={post.image} />
        ))}
      </div>
    </div>
  )
}

export default Artworks;