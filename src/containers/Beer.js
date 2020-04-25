import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BeerBrand from '../assets/beer.png';

const Beer = ({ beerReducer, match }) => {
  const { params: { id } } = match;

  let imageUrl;

  const sampleBeer = beerReducer.find(beer => beer.id === id);

  if (sampleBeer) {
    imageUrl = Object.prototype.hasOwnProperty.call(sampleBeer, 'labels')
      ? sampleBeer.labels.large
      : BeerBrand;
  }

  const showBeer = sampleBeer ? (
    <div className="Beer-description">
      <div className="img-container">
        <img src={imageUrl} alt={sampleBeer} />
      </div>
      <div className="beer-content">
        <h4>{sampleBeer.name}</h4>
        <p>
          {Object.prototype.hasOwnProperty.call(sampleBeer, 'description')
            ? sampleBeer.description
            : 'Unfortunately, we do not have information about this beer'}
        </p>
      </div>
    </div>
  ) : (
    <div className="not-found">
      <h2>404</h2>
      <p>Beer Not Found</p>
    </div>
  );

  return showBeer;
};

Beer.propTypes = {
  beer: PropTypes.instanceOf(Object).isRequired,
  beerReducer: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({
  beerReducer,
}) => ({
  beerReducer,
});

export default connect(mapStateToProps)(Beer);
