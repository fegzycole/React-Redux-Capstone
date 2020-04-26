import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router';
import NotFound from '../components/404';
import RedirectButton from '../components/RedirectButton';
import meal from '../scss/meal.module.scss';

const Beer = ({ mealReducer, match, history }) => {
  const { params: { id } } = match;

  const showMealsPage = () => history.push('/');

  const sampleMeal = mealReducer.find(beer => beer.idMeal === id);

  const showBeer = sampleMeal ? (
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
      <RedirectButton handleClick={showMealsPage} />
    </div>
  ) : (
    <NotFound showMealsPage={showMealsPage} />
  );

  return showBeer;
};

Beer.propTypes = {
  meal: PropTypes.instanceOf(Object).isRequired,
  mealReducer: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({
  mealReducer,
}) => ({
  mealReducer,
});

export default withRouter(connect(mapStateToProps)(Beer));
