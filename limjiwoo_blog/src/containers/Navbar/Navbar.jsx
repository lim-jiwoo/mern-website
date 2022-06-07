import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import FileBase from 'react-file-base64';

import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [image, setImage] = useState('');
  const user = true;

  const handleSubmit = (e) => {
    // e.preventDefault();
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
          <div className="blog__navbar-menu_container">
            <div className="blog__navbar-menu_section">
              <input type="text" className="blog__navbar-menu_input" placeholder="제목으로 검색" />
              <input type="text" className="blog__navbar-menu_input" placeholder="태그로 검색" />
              <button className="blog__navbar-menu_button-primary">Search</button>
            </div>

            {user && (
              <div className="blog__navbar-menu_section">
                <input type="text" className="blog__navbar-menu_input" placeholder="제목 입력" />
                <input type="text" className="blog__navbar-menu_input" placeholder="태그 입력" />
                {image
                  ? <img src={image} alt="Uploaded picture" />
                  : <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="No uploaded picture" />
                }
                <FileBase
                  multiple={false}
                  onDone={({base64}) => setImage(base64)}
                ></FileBase>
                <button className="blog__navbar-menu_button-primary" onClick={handleSubmit}>Submit</button>
                <button className="blog__navbar-menu_button-secondary">Clear</button>
              </div>
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