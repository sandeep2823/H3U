var winston = require('winston');


winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {timeStamp: true});
winston.add(winston.transports.File, { filename: 'winston-basic.log' });
module.exports = winston;

