import React from 'react';
import PropTypes from 'prop-types';
import RedirectButton from './RedirectButton';

const NotFound = ({ showMealsPage }) => (
  <div className="not-found">
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
