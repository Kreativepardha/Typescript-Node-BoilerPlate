import { createLogger, format, transports } from "winston";
import { ConsoleTransportInstance } from "winston/lib/winston/transports";
import util from 'util'

const consoleLogFormat = format.printf((info) => {
    const { level, message, timestamp, meta = {} } = info
    
    const customLevel = level.toUpperCase()

    const customTimeStamp = timestamp

    const customMessage = message

    const customMeta = util.inspect(meta, {
        showHidden: false,
        depth: null
    })
    
    const customLog = `${customLevel} [${customTimeStamp}] ${customMessage}\n ${'META'} ${customMeta}\n `
})

const consoleTransport = (): Array<ConsoleTransportInstance> => {
    return [
        new transports.Console({
            level: 'info',
            format: format.combine(format.timestamp(), consoleLogFormat)
        })
    ]
}


export default createLogger({
    defaultMeta: {
        meta: {}
    },
    transports: [...consoleTransport()]
})