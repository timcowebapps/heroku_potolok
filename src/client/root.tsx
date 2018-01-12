'use strict';

import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch } from 'react-router-dom';
import { Router, Route } from 'react-router';
import { Routes } from '../shared/routes';
import { RoutePolicy } from '../shared/routePolicy';

export const Root = ({ store, routerHistory }: { store: any, routerHistory: any }) => (
	<Provider store={store} key={Math.random()}>
		<ConnectedRouter history={routerHistory} key={Math.random()}>
			<Switch>
				{Routes.map((route) => <RoutePolicy component={route.component} {...route} key={route.key} />)}
			</Switch>
		</ConnectedRouter>
	</Provider>
);