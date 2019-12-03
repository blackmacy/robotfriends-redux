import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import * as serviceWorker from './serviceWorker'; //will automatically know is javascript file even though there's no '.js'
import 'tachyons';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
				<Provider store={store}>
					<App />, 
				</Provider>,
				document.getElementById('root'));
// Use Provider to pass down the store in reducers, so that we don't have
// to pass down the component tree over and over again
serviceWorker.unregister();
