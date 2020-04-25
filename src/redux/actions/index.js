const actions = {
  ADD_BEERS: 'ADD_BEERS',
  ADD_CATEGORIES: 'ADD_CATEGORIES',
  TOGGLE_SPINNER: 'TOGGLE_SPINNER',
};

const addBeers = beers => ({
  type: actions.ADD_BEERS,
  payload: beers,
});

const addCategories = categories => ({
  type: actions.ADD_CATEGORIES,
  payload: categories,
});

const toggleSpinner = () => ({
  type: actions.TOGGLE_SPINNER,
});

export default {
  actions, addBeers, addCategories, toggleSpinner,
};
