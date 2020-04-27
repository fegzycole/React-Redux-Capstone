import actionTypes from '../../../redux/actions/index';
import categoryReducer from '../../../redux/reducers/categories';

const { addCategories } = actionTypes;

describe('Category Reducer', () => {
  it('should return default state', () => {
    const newState = categoryReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return new state if it receives a valid type', () => {
    const categories = ['First', 'Second', 'Third'];
    const action = addCategories(categories);
    const newState = categoryReducer(undefined, action);
    expect(newState.length).toEqual(3);
  });
});
