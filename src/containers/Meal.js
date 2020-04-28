import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router';
import NotFound from '../components/404';
import RedirectButton from '../components/RedirectButton';
import meal from '../scss/meal.module.scss';
import { showMealsPage } from '../helper/index';

const Meal = props => {
  const { mealReducer, match } = props;
  const {
    params: { id },
  } = match;

  const mealIngredients = [];

  const sampleMeal = mealReducer.find(meal => meal.idMeal === id);

  if (sampleMeal) {
    const ingredientKeys = Object.keys(sampleMeal).filter(meal => meal.match('strIngredient'));

    ingredientKeys.forEach(ingKey => {
      if (sampleMeal[ingKey]) mealIngredients.push(sampleMeal[ingKey]);
    });
  }

  const showMeal = sampleMeal ? (
    <div className={meal.sampleMeal}>
      <div className={meal.mealDescription}>
        <div>
          <img src={sampleMeal.strMealThumb} alt={sampleMeal.strMeal} />
        </div>
        <div className={meal.mealContent}>
          <h4>{sampleMeal.strMeal}</h4>

          <ReactPlayer url={sampleMeal.strYoutube} />
        </div>
      </div>
      <div className={meal.ingredients}>
        <h5>INGREDIENTS</h5>
        <ul className={meal.circle}>
          {mealIngredients.map(ing => <li key={`${ing}-ingredient`}>{ing}</li>)}
        </ul>
      </div>
      <div className={meal.instructions}>
        <h5>HOW TO PREPARE</h5>
        <ul>
          {sampleMeal.strInstructions.split('\r\n').map(instruction => (
            <li key={`${instruction}-key`}>{instruction}</li>
          ))}
        </ul>
      </div>
      <RedirectButton handleClick={() => showMealsPage(props)} />
    </div>
  ) : (
    <NotFound showMealsPage={() => showMealsPage(props)} />
  );

  return showMeal;
};

Meal.propTypes = {
  meal: PropTypes.instanceOf(Object),
  mealReducer: PropTypes.instanceOf(Array).isRequired,
};

Meal.defaultProps = {
  meal: {},
};

const mapStateToProps = ({ mealReducer }) => ({
  mealReducer,
});

export default withRouter(connect(mapStateToProps)(Meal));
