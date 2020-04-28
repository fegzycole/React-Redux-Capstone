import React from 'react';
import PropTypes from 'prop-types';
import meal from '../scss/meal.module.scss';

const Ingredients = ({ ingredients }) => (
  <div className={meal.ingredients}>
    <h5>INGREDIENTS</h5>
    <ul className={meal.circle}>
      {ingredients.map(ing => <li key={`${ing}-ingredient`}>{ing}</li>)}
    </ul>
  </div>
);

Ingredients.propTypes = {
  ingredients: PropTypes.instanceOf(Array).isRequired,
};

export default Ingredients;
