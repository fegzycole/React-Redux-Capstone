import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import BeerBrand from '../assets/beer.png';

const Beer = props => {
  const { beer } = props;

  const { name } = beer;

  const imageUrl = Object.prototype.hasOwnProperty.call(beer, 'labels')
    ? beer.labels.large
    : BeerBrand;

  const showBeerPage = ({ id }) => props.history.push(`/${id}`);

  return (
    <div
      className="Beer"
      onClick={() => showBeerPage(beer)}
      onKeyPress={() => showBeerPage(beer)}
      role="button"
      tabIndex="0"
    >
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
  history: PropTypes.func,
};

Beer.defaultProps = {
  history: () => null,
};

export default withRouter(Beer);
