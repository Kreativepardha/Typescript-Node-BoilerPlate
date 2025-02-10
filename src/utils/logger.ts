import { createLogger, format, transports } from 'winston'
import util from 'util'

// Define color styles for different log levels
const logColors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'blue'
}

// Apply colors
const colorizer = format.colorize()

// Custom console log format with colors
const consoleLogFormat = format.printf(({ level, message, timestamp, meta = {} }) => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return (
        colorizer.colorize(level, `${level.toUpperCase()} [${timestamp}]`) +
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        ` ${message}\nMETA: ${util.inspect(meta, { depth: null })}\n`
    )
})

// Create Winston logger
const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.json() // JSON format for structured logging
    ),
    defaultMeta: { service: 'auth-service' }, // Add default metadata
    transports: [
        // Console logging with colors
        new transports.Console({
            format: format.combine(
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.colorize(), // Apply colors
                consoleLogFormat
            )
        }),
        // File logging (no colors, JSON format)
        new transports.File({ filename: '/var/log/auth-service.log' })
    ]
})

// Enable custom colors
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
createLogger.addColors(logColors)

export default logger
