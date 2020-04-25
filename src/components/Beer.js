import React from 'react';
import PropTypes from 'prop-types';
import BeerBrand from '../assets/beer.png';

const Beer = ({ beer }) => {
  const { description, name } = beer;

  const style = {
    background: `url(${
      Object.prototype.hasOwnProperty.call(beer, 'labels') ? beer.labels.small : BeerBrand
    })`,
  };

  return (
    <div className="Beer" style={style}>
      <div className="beer-group">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

Beer.propTypes = {
  beer: PropTypes.instanceOf(Object).isRequired,
};

export default Beer;
