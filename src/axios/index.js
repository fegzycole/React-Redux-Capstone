import axios from 'axios';

const { REACT_APP_MEAL_URL, REACT_APP_CATEGORY_URL } = process.env;

const mealQuery = axios.create({
  baseURL: REACT_APP_MEAL_URL,
});

const categoryQuery = axios.create({
  baseURL: REACT_APP_CATEGORY_URL,
});

export default { mealQuery, categoryQuery };
