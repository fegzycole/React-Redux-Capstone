import axios from '../axios/index';

const { mealQuery, categoryQuery } = axios;

export const showMealsPage = props => props.history.push('/');

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

export const initialize = async props => {
  const {
    mealReducer, addCategories, addMeals, toggleSpinner, spinnerReducer,
  } = props;
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
