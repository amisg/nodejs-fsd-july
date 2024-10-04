const http = require("node:http");

const server = http.createServer((req, res) => {
	console.log("server is up and running and we can get response");

	// console.log(req, "request");

	const url = req.url;
	const method = req.method;

	if (url === "/") {
		if (method === "GET") {
			res.end("welcome to home page");
		} else {
			res.end("Bad Request");
		}
	} else if (url === "/fitness") {
		res.end("hi");
	} else if (url === "/about") {
		res.write("contact: 9606164956");
		res.write("\nname: Amith");
		res.write("\nemail: aamithsg18@gmail.com");
		res.end("\nfeel free to connect");
	} else {
		res.end("nothing here");
	}

	console.log(url);

	res.write("hi");
	res.write("\nheloo");
	res.end("\nhello there");
});

server.listen(8080, () => {
	console.log("server is running", 8080);
});
