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

const colorizer = format.colorize()

const consoleLogFormat = format.printf(({ level, message, timestamp, meta = {} }) => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return (
        colorizer.colorize(level, `${level.toUpperCase()} [${timestamp}]`) +
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        ` ${message}\nMETA: ${util.inspect(meta, { depth: null })}\n`
    )
})

const logger = createLogger({
    level: 'info',
    format: format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), format.json()),
    defaultMeta: { service: 'auth-service' },
    transports: [
        new transports.Console({
            format: format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), format.colorize(), consoleLogFormat)
        }),
        new transports.File({ filename: '/var/log/auth-service.log' })
    ]
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
createLogger.addColors(logColors)

export default logger
