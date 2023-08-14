import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`responsive-nav ${menuOpen ? 'open' : ''}`}>
      {menuOpen ? (
      <FaTimes className="burger-menu" onClick={toggleMenu} />
      ) : (
      <FaBars className="burger-menu" onClick={toggleMenu} />
      )}
      <ul className={`nav menu ${menuOpen ? 'open' : ''}`}>
        <li><a href="/">الرىيسية</a></li>
        <li><a href="/">اخبار</a></li>
        <li><a href="/">اقتصاد</a></li>
        <li><a href="/">رياضة</a></li>
        <li><a href="/">ثقافة</a></li>
        <li><a href="/">فيديو وصور</a></li>
        <li><a href="/">اراء</a></li>
      </ul>
    </nav>
  );
}

export default Menu;