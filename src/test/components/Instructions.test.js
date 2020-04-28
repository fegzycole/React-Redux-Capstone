import React from 'react';
import { shallow } from 'enzyme';
import Instructions from '../../components/Instructions';
import { findByTestAttribute } from '../helper/index';

const setup = (props = {}) => {
  const component = shallow(
    <Instructions instructions={props.instructions} />,
  );
  return component;
};

describe('CategoryFilter Component', () => {
  let component;

  const props = {
    instructions: 'This is a sample instruction',
  };

  beforeEach(() => {
    component = setup(props);
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.instructions');
    expect(wrapper.length).toEqual(1);
  });
});
