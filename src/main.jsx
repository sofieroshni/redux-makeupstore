import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App.jsx';
// import './index.css';
import { Provider } from 'react-redux';
import store from '../src/app/store.jsx';
console.log(Error);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)