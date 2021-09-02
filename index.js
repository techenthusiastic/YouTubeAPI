const express = require("express");
const createErr = require("http-errors");
require("dotenv").config();
const app = express();
//
const morgan = require("morgan");
app.use(morgan("dev"));
//
const cors = require("cors");
app.use(cors({ origin: true, credentials: true }));
//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//
app.use(express.static(__dirname + "/public"));
//
app.use(require("./src/routeSetup"));
//
app.get("/", () => {
	res.writeHead(200, { "content-type": "text/html" });
	fs.createReadStream("./public/index.html").pipe(res);
});
// Error out if no Router Exists
app.use(async (req, res, next) => {
	next(createErr.NotFound());
});
// Error Handeler Middleware
app.use((err, req, res, next) => {
	let showErr = err.message;
	if (showErr === "invalid csrf token")
		showErr =
			"Security Token mis-match.<br>Refresh/Reload this Page to create a Secure Channel.";
	else if (err.name === "MongoError") {
		showErr =
			"Something went wrong.<br>You request couldn't be fulfilled at the moment.<br>Please retry after sometime.";
		storeErr(req, err);
	}
	res
		.status(err.status || 500)
		.send({ error: { status: err.status || 500, message: showErr } });
});
//
const http = require("http");
const httpServer = http.Server(app);
//
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, function () {
	console.log(`Server Running on Port ${PORT}`);
});
