import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import findByTestClassName from '../helper/index';

const setup = () => {
  const component = shallow(<Header.WrappedComponent />);
  return component;
};

describe('Header Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestClassName(component, '.header');
    expect(wrapper.length).toBe(1);
  });

  it('should render a logo', () => {
    const logo = findByTestClassName(component, '.icon');
    expect(logo.length).toBe(1);
  });
});
