import React from 'react';
import MealLogo from '../assets/sphagetti.svg';
import SearchIcon from '../assets/search.svg';

const Header = () => (
  <header className="header">
    <div className="icon">
      <img src={MealLogo} alt="meal-logo" />
      <h3>connoisseur</h3>
    </div>

    <img src={SearchIcon} alt="search-icon" className="search" />
  </header>
);

export default Header;
