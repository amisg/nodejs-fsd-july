const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("my_event", (data) => {
	console.log("data received successfully.", data);
});

emitter.emit("my_event", 99);
