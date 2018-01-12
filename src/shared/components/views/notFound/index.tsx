'use strict';

import * as React from 'react';

export default class NotFound extends React.Component<any, any> {
	/**
	 * Конструктор класса.
	 * 
	 * @class NotFound
	 * @constructor
	 * @param {any} props Свойства компонента.
	 */
	public constructor(props?: any) {
		super(props);
	}

	public componentDidMount() {
		document.title = "NotFound Page";
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class NotFound
	 * @method render
	 */
	public render(): JSX.Element {
		return (
			<div>
				<h2>404</h2>
				<h3>Page not found</h3>
			</div>
		);
	}
};