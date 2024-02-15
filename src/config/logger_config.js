// https://www.npmjs.com/package/winston
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp, error }) => {
  return `${timestamp} : ${level} : ${message} : ${error}`;
});

const logger = createLogger({
  format: combine(
    // label({ label: 'right meow!' }),
    // timestamp(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    myFormat
  ),
    //Mention where should all the logs be stored or mentioned at in the transport array
    // new transports.Console () is used for logging to console
    // new transports.File(options) is used for logging to a file
  transports: [
    new transports.Console(),
    new transports.File ({filename: 'combined.log'})
]
});
module.exports=logger;