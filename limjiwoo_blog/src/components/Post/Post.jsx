import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RiDeleteBin6Line, RiEditLine } from 'react-icons/ri';

import './post.css';
import { deletePost, setCurrentId } from '../../actions/posts';

const Post = ({post}) => {
    const dispatch = useDispatch();
    const {_id, title, tags, image, likeCount} = post;
    const user = true;

    // Crop long titles
    const regex = /[ㄱ-ㅎ|가-힣]{20,}/;
    if (regex.test(title)) {
        title = title.slice(0, 20)+'...';
    } else if (title.length > 50) {
        title = title.slice(0, 50)+'...';
    }

    const handleDelete = () => {
        dispatch(deletePost(_id));
    }

    return (
        <div className="blog__post sqaure-image">
            <div className="blog__post-screen">
                <Link className="blog__post-screen-link" to={`/posts/${_id}`}>
                    <div className="blog__post-screen-title">{title}</div>
                    <div className="blog__post-screen-tags">{tags.map(tag => '#'+tag+' ')}</div>
                </Link>
                <div className="blog__post-screen-info">
                    { user && <RiEditLine className="blog__post-screen-edit" size={20} onClick={() => dispatch(setCurrentId(_id))} /> }
                    { user && <RiDeleteBin6Line className="blog__post-screen-delete" size={20} onClick={handleDelete}/> }
                </div>
            </div>
            <img src={image} alt="post image" />
        </div>
    )
}

export default Post