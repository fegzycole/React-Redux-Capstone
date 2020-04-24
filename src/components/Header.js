import React, { useState } from 'react';
import DiscLogo from '../assets/disc.png';
import SearchIcon from '../assets/search.png';

const Header = () => {
  const [text] = useState(null);

  return (
    <header className="header">
      <div className="icon">
        <img src={DiscLogo} alt="music-disc" />
        <h3>Songify</h3>
      </div>

      <input type="text" value={text} placeholder="Search" />

      <img src={SearchIcon} alt="search-icon" />
    </header>
  );
};

export default Header;
