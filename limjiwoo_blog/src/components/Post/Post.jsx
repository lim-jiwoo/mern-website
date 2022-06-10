import React from 'react'

import './post.css';

const Post = ({title, tags, image}) => {

    // Crop long titles
    const regex = /[ㄱ-ㅎ|가-힣]{20,}/;
    if (regex.test(title)) {
        title = title.slice(0, 20)+'...';
    } else if (title.length > 50) {
        title = title.slice(0, 50)+'...';
    }

  return (
    <div className="blog__post sqaure-image">
        <div className="blog__post-screen">
            <div className="blog__post-screen-title">{title}</div>
            <div className="blog__post-screen-tags">{tags.map(tag => '#'+tag+' ')}</div>
        </div>
        <img src={image} alt="" />
    </div>
  )
}

export default Post