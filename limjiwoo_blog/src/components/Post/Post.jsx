import React from 'react';
import { Link } from 'react-router-dom';

import './post.css';

const Post = ({post}) => {
    const {_id, title, tags, image} = post;

    // Crop long titles
    const regex = /[ㄱ-ㅎ|가-힣]{20,}/;
    if (regex.test(title)) {
        title = title.slice(0, 20)+'...';
    } else if (title.length > 50) {
        title = title.slice(0, 50)+'...';
    }

  return (
    <Link to={`/posts/${post._id}`}>
        <div className="blog__post sqaure-image">
            <div className="blog__post-screen">
                <div className="blog__post-screen-title">{title}</div>
                <div className="blog__post-screen-tags">{tags.map(tag => '#'+tag+' ')}</div>
            </div>
            <img src={image} alt="" />
        </div>
    </Link>

  )
}

export default Post