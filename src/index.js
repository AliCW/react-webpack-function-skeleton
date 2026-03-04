import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router'
import App from './App.js';


window.addEventListener("DOMContentLoaded", function (e) {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
});