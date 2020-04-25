import React, { useState } from 'react';
import BeerLogo from '../assets/beer.svg';
import SearchIcon from '../assets/search.png';

const Header = () => {
  const [text] = useState(null);

  return (
    <header className="header">
      <div className="icon">
        <img src={BeerLogo} alt="music-disc" />
        <h3>Ale-o</h3>
      </div>

      <input type="text" value={text} placeholder="Search" />

      <img src={SearchIcon} alt="search-icon" />
    </header>
  );
};

export default Header;
