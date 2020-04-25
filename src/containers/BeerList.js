import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from '../axios/index';
import reduxActions from '../redux/actions/index';
import Beer from '../components/Beer';

const { addBeers, addCategories } = reduxActions;

const BeerList = ({
  addBeers, addCategories, beerReducer, categoryReducer,
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
        const beers = await getBeers();
        const { data: { data: { data } } } = await axios.get('/categories');

        addCategories(data);

        addBeers(beers);
      } catch (error) {
        throw new Error(error.message);
      }
    };

    initialize();
  }, []);

  return (
    <div className="Beer-list-container">
      <select>
        {['All Categories', ...categoryReducer].map(({ name }) => (
          <option key={name}>{name}</option>
        ))}
      </select>

      <div className="Beer-list">
        {beerReducer.map(beer => <Beer key={beer.id} beer={beer} />)}
      </div>
    </div>
  );
};

BeerList.propTypes = {
  addBeers: PropTypes.func,
  addCategories: PropTypes.func,
  beerReducer: PropTypes.instanceOf(Array),
  categoryReducer: PropTypes.instanceOf(Array),
};

BeerList.defaultProps = {
  addBeers: () => null,
  addCategories: () => null,
  beerReducer: [],
  categoryReducer: [],
};

const mapDispatchToProps = dispatch => ({
  addBeers: beers => dispatch(addBeers(beers)),
  addCategories: categories => dispatch(addCategories(categories)),
});

const mapStateToProps = ({
  beerReducer,
  categoryReducer,
}) => ({
  beerReducer,
  categoryReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
