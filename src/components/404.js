import React from 'react';
import PropTypes from 'prop-types';
import RedirectButton from './RedirectButton';
import meal from '../scss/meal.module.scss';

const NotFound = ({ showMealsPage }) => (
  <div className={meal.notFound}>
    <h2>404</h2>
    <p>Meal Not Found</p>
    <RedirectButton handleClick={showMealsPage} />
  </div>
);

NotFound.propTypes = {
  showMealsPage: PropTypes.func,
};

NotFound.defaultProps = {
  showMealsPage: () => null,
};

export default NotFound;
