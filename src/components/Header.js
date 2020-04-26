import React from 'react';
import MealLogo from '../assets/sphagetti.svg';
import SearchIcon from '../assets/search.svg';
import header from '../scss/header.module.scss';

const Header = () => (
  <header className={header.header}>
    <div className={header.icon}>
      <img src={MealLogo} alt="meal-logo" />
      <h3>connoisseur</h3>
    </div>

    <img src={SearchIcon} alt="search-icon" className={header.search} />
  </header>
);

export default Header;
