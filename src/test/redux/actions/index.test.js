import actions from '../../../redux/actions/index';
import { meals, categories } from '../../helper/index';

const {
  changeFilter, addMeals, addCategories, toggleSpinner,
} = actions;

describe('changeFilter', () => {
  it('should return an object containing a type and a payload containing the category', () => {
    const values = Object.values(changeFilter('CornBread'));

    expect(values).toEqual(['CHANGE_FILTER', 'CornBread']);
  });
});

describe('addMeals', () => {
  it('should return an object containing a type and a payload containing the new array of meals', () => {
    const values = Object.values(addMeals(meals));

    expect(values).toEqual(['ADD_MEALS', meals]);
  });
});

describe('addCategories', () => {
  it('should return an object containing a type and a payload containing the new array of categories', () => {
    const values = Object.values(addCategories(categories));

    expect(values).toEqual(['ADD_CATEGORIES', categories]);
  });
});

describe('toggleSpinner', () => {
  it('should return an object containing a valid type that toggles the spinner reducer', () => {
    const value = Object.values(toggleSpinner());

    expect(value).toEqual(['TOGGLE_SPINNER']);
  });
});
