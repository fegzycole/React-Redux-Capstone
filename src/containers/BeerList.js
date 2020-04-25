import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from '../axios/index';
import reduxActions from '../redux/actions/index';
import Beer from '../components/Beer';
import Spinner from '../components/Spinner';

const { addBeers, addCategories, toggleSpinner } = reduxActions;

const BeerList = ({
  addBeers, addCategories, beerReducer, categoryReducer, toggleSpinner, spinnerReducer,
}) => {
  const getBeers = async () => {
    try {
      const { data: { data } } = await axios.get('/beers');

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        toggleSpinner();

        const beers = await getBeers();
        const { data: { data: { data } } } = await axios.get('/categories');

        addCategories(data);

        addBeers(beers);

        toggleSpinner();
      } catch (error) {
        throw new Error(error.message);
      }
    };

    initialize();
  }, []);

  const showBeers = !spinnerReducer ? (
    <div className="Beer-list-container">
      <select>
        <option>All Categories</option>
        {categoryReducer.map(({ name }) => (
          <option key={name}>{name}</option>
        ))}
      </select>

      <div className="Beer-list">
        {beerReducer.map(beer => <Beer key={beer.id} beer={beer} />)}
      </div>
    </div>
  ) : <Spinner />;

  return showBeers;
};

BeerList.propTypes = {
  addBeers: PropTypes.func,
  addCategories: PropTypes.func,
  toggleSpinner: PropTypes.func,
  beerReducer: PropTypes.instanceOf(Array),
  categoryReducer: PropTypes.instanceOf(Array),
  spinnerReducer: PropTypes.bool.isRequired,
};

BeerList.defaultProps = {
  addBeers: () => null,
  addCategories: () => null,
  toggleSpinner: () => null,
  beerReducer: [],
  categoryReducer: [],
};

const mapDispatchToProps = dispatch => ({
  addBeers: beers => dispatch(addBeers(beers)),
  addCategories: categories => dispatch(addCategories(categories)),
  toggleSpinner: () => dispatch(toggleSpinner()),
});

const mapStateToProps = ({
  beerReducer,
  categoryReducer,
  spinnerReducer,
}) => ({
  beerReducer,
  categoryReducer,
  spinnerReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
