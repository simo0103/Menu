import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './style/css/main.css';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
),document.getElementById('root'));


serviceWorker.unregister();
