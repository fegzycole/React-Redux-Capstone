import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import MealList from '../containers/MealList';
import Meal from '../containers/Meal';
import '../scss/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MealList} />
        <Route exact path="/:id" component={Meal} />
      </Switch>
    </div>
  );
}

export default App;
