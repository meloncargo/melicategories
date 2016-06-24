import React from 'react';
import { render } from 'react-dom';
//import { Provider } from 'react-redux';
//import configureStore from './stores';
import App from './components/Main';

//const store = configureStore();

render(
    <App />,
  document.getElementById('app')
);
