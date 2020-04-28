import reduxActions from '../actions/index';

const { actions: { ADD_MEALS } } = reduxActions;

const mealReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_MEALS:
      return payload;
    default:
      return state;
  }
};

export default mealReducer;
