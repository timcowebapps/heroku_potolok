'use strict';

import * as React from 'react';
import { Route } from 'react-router';

export const RoutePolicy = ({ component: Component, ...props }: { component: any }) => {
	return (
		<Route {...props} render={matchProps =>
			(<Component {...matchProps} />)
		} />
	);
};