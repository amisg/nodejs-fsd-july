const fsPromise = require("node:fs").promises;

// fsPromise
// 	.readFile("./fileSystem/filess.txt")
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

async function readFile() {
	try {
		const data = await fsPromise.readFile("./fileSystem/filess.txt");
		console.log(data.toString());
	} catch (error) {
		console.log(error);
	}
}

readFile();
