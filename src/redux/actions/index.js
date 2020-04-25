const actions = {
  ADD_BEERS: 'ADD_BEERS',
};

const addBeers = book => ({
  type: actions.ADD_BEERS,
  payload: book,
});

export default { actions, addBeers };
