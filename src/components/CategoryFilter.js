import React from 'react';
import PropTypes from 'prop-types';
import mealList from '../scss/mealList.module.scss';

const CategoryFilter = ({ categories, changeFilter, filter }) => {
  const handleChange = e => {
    changeFilter(e.target.value);
  };

  return (
    <div className={mealList.mealListContainer}>
      <select onChange={handleChange} value={filter}>
        <option value="All Categories">All Categories</option>
        {categories.map(({ strCategory }) => (
          <option value={strCategory} key={`${strCategory}-option`}>
            {strCategory}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.instanceOf(Array),
  changeFilter: PropTypes.func,
  filter: PropTypes.string.isRequired,
};

CategoryFilter.defaultProps = {
  categories: [],
  changeFilter: () => null,
};

export default CategoryFilter;
