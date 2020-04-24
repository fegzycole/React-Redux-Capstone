import React from 'react';
import DiscLogo from '../assets/disc.png';
import SearchIcon from '../assets/search.png';

const Header = () => (
  <header>
    <div className="icon">
      <img src={DiscLogo} alt="music-disc" />
      <h3>Songify</h3>
    </div>

    <img src={SearchIcon} alt="search-icon" />
  </header>
);

export default Header;
