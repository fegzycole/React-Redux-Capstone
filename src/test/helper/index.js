export const findByTestAttribute = (component, attribute) => {
  const wrapper = component.find(attribute);
  return wrapper;
};

export const meals = [
  {
    name: 'Mac and Cheese',
    id: 22,
  },
  {
    name: 'Celery',
    id: 1,
  },
];

export const categories = ['First', 'Second', 'Third'];
