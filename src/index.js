import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto'

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();
