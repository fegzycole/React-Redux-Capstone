const findByTestClassName = (component, className) => {
  const wrapper = component.find(className);
  return wrapper;
};

export default findByTestClassName;
