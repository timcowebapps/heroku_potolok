'use strict';

import * as path from 'path';
import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath, Router, Route } from 'react-router';
import { StaticRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { configureStore } from '../shared/configureStore';
import { Server } from './server';
import { Root } from './root';

export default function () {
	const app = Server.bootstrap().app;

	app.get('*', (request: express.Request, response: express.Response) => {
		const memoryHistory = createMemoryHistory();
		const store = configureStore(memoryHistory, {});
		const markup = renderToString(Root({ request: request, store: store, context: {} }));
		const finalState = store.getState();

		response.status(200).render('index.cshtml', {
			componentHTML: '<div>' + markup + '</div>',
			path: (process.env.NODE_ENV === "production") ? "" : "http://localhost:8081"
		});
	});

	app.get('*.js', (req, res, next) => {
		req.url = req.url + '.gz';
		res.set('Content-Encoding', 'gzip');
		next();
	});

	return app;
}