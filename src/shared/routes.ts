'use strict';

import Home from './components/views/home/index';
import NotFound from './components/views/notFound/index';

export const Routes = [
	{
		key: 'home',
		exact: true,
		path: '/',
		component: Home
	}, {
		key: 'notFound',
		exact: false,
		path: '*',
		component: NotFound
	}
];