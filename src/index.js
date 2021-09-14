import React from 'react';
import ReactDOM from 'react-dom';
import { AppContextWrapper } from './AppContext.js';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContextWrapper>
      <App />
    </AppContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
