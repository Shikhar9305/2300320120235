const axios = require("axios");

const loggerSettings = require("./config");

async function Log(stack, level, packageName, message) {
    try {
        const payload = {
            stack,
            level,
            package: packageName,
            message
        };

        const response = await axios.post(
            loggerSettings.apiUrl,
            payload,
            {
                headers: {
                    Authorization: `Bearer ${loggerSettings.accessToken}`,
                    "Content-Type": "application/json"
                }
            }
        );

        return response.data;
    } catch (err) {
        console.error("Logger Error:", err.message);

        return null;
    }
}

module.exports = Log;