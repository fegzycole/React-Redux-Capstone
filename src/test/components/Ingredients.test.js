import React from 'react';
import { shallow } from 'enzyme';
import Ingredients from '../../components/Ingredients';
import { findByTestAttribute } from '../helper/index';

const setup = (props = {}) => {
  const component = shallow(
    <Ingredients ingredients={props.ingredients} />,
  );
  return component;
};

describe('CategoryFilter Component', () => {
  let component;

  const props = {
    ingredients: ['First', 'Second', 'Third'],
  };

  beforeEach(() => {
    component = setup(props);
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.ingredients');
    expect(wrapper.length).toEqual(1);
  });
});
