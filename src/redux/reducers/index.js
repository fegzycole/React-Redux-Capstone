import { combineReducers } from 'redux';
import beerReducer from './beer';
import categoryReducer from './categories';

export default combineReducers(beerReducer, categoryReducer);
