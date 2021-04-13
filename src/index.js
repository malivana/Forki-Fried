import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import ErrorBoundry from './components/error-boundry';
import App from './components/app';
import RestoService from './services/resto-service';
import RestoContext from './components/resto-service-context';
import store from './store';

import './index.scss';

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoContext.Provider value={restoService}>
                <Router>
                    <App/>
                </Router>
            </RestoContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root')
);
// Provider - Redux store
// RestoContext.Provider - API for Restoran 

