import { shallow } from 'enzyme';
import React from 'react';
import MealList from '../../containers/MealList';
import Meal from '../../components/Meal';
import Spinner from '../../components/Spinner';
import { findByTestAttribute } from '../helper/index';

const setup = () => {
  const component = shallow(
    <MealList.WrappedComponent />,
  );
  return component;
};

describe('MealList component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    expect(component.contains(<Spinner />)).toEqual(true);

    setTimeout(() => {
      const wrapper = findByTestAttribute(component, '.mealListContainer');
      expect(wrapper.length).toBe(1);
      expect(wrapper.find(Meal)).toBeGreaterThan(1);
    }, 5000);
  });
});
