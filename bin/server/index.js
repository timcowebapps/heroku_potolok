'use strict';

var serverBootstrap = require("../../dist/server/server.bundle.js");

const port = process.env.PORT || 7010;
var server = serverBootstrap.default();

server.listen(port, 'localhost', function (err) {
	if (err)
		return console.error(err);

	var host = this.address().address;
	console.log("Server launched at http://%s:%s", host, port);
});