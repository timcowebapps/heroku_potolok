'use strict';

import * as React from 'react';

export default class Home extends React.Component<any, any> {
	/**
	 * Конструктор класса.
	 * 
	 * @class Home
	 * @constructor
	 * @param {any} props Свойства компонента.
	 */
	public constructor(props?: any) {
		super(props);
	}

	public componentDidMount() {
		document.title = "Home Page";
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class Home
	 * @method render
	 */
	public render(): JSX.Element {
		return (
			<div>
				<h2>Home</h2>
				<h3>Hello world</h3>
			</div>
		);
	}
};