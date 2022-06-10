import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import FileBase from 'react-file-base64';

import './navbar.css';
import {createPost} from '../../actions/posts';

const Navbar = () => {
  const dispatch = useDispatch();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [postData, setPostData] = useState({title:'', tags:[], image:''});
  const inputEmpty = postData.title && postData.image ? false : true;
  const user = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createPost(postData));
    handleClear();
    setToggleMenu(false);
  }

  const handleClear = () => {
    setPostData({title:'', tags:[], image:''});
  }

  return (
    <nav className="blog__navbar">
      <div className="blog__navbar-title">
        <div className="blog__navbar-title_name">Lim Jiwoo</div>
        <div className="blog__navbar-title_desc">Amateur Illustrator</div>
      </div>

      <div className="blog__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="var(--color-text)" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="var(--color-text)" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="blog__navbar-menu_container scale-up-center">
            <form className="blog__navbar-menu_section">
              <input type="text" className="blog__navbar-menu_input" placeholder="제목으로 검색" />
              <input type="text" className="blog__navbar-menu_input" placeholder="태그로 검색" />
              <button className="blog__navbar-menu_button">Search</button>
            </form>

            {user && (
              <form className="blog__navbar-menu_section">
                <input type="text" className="blog__navbar-menu_input" placeholder="제목 입력" value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
                <input type="text" className="blog__navbar-menu_input" placeholder="태그 입력 - 쉼표(,)로 구분" value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})} />
                {postData.image
                  ? <img src={postData.image} alt="Uploaded picture" />
                  : <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAQAAABeK7cBAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII=" alt="No uploaded picture" />
                }
                <FileBase
                  multiple={false}
                  onDone={({base64}) => setPostData({...postData, image:base64})}
                ></FileBase>
                <button
                  className={inputEmpty ? "blog__navbar-menu_button--disabled" : "blog__navbar-menu_button"}
                  type="submit" onClick={handleSubmit} disabled={inputEmpty}
                >Submit</button>
                <button className="blog__navbar-menu_button-secondary" onClick={handleClear}>Clear</button>
              </form>
            )}
            
            <div className="blog__navbar-menu_log">
              <a href="">{user ? '관리자 로그아웃' : '관리자 로그인'}</a>
            </div>
          </div>
        )}
      </div>

    </nav>
  )
}

export default Navbar;