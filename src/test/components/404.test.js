import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/404';
import { findByTestAttribute } from '../helper/index';

const setup = (props = {}) => {
  const component = shallow(
    <NotFound showMealsPage={props.showMealsPage} />,
  );
  return component;
};

describe('CategoryFilter Component', () => {
  let component;

  const props = {
    showMealsPage: () => null,
  };

  beforeEach(() => {
    component = setup(props);
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.notFound');
    expect(wrapper.length).toBe(1);
  });
});
