const STACK_TYPES = {
    FRONTEND: "frontend",
    BACKEND: "backend"
};

const LOG_LEVELS = {
    DEBUG: "debug",
    INFO: "info",
    WARN: "warn",
    ERROR: "error",
    FATAL: "fatal"
};

const PACKAGE_NAMES = {
    API: "api",
    COMPONENT: "component",
    HOOK: "hook",
    PAGE: "page",
    STATE: "state",
    STYLE: "style",

    AUTH: "auth",
    CONFIG: "config",
    MIDDLEWARE: "middleware",
    UTILS: "utils",

    CACHE: "cache",
    CONTROLLER: "controller",
    CRON_JOB: "cron_job",
    DB: "db",
    DOMAIN: "domain",
    HANDLER: "handler",
    REPOSITORY: "repository",
    ROUTE: "route",
    SERVICE: "service"
};

module.exports = {
    STACK_TYPES,
    LOG_LEVELS,
    PACKAGE_NAMES
};