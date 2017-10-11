import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

let middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
	const createLogger = require('redux-logger').default;
	middleware.push(createLogger);
}

export default createStore(reducers, applyMiddleware(...middleware));
