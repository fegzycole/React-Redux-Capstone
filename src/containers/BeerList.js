import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from '../axios/index';
import reduxActions from '../redux/actions/index';

const { addBeers, addCategories } = reduxActions;

const { REACT_APP_API_KEY } = process.env;

const BeerList = ({
  addBeers, addCategories, beers, categories,
}) => {
  const getBeers = async () => {
    try {
      let beers = await axios().get(`/beers?key=${REACT_APP_API_KEY}`);

      const randomNumber = Math.floor(Math.random() * 200);

      beers = beers.slice(randomNumber, randomNumber + 49);

      return beers;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(async () => {
    const beers = await getBeers();
    const categories = await axios.get(`/categories?key=${REACT_APP_API_KEY}`);
    addCategories(categories);
    addBeers(beers);
  }, []);

  return (
    <div />
  );
};

BeerList.propTypes = {
  addBeers: PropTypes.func,
  addCategories: PropTypes.func,
  beers: PropTypes.instanceOf(Array).isRequired,
  categories: PropTypes.instanceOf(Array).isRequired,
};

BeerList.defaultProps = {
  addBeers: () => null,
  addCategories: () => null,
};

const mapDispatchToProps = dispatch => ({
  addBeers: beers => dispatch(addBeers(beers)),
  addCategories: categories => dispatch(addCategories(categories)),
});

const mapStateToProps = ({ beerReducer: { beers }, categoryReducer: { categories } }) => ({
  beers,
  categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
