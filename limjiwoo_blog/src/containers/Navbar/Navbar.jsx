import React, {useState, useEffect} from 'react';
import {RiMenu3Line, RiCloseLine, RiSearchLine} from 'react-icons/ri';
import {useSelector, useDispatch} from 'react-redux';

import './navbar.css';
import {Search, Form} from '../../components';
import {setCurrentId} from '../../actions/posts';

const Navbar = () => {
  const dispatch = useDispatch();
  const currentId = useSelector((state) => state.posts.id);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  useEffect(() => {
    if (currentId) setToggleMenu(true);
  }, [currentId])

  return (
    <nav className="blog__navbar">
      <div className="blog__navbar-title">
        <div className="blog__navbar-title_name">Lim Jiwoo</div>
        <div className="blog__navbar-title_desc">Amateur Illustrator</div>
      </div>

      <div className="blog__navbar-menu">
        {toggleSearch
          ? <RiCloseLine size={27} onClick={() => setToggleSearch(false)} />
          : <RiSearchLine size={27} onClick={() => {setToggleSearch(true); setToggleMenu(false); }} />
        }
        {toggleSearch &&
            <Search />
        }
        {toggleMenu
          ? <RiCloseLine size={27} onClick={() => {setToggleMenu(false); dispatch(setCurrentId(null)); }} />
          : <RiMenu3Line size={27} onClick={() => {setToggleMenu(true); setToggleSearch(false); }} />
        }
        {toggleMenu && (
            <Form setToggleMenu={setToggleMenu} />
        )}
      </div>
    </nav>
  )
}

export default Navbar;