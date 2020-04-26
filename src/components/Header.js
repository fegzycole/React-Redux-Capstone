import React from 'react';
import { withRouter } from 'react-router';
import MealLogo from '../assets/sphagetti.svg';
import SearchIcon from '../assets/search.svg';
import header from '../scss/header.module.scss';
import helper from '../helpers/index';

const { showMealsPage } = helper;

const Header = props => (
  <header className={header.header}>
    <div
      className={header.icon}
      onClick={() => showMealsPage(props)}
      onKeyPress={() => showMealsPage(props)}
      role="button"
      tabIndex="0"
    >
      <img src={MealLogo} alt="meal-logo" />
      <h3>connoisseur</h3>
    </div>

    <img src={SearchIcon} alt="search-icon" className={header.search} />
  </header>
);

export default withRouter(Header);
