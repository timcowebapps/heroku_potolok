'use strict';

export interface IReduxAction {
	/**
	 * Тип действия.
	 *
	 * @type {string}
	 * @memberof IReduxAction
	 */
	type: string;

	/**
	 * Дополнительные данные.
	 *
	 * @type {*}
	 * @memberof IReduxAction
	 */
	payload?: any;
}