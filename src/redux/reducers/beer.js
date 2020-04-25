import reduxActions from '../actions/index';

const { actions: { ADD_BEERS } } = reduxActions;


const beerReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_BEERS:
      return payload;
    default:
      return state;
  }
};

export default beerReducer;
