import React from 'react';
import { shallow } from 'enzyme';
import CategoryFilter from '../../components/CategoryFilter';
import findByTestClassName from '../helper/index';

const setup = () => {
  const component = shallow(<CategoryFilter />);
  return component;
};

describe('CategoryFilter Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestClassName(component, '.mealListContainer');
    expect(wrapper.length).toBe(1);
  });
});
