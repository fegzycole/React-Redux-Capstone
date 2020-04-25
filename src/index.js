import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './redux/store/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
