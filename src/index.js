import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Fire from './Fire'


import reportWebVitals from './reportWebVitals';
import './assets/css/bootstrap.min.css';
import './assets/css/hover-min.css';
import './assets/css/hover.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Fire /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
