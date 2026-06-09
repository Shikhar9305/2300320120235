const Log = require("../logging-middleware/logger");

const weightMap = {
    Placement: 3,
    Result: 2,
    Event: 1
};

function calculatePriority(notification) {
    const typeWeight = weightMap[notification.type] || 0;

    const timeValue =
        new Date(notification.timestamp).getTime();

    return (typeWeight * 1000000) + timeValue;
}

async function getTopNotifications(data, limit = 10) {

    await Log(
        "backend",
        "info",
        "service",
        "Priority calculation started"
    );

    const ranked = data
        .map(item => ({
            ...item,
            priority: calculatePriority(item)
        }))
        .sort((a, b) => b.priority - a.priority)
        .slice(0, limit);

    await Log(
        "backend",
        "info",
        "service",
        `Top ${limit} notifications generated`
    );

    return ranked;
}

module.exports = getTopNotifications;