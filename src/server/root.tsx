'use strict';

import * as React from 'react';
import { Router, Route } from 'react-router';
import { StaticRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Routes } from '../shared/routes';
import { RoutePolicy } from '../shared/routePolicy';

export const Root = ({ request, store, context }: { request: any, store: any, context: any }) => (
	<Provider store={store} key={Math.random()}>
		<StaticRouter location={request.url} context={context} key={Math.random()}>
			<Switch>
				{Routes.map((route) => <RoutePolicy component={route.component} {...route} key={route.key} />)}
			</Switch>
		</StaticRouter>
	</Provider>
);