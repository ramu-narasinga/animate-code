!videoTitle Winston Logger from n8n – Console & File Transports Explained

## !!steps

!duration 220

!title 1. What is Winston?

```ts ! winston/docs.ts
const winston = require("winston")
// !callout[/logger/] Winston is a versatile logging library for Node.js with support for multiple transports like console and file.
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [],
})
```

## !!steps

!duration 220

!title 2. Adding File Transports

```ts ! winston/docs.ts
// !callout[/logger/] Logs with 'error' level or higher go to `error.log`, and 'info' or higher go to `combined.log`.
logger.add(
  new winston.transports.File({
    filename: "error.log",
    level: "error",
  })
)

logger.add(
  new winston.transports.File({
    filename: "combined.log",
  })
)
```

## !!steps

!duration 220

!title 3. Adding Console Transport in Dev Mode

```ts ! winston/docs.ts
// !callout[/process/] Logs are printed to console with simple formatting when not in production.
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  )
}
```

## !!steps

!duration 220

!title 4. n8n: Creating Internal Logger

```ts ! n8n/logger.ts
// !callout[/internalLogger/] n8n creates a logger instance without transports initially, allowing dynamic config.
this.internalLogger = winston.createLogger({
  level: this.level,
  silent: isSilent,
})
```

## !!steps

!duration 220

!title 5. n8n: Console and File Transports

```ts ! n8n/logger.ts
// !callout[/internalLogger/] Adds console transport with environment-aware formatting.
this.internalLogger.add(
  new winston.transports.Console({
    format: winston.format.printf(({ message }) => message),
  })
)

// !callout[/internalLogger/] Adds file transport with timestamp and JSON formatting.
this.internalLogger.add(
  new winston.transports.File({
    filename: "logs/app.log",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.metadata(),
      winston.format.json()
    ),
  })
)
```

---

**title**: Winston Logger in n8n – Console & File Transport Breakdown
**description**: Ever wondered how logging works in production-grade apps like n8n? This video breaks down Winston—a flexible logger used in n8n—to explain how console and file transports are configured. Learn from real-world usage and apply these patterns in your Node.js apps.
**tags**: \[winston, logging, nodejs, n8n, transports, console, file, open source, code walkthrough]

```

```
