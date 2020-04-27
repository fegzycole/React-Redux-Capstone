import actionTypes from '../../../redux/actions/index';
import filterReducer from '../../../redux/reducers/filter';

const { changeFilter } = actionTypes;

describe('Category Reducer', () => {
  it('should return default state', () => {
    const newState = filterReducer(undefined, {});
    expect(newState).toEqual('All Categories');
  });

  it('should return new state if it receives a valid type', () => {
    const filter = 'Croissant';
    const action = changeFilter(filter);
    const newState = filterReducer(undefined, action);
    expect(newState).toEqual(filter);
  });
});
