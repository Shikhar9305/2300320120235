# Logging Middleware

Reusable logging package for AffordMed Campus Hiring Assessment.

## Usage

```javascript
const Log = require("./logger");

await Log(
    "frontend",
    "info",
    "component",
    "Notification card rendered"
);