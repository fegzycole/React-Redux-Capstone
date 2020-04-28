import actionTypes from '../../../redux/actions/index';
import mealReducer from '../../../redux/reducers/meal';
import { meals } from '../../helper/index';

const { addMeals } = actionTypes;

describe('Category Reducer', () => {
  it('should return default state', () => {
    const newState = mealReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return new state if it receives a valid type', () => {
    const action = addMeals(meals);
    const newState = mealReducer(undefined, action);
    expect(newState).toEqual(meals);
  });
});
