'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { configureStore } from '../shared/configureStore';
import { Root } from './root';

const browserHistory = createBrowserHistory();

const initialState = (window as any).__INITIAL_STATE__;
delete (window as any).__INITIAL_STATE__;

ReactDOM.render(<Root store={configureStore(browserHistory, initialState)} routerHistory={browserHistory} />, document.getElementById('react-view'));