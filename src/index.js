import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';

// Create debugger
const logger = createLogger();

// Combine all reducers into 1 file
const rootReducer = combineReducers({ searchRobots, requestRobots});

// Create a store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger))

ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>, document.getElementById('root'));
registerServiceWorker();
