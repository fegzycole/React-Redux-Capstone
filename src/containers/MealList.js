import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import reduxActions from '../redux/actions/index';
import Meal from '../components/Meal';
import Spinner from '../components/Spinner';
import CategoryFilter from '../components/CategoryFilter';
import mealList from '../scss/mealList.module.scss';
import { initialize } from '../helper/index';


const {
  addMeals, addCategories, toggleSpinner, changeFilter,
} = reduxActions;

const MealList = props => {
  const {
    mealReducer,
    categoryReducer,
    spinnerReducer,
    filterReducer,
    changeFilter,
  } = props;

  useEffect(() => {
    initialize(props);
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
  addMeals: PropTypes.func,
  addCategories: PropTypes.func,
  toggleSpinner: PropTypes.func,
  mealReducer: PropTypes.instanceOf(Array),
  categoryReducer: PropTypes.instanceOf(Array),
  spinnerReducer: PropTypes.bool,
  filterReducer: PropTypes.string,
};

MealList.defaultProps = {
  addMeals: () => null,
  addCategories: () => null,
  toggleSpinner: () => null,
  mealReducer: [],
  categoryReducer: [],
  spinnerReducer: true,
  filterReducer: 'All Categories',
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
