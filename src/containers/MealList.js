import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from '../axios/index';
import reduxActions from '../redux/actions/index';
import Meal from '../components/Meal';
import Spinner from '../components/Spinner';
import CategoryFilter from '../components/CategoryFilter';
import mealList from '../scss/mealList.module.scss';

const { mealQuery, categoryQuery } = axios;

const {
  addMeals, addCategories, toggleSpinner, changeFilter,
} = reduxActions;

const MealList = ({
  addMeals,
  addCategories,
  mealReducer,
  categoryReducer,
  toggleSpinner,
  spinnerReducer,
  filterReducer,
  changeFilter,
}) => {
  const getRandomAlphabet = () => {
    const alphabets = 'bcefghjklmnprstv'.split('');

    const randomNumber = Math.floor(Math.random() * 16);

    return alphabets[randomNumber];
  };

  const getMeals = async () => {
    const randomAlphabet = getRandomAlphabet();
    try {
      const {
        data: { meals },
      } = await mealQuery.get(`?f=${randomAlphabet}`);

      return meals;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const initialize = async () => {
    try {
      let meals;

      if (mealReducer.length === 0) {
        meals = await getMeals();
      } else {
        meals = mealReducer;
      }

      const {
        data: { categories },
      } = await categoryQuery.get();

      addCategories(categories);

      addMeals(meals);

      if (spinnerReducer) {
        toggleSpinner();
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  const mealsFilter = filterReducer === 'All Categories'
    ? mealReducer
    : mealReducer.filter(meal => meal.strCategory === filterReducer);

  const showMeals = !spinnerReducer ? (
    <div className={mealList.mealListContainer}>
      <CategoryFilter
        filter={filterReducer}
        categories={categoryReducer}
        changeFilter={changeFilter}
      />

      <div className={mealList.mealList}>
        {mealsFilter.map(meal => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  ) : (
    <Spinner />
  );

  return showMeals;
};

MealList.propTypes = {
  addMeals: PropTypes.func.isRequired,
  addCategories: PropTypes.func.isRequired,
  toggleSpinner: PropTypes.func.isRequired,
  mealReducer: PropTypes.instanceOf(Array).isRequired,
  categoryReducer: PropTypes.instanceOf(Array).isRequired,
  spinnerReducer: PropTypes.bool.isRequired,
  filterReducer: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addMeals: beers => dispatch(addMeals(beers)),
  addCategories: categories => dispatch(addCategories(categories)),
  toggleSpinner: () => dispatch(toggleSpinner()),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

const mapStateToProps = ({
  mealReducer,
  categoryReducer,
  spinnerReducer,
  filterReducer,
}) => ({
  mealReducer,
  categoryReducer,
  spinnerReducer,
  filterReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
