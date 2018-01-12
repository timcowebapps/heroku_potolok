'use strict';

import * as path from 'path';
import * as express from 'express';
import * as webpack from 'webpack';

var compression = require("compression");
var vash = require('vash');

export class Server {
	public app: express.Application;

	/**
	 * Создание сервера приложения.
	 *
	 * @class Server
	 * @method bootstrap
	 * @static
	 * @return {Server} Возвращает новый экземпляр класса.
	 */
	public static bootstrap(): Server {
		return new Server();
	}

	/**
	 * Конструктор класса.
	 * 
	 * @class Server
	 * @constructor
	 */
	constructor() {
		this.app = express();

		this._config();
	}

	/**
	 * Устанавливает конфигурацию приложения.
	 * 
	 * @class Server
	 * @method _config
	 * @private
	 */
	private _config(): void {
		this.app.use(compression());

		/* Добавляем статические пути. */
		this.app.use(express.static(path.resolve(process.cwd(), "dist", "server")));
		this.app.use(express.static(path.resolve(process.cwd(), "dist", "client")));
		
		this.app.use('/assets', express.static(path.resolve(process.cwd(), "assets")));
		this.app.use('/assets/icons', express.static(path.resolve(process.cwd(), "assets", "icons")));
		this.app.use('/assets/images', express.static(path.resolve(process.cwd(), "assets", "images")));

		/* Устанавливаем шаблонизатор для представления. */
		this.app.set('view engine', 'cshtml');
		this.app.set('views', path.resolve(process.cwd(), "assets"));
		this.app.engine('cshtml', vash.renderFile);
	}
};