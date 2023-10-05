var winston = require('winston');
require('winston-daily-rotate-file');

const transport = new winston.transports.DailyRotateFile({
  filename: 'access_%DATE%.log',
  datePattern: 'YYYY-MM',
  zippedArchive: true, 
  maxSize: '20m',//max size of the log file
  maxFiles: '60d'//no of days the file must be present
});

//creating the logger
const logger = winston.createLogger({
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  defaultMeta: { service: "pushLeads" },
  transports: [
    transport
  ]
});




module.exports = {logger};
