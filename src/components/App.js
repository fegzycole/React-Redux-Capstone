import React from 'react';
import Header from './Header';
import BeerList from '../containers/BeerList';
import '../scss/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <BeerList />
    </div>
  );
}

export default App;
