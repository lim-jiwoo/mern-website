import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import './artwork.css';
import {fetchPost} from '../../api';

const Artwork = () => {
  const {id} = useParams();
  const [post, setPost] = useState('');

  useEffect(() => {
    fetchPost(id).then(res => setPost(res.data));
  }, [id]);

  return (
      <div className="blog__artwork">
        {post &&
          <>
            <div className="blog__artwork-img">
              <img src={post.image} alt="artwork" />
            </div>
            <div className="blog__artwork-description">
              <h1 className="blog__artwork-title">{post.title}</h1>
              <p className="blog__artwork-tags">{post.tags.map(tag => '#'+tag+' ')}</p>
            </div>
          </>
        }
      </div>
  )
}

export default Artwork;