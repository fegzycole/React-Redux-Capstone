import React from 'react';
import { shallow } from 'enzyme';
import Meal from '../../components/Meal';
import findByTestClassName from '../helper/index';

const meal = {
  strMeal: 'Apple Frangipan Tart',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
};

const setup = (props = {}) => {
  const component = shallow(<Meal.WrappedComponent meal={props.meal} />);
  return component;
};

describe('Meal Component', () => {
  let component;

  beforeEach(() => {
    const props = {
      meal,
    };

    component = setup(props);
  });

  it('should render without errors', () => {
    const element = findByTestClassName(component, '.meal');
    expect(element.length).toBe(1);
    expect(component.find('img').props().src).toBe(meal.strMealThumb);
    expect(component.find('h4').text()).toBe(meal.strMeal);
  });
});
