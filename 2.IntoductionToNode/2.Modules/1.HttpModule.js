const http = require("node:http");

const server = http.createServer((req, res) => {
	console.log("server is up and running");
	res.end("hello world");
});

server.listen(8080, () => {
	console.log("server is listing fine ", 8080);
});
