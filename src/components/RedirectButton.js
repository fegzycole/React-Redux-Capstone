import React from 'react';
import PropTypes from 'prop-types';

const RedirectButton = ({ handleClick }) => (
  <button type="button" onClick={handleClick}>
    Back to Meals Page
  </button>
);

RedirectButton.propTypes = {
  handleClick: PropTypes.func,
};

RedirectButton.defaultProps = {
  handleClick: () => null,
};

export default RedirectButton;
