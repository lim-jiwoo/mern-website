import React from 'react';
import { useSelector } from 'react-redux';

import './artworks.css';
import Post from '../../components/Post/Post';

const Artworks = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="blog__artworks">
      <div className="blog__artworks-posts">
        {posts.map((post) => (
            <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Artworks;