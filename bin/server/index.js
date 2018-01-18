'use strict';

var serverBootstrap = require("../../dist/server/server.bundle.js");

var server = serverBootstrap.default();
server.listen(process.env.PORT || 7010, function (err) {
	if (err)
		return console.error(err);

	console.log("Express server listening on port %d", this.address().port);
});