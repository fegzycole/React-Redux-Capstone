import React from 'react';
import BeerLogo from '../assets/beer.svg';
import SearchIcon from '../assets/search.svg';

const Header = () => (
  <header className="header">
    <div className="icon">
      <img src={BeerLogo} alt="music-disc" />
      <h3>Ale-o</h3>
    </div>

    <img src={SearchIcon} alt="search-icon" className="search" />
  </header>
);

export default Header;
