import React from 'react';
import { useSelector } from 'react-redux';

import './artworks.css';
import Post from '../../components/Post/Post';

const Artworks = ({setCurrentId}) => {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="blog__artworks">
      <div className="blog__artworks-posts">
        {posts.map((post) => (
            <Post key={post._id} post={post} setCurrentId={setCurrentId} />
        ))}
      </div>
    </div>
  )
}

export default Artworks;