'use strict';

import { combineReducers, Reducer } from 'redux';
import { RouterState, routerReducer as routing } from 'react-router-redux';
import counter from './counter';

export interface RootState {
}

const Reducers: Reducer<RootState> = combineReducers<RootState>({
	counter
});

export default Reducers;