import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { Provider } from 'react-redux';
import { setDifficulty } from './actions';
import { getSudoku } from './actions';
import store from './store';


ReactDOM.render(
<Provider store={store} >
  <App />
</Provider>,
document.getElementById('root'));

// TESTY
store.dispatch(setDifficulty('hard'));
store.dispatch(getSudoku());
