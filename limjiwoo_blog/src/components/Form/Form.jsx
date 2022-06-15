import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import FileBase from 'react-file-base64';

import {createPost, updatePost} from '../../actions/posts';
import {fetchPost} from '../../api';

const Form = ({currentId, setCurrentId, setToggleMenu}) => {
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({title:'', tags:[], image:''});
    const inputEmpty = postData.title && postData.image ? false : true;
    const user = true;

    useEffect(() => {
        if (currentId) {
            fetchPost(currentId).then(res => setPostData(res.data));
        }
    }, [currentId])
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!currentId) {
        dispatch(createPost(postData));
      } else {
        dispatch(updatePost(currentId, postData));
        setCurrentId(null);
      }
      handleClear();
      setToggleMenu(false);
    }
  
    const handleClear = (e) => {
      setPostData({title:'', tags:[], image:''});
    }

    return (
        <div className="blog__modal scale-up-center">
            {user &&
                <form className="blog__modal-container">
                    <input type="text" className="blog__modal-input" placeholder="제목 입력" value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
                    <input type="text" className="blog__modal-input" placeholder="태그 입력 - 쉼표(,)로 구분" value={postData.tags} 
                        onChange={(e) => { e.target.value ? setPostData({...postData, tags: e.target.value.split(',')}) : setPostData({...postData, tags:[]})}} />
                    {postData.image
                        ? <img src={postData.image} alt="Uploaded picture" />
                        : <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAQAAABeK7cBAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII=" alt="No uploaded picture" />
                    }
                    <FileBase
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData, image:base64})}
                    ></FileBase>
                    <button
                        className={inputEmpty ? "blog__modal-button--disabled" : "blog__modal-button"}
                        type="submit" onClick={handleSubmit} disabled={inputEmpty}
                    >Submit</button>
                    <button className="blog__modal-button-secondary" type="button" onClick={handleClear}>Clear</button>
                </form>
            }
        
            <div className="blog__modal-log">
                <a href="">{user ? '관리자 로그아웃' : '관리자 로그인'}</a>
            </div>
        </div>
    )
}

export default Form