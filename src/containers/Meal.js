import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router';
import NotFound from '../components/404';


const Beer = ({ mealReducer, match, history }) => {
  const { params: { id } } = match;

  const showMealsPage = () => history.push('/');

  const sampleMeal = mealReducer.find(beer => beer.idMeal === id);

  const showBeer = sampleMeal ? (
    <div className="sample-beer">
      <div className="Beer-description">
        <div className="img-container">
          <img src={sampleMeal.strMealThumb} alt={sampleMeal.strMeal} />
        </div>
        <div className="beer-content">
          <h4>{sampleMeal.strMeal}</h4>

          <ReactPlayer url={sampleMeal.strYoutube} />
        </div>
      </div>
    </div>
  ) : (
    <NotFound showMealsPage={showMealsPage} />
  );

  return showBeer;
};

Beer.propTypes = {
  meal: PropTypes.instanceOf(Object).isRequired,
  mealReducer: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({
  mealReducer,
}) => ({
  mealReducer,
});

export default withRouter(connect(mapStateToProps)(Beer));
