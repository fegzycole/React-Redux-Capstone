import React from 'react';
import PropTypes from 'prop-types';
import meal from '../scss/meal.module.scss';


const Instructions = ({ instructions }) => (
  <div className={meal.instructions}>
    <h5>HOW TO PREPARE</h5>
    <ul>
      {instructions.split('\r\n').map(instruction => (
        <li key={`${instruction}-key`}>{instruction}</li>
      ))}
    </ul>
  </div>
);

Instructions.propTypes = {
  instructions: PropTypes.string.isRequired,
};

export default Instructions;
