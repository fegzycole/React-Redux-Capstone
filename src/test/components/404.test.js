import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import configureStore from 'redux-mock-store';

import NotFound from '../../components/404';

describe('<NotFound />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<NotFound />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
