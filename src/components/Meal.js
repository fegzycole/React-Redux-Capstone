import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const Beer = props => {
  const { meal } = props;

  const { strMeal, strMealThumb } = meal;

  const showBeerPage = ({ idMeal }) => props.history.push(`/${idMeal}`);

  return (
    <div
      className="Beer"
      onClick={() => showBeerPage(meal)}
      onKeyPress={() => showBeerPage(meal)}
      role="button"
      tabIndex="0"
    >
      <div className="img-container">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="beer-content">
        <h4>{strMeal}</h4>
      </div>
    </div>
  );
};

Beer.propTypes = {
  meal: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.func,
};

Beer.defaultProps = {
  history: () => null,
};

export default withRouter(Beer);
