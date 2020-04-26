const actions = {
  ADD_MEALS: 'ADD_MEALS',
  ADD_CATEGORIES: 'ADD_CATEGORIES',
  TOGGLE_SPINNER: 'TOGGLE_SPINNER',
  CHANGE_FILTER: 'CHANGE_FILTER',
};

const addMeals = meals => ({
  type: actions.ADD_MEALS,
  payload: meals,
});

const addCategories = categories => ({
  type: actions.ADD_CATEGORIES,
  payload: categories,
});

const toggleSpinner = () => ({
  type: actions.TOGGLE_SPINNER,
});

const changeFilter = filter => ({
  type: actions.CHANGE_FILTER,
  payload: filter,
});

export default {
  actions, addMeals, addCategories, toggleSpinner, changeFilter,
};
