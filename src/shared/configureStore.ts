'use strict';

import * as React from 'react';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { default as rootReducer } from './reducers';

export function configureStore(history: any, initialState?: any) {
	const middlewares = [
		thunkMiddleware,
		routerMiddleware(history)
	];

	if ((typeof window !== 'undefined')) {
		middlewares.push(createLogger({
			level: 'info',
			collapsed: true
		}));
	}

	const store = compose(
		applyMiddleware(...middlewares)
	)(createStore)(rootReducer, initialState);

	return store;
}