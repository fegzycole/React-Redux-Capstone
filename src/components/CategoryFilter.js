import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ categories, changeFilter, filter }) => {
  const handleChange = e => {
    changeFilter(e.target.value);
  };

  return (
    <div className="Beer-list-container">
      <select onChange={handleChange} value={filter}>
        <option value="All Categories">All Categories</option>
        {categories.map(({ strCategory }) => (
          <option key={strCategory} value={strCategory}>{strCategory}</option>
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
