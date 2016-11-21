import 'babel-polyfill';
import config from 'config';
import { run as runServer } from './server';
const log = require('saga-logger').create({ module: module.id });

runServer();

log.info('APP_RUNNING');
setInterval(() => log.debug('APP_RUNNING'), config.app.heartbeat);

// Catch all uncaught exception, log it and then die properly
process.on('uncaughtException', err => {
  log.fatal('UNCAUGHT_EXCEPTION', err);
  process.exit(1);
});
