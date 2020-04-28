import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import mealStyles from '../scss/meal.module.scss';

const Meal = props => {
  const { meal } = props;

  const { strMeal, strMealThumb } = meal;

  const showMealPage = ({ idMeal }) => props.history.push(`/${idMeal}`);

  return (
    <div
      className={mealStyles.meal}
      onClick={() => showMealPage(meal)}
      onKeyPress={() => showMealPage(meal)}
      role="button"
      tabIndex="0"
    >
      <div className={mealStyles.imgContainer}>
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className={mealStyles.beerContent}>
        <h4>{strMeal}</h4>
      </div>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(Meal);
