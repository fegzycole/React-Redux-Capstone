import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import BeerList from '../containers/BeerList';
import Beer from '../containers/Beer';
import '../scss/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={BeerList} />
        <Route exact path="/:id" component={Beer} />
      </Switch>
    </div>
  );
}

export default App;
