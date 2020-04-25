const actions = {
  ADD_BEERS: 'ADD_BEERS',
  ADD_CATEGORIES: 'ADD_CATEGORIES',
};

const addBeers = beers => ({
  type: actions.ADD_BEERS,
  payload: beers,
});

const addCategories = categories => ({
  type: actions.ADD_CATEGORIES,
  payload: categories,
});

export default { actions, addBeers, addCategories };
