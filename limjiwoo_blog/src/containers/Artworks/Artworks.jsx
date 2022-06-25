import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './artworks.css';
import { Post } from '../../components';
import { getPosts } from '../../actions/posts';

const Artworks = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
      dispatch(getPosts());
  }, [dispatch]);

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