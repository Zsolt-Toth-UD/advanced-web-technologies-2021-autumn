const winston = require('winston');
const quadratic = require('./src/quadratic');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
    new winston.transports.Console()
  ]
});

// console.log('Hello World!');
setTimeout(() => {
  logger.info('Hello World!');
}, 5000);
// logger.info('Hello World!');
logger.error('Fatal');

logger.info(`Solution: ${quadratic.solve(1, 4, 4)}`);
logger.info(`Solution: ${quadratic.solve(1, 4, -4)}`);

// quadratic.solve_promise(1,4,4)
//     .then((solution)=> logger.info(solution))
//     .catch((error)=>logger.error(error));
//
// quadratic.solve_promise(1,4,40)
//     .then((solution)=> logger.info(solution))
//     .catch((error)=>logger.error(error));

quadratic.solve_async(1, 4, 4)
  .then((solution) => logger.info(solution))
  .catch((error) => logger.error(error));

quadratic.solve_async(1, 4, 40)
  .then((solution) => logger.info(solution))
  .catch((error) => logger.error(error.message));
