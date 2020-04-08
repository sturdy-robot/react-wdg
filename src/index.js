import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import './index.css';
//import App from './App';
import Drawer from './Drawer'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Drawer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();