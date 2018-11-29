import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/App';
// import store from './store';

render(
  <Provider >
    <App />
  </Provider>,
  document.getElementById('root')
);
