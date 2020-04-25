import React from 'react';
import PropTypes from 'prop-types';
import BeerBrand from '../assets/beer.png';

const Beer = ({ beer }) => {
  const { name } = beer;

  const imageUrl = Object.prototype.hasOwnProperty.call(beer, 'labels')
    ? beer.labels.large
    : BeerBrand;

  return (
    <div className="Beer">
      <div className="img-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="beer-content">
        <h4>{name}</h4>
      </div>
    </div>
  );
};

Beer.propTypes = {
  beer: PropTypes.instanceOf(Object).isRequired,
};

export default Beer;
