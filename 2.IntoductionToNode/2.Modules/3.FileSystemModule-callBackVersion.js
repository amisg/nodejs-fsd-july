const { error, log } = require("node:console");
const fs = require("node:fs");

// ----------- Async version crud operations ---------

// --------------- create file ------

// fs.appendFile("./fileSystem/file.txt", "i am the creating file", (error) => {
// 	if (error) {
// 		console.log(error, "its error");
// 	}
// });

// ----------- read file -----------

// fs.readFile("./fileSystem/file.txt", (error, data) => {
// 	if (error) {
// 		console.log("its an error", error);
// 	} else {
// 		console.log(data, "buffer data");
// 		console.log(data.toString(), "converted data from buffer");
// 	}
// });

// -------- update file -----------

// fs.appendFile(
// 	"./fileSystem/file.txt",
// 	"\n this is to update a file",
// 	(error) => {
// 		if (error) {
// 			console.log("error in updating", error);
// 		}
// 	}
// );

// ------ delete file -------

// fs.unlink("./fileSystem/file.txt", (error) => {
// 	if (error) {
// 		console.log("error", error);
// 	} else {
// 		console.log("file deleted");
// 	}
// });

// ------- rename file --------

// fs.rename("./fileSystem/files.txt", "./fileSystem/filess.txt", (error) => {
// 	if (error) {
// 		console.log("error", error);
// 	} else {
// 		console.log("rename successfull");
// 	}
// });

// -------------- Async ------

// console.log("a");

// fs.readFile("./fileSystem/filess.txt", (error, data) => {
// 	if (error) {
// 	} else {
// 		console.log(data.toString());
// 	}
// });
// console.log("b");

//Answer
// a
// b
// i am the creating file

// ------------- Synchronous ----------

// console.log("a");

// const bufferData = fs.readFileSync("./fileSystem/filess.txt");
// console.log(bufferData.toString());

// console.log("b");

//Answer
// a
// i am the creating file
// b
