import { createStore } from 'redux';
import beerReducer from '../reducers/beer';

const store = createStore(beerReducer);

export default store;
