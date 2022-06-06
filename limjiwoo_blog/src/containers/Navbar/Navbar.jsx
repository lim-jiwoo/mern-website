import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const user = true;

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
            <div className="blog__navbar-menu_search"></div>
            {user && <div>Here</div>}
            <div className="blog__navbar-menu_upload"></div>
            <div className="blog__navbar-menu_log"></div>
          </div>
        )}
      </div>

    </nav>
  )
}

export default Navbar;