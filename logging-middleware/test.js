const Log = require("./logger");

async function run() {
    const result = await Log(
        "frontend",
        "info",
        "component",
        "Logger middleware is working"
    );

    console.log(result);
}

run();