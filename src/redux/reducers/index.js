import { combineReducers } from 'redux';
import beerReducer from './beer';
import categoryReducer from './categories';
import spinnerReducer from './spinner';

export default combineReducers({
  beerReducer,
  categoryReducer,
  spinnerReducer,
});
