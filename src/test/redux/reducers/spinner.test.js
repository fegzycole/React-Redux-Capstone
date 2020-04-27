import actionTypes from '../../../redux/actions/index';
import spinnerReducer from '../../../redux/reducers/spinner';

const { toggleSpinner } = actionTypes;

describe('Category Reducer', () => {
  it('should return default state', () => {
    const newState = spinnerReducer(undefined, {});
    expect(newState).toEqual(true);
  });

  it('should return new state if it receives a valid type', () => {
    const action = toggleSpinner();
    const newState = spinnerReducer(undefined, action);
    expect(newState).toEqual(false);
  });
});
