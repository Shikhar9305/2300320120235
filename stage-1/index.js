const notifications = require("./notifications");
const getTopNotifications = require("./priorityEngine");

async function start() {

    const topNotifications =
        await getTopNotifications(
            notifications,
            10
        );

    console.table(
        topNotifications.map(item => ({
            Type: item.type,
            Message: item.message,
            Time: item.timestamp
        }))
    );
}

start();