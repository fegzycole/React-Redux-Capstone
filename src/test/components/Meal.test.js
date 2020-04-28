import React from 'react';
import { shallow } from 'enzyme';
import Meal from '../../components/Meal';
import { findByTestAttribute } from '../helper/index';

const meal = {
  strMeal: 'Apple Frangipan Tart',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
};

const setup = (props = {}) => {
  const component = shallow(<Meal.WrappedComponent meal={props.meal} history={props.history} />);
  return component;
};

describe('Meal Component', () => {
  let component;

  beforeEach(() => {
    const props = {
      meal,
      history: {},
    };

    component = setup(props);
  });

  it('should render without errors', () => {
    const element = findByTestAttribute(component, '.meal');
    expect(element.length).toEqual(1);
    expect(component.find('img').props().src).toEqual(meal.strMealThumb);
    expect(component.find('h4').text()).toEqual(meal.strMeal);
  });
});
