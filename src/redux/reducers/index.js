import { combineReducers } from 'redux';
import mealReducer from './meal';
import categoryReducer from './categories';
import spinnerReducer from './spinner';
import filterReducer from './filter';

export default combineReducers({
  mealReducer,
  categoryReducer,
  spinnerReducer,
  filterReducer,
});
